import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { HelperText } from 'react-native-paper';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import userContext from '../../contexts/User';
import { verifyEmailExists } from '../../services';
import * as S from './styles';
import logo from '../../../assets/images/logo.png';

const Register = () => {
  const schema = yup.object().shape({
    nome: yup
      .string()
      .required('O nome é obrigatório!')
      .min(5, 'Digite seu nome completo!'),
    email: yup
      .string()
      .email('Digite um email válido!')
      .required('O email é obrigatório!'),
    password: yup.string().required('A Senha é obrigatório!'),
  });

  const { control, errors, setError, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const { user, dispatch } = useContext(userContext);
  const navigation = useNavigation();

  async function onSubmit(data) {
    const existEmail = await verifyEmailExists(data.email);

    if (existEmail) {
      setError('email', {
        type: 'manual',
        message: 'Email já existente!',
      });
      return;
    }

    dispatch({ type: 'STUDENT:ADD_PROPS', payload: data });
    navigation.navigate('intro');
  }

  return (
    <S.Container>
      <S.Form>
        <S.Logo source={logo} />

        <S.ContainerInputItem>
          {errors.nome && (
            <HelperText padding="none" type="error">
              {errors.nome.message}
            </HelperText>
          )}
          <Controller
            control={control}
            render={({ onChange }) => (
              <S.Input
                label="Nome"
                mode="outlined"
                error={errors.nome}
                onChangeText={(text) => onChange(text)}
                defaultValue={user.nome}
              />
            )}
            name="nome"
            rules={{ required: true }}
            defaultValue={user.nome}
          />
        </S.ContainerInputItem>

        <S.ContainerInputItem>
          {errors.email && (
            <HelperText padding="none" type="error">
              {errors.email.message}
            </HelperText>
          )}
          <Controller
            control={control}
            render={({ onChange }) => (
              <S.Input
                label="Email"
                mode="outlined"
                error={errors.email}
                onChangeText={(text) => onChange(text)}
                defaultValue={user.email}
              />
            )}
            name="email"
            rules={{ required: true }}
            defaultValue={user.email}
          />
        </S.ContainerInputItem>

        <S.ContainerInputItem>
          {errors.password && (
            <HelperText padding="none" type="error">
              {errors.password.message}
            </HelperText>
          )}
          <Controller
            control={control}
            render={({ onChange }) => (
              <S.Input
                label="Password"
                mode="outlined"
                autoCompleteType="password"
                secureTextEntry
                textContentType="password"
                error={errors.password}
                onChangeText={(text) => onChange(text)}
                defaultValue={user.password}
              />
            )}
            name="password"
            rules={{ required: true }}
            defaultValue={user.password}
          />
        </S.ContainerInputItem>

        <S.Button mode="contained" onPress={handleSubmit(onSubmit)}>
          Avançar
        </S.Button>
      </S.Form>
    </S.Container>
  );
};

export default Register;

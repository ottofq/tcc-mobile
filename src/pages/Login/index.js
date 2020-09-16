import React, { useContext, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { HelperText } from 'react-native-paper';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import UserContext from '../../contexts/User';
import AuthContext from '../../contexts/auth';
import * as S from './styles';
import logo from '../../../assets/images/logo.png';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);
  const { login } = useContext(AuthContext);

  const navigation = useNavigation();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Digite um email válido!')
      .required('O email é obrigatório!'),
    password: yup.string().required('A Senha é obrigatório!'),
  });

  const { handleSubmit, control, errors } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    return function cleanup() {
      setLoading(false);
    };
  }, []);

  async function onSubmit(data) {
    try {
      setLoading(true);
      const { email, password } = data;
      await login(email, password);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  }

  function handleRegister() {
    navigation.navigate('register');
  }

  return (
    <S.Container>
      <S.Logo source={logo} />
      <S.Form>
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
                autoCompleteType="email"
                keyboardType="email-address"
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
                label="Senha"
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

        <S.Button
          loading={loading}
          disabled={loading}
          mode="contained"
          onPress={handleSubmit(onSubmit)}
        >
          {loading === false ? 'Login' : ''}
        </S.Button>

        <S.Button mode="contained" onPress={() => handleRegister()}>
          Cadastrar
        </S.Button>
      </S.Form>
    </S.Container>
  );
};

export default Login;

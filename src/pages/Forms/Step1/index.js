import React from 'react';
import { Button, RadioButton, HelperText } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import { useForm, Controller } from 'react-hook-form';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation } from '@react-navigation/native';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import RadioButtonItem from '../../../components/RadioButton';
import ProgressBar from '../../../components/ProgressBar';
import { courseItems } from './selectItem';

import * as S from './styles';

const Step1 = () => {
  const schema = yup.object().shape({
    nome: yup
      .string()
      .required('Campo nome é obrigatório!')
      .min(5, 'Digite seu nome completo!'),
    matricula: yup
      .string()
      .required('Campo matrícula é obrigatório!')
      .matches(/\d{10}/, 'Matrícula inválida!'),
    data_nascimento: yup
      .date()
      .required('Campo data de nascimento é obrigatório!')
      .min('1940-01-01T00:00:00.000Z', 'Data de nascimento inválida!')
      .max('2004-12-31T00:00:00.000Z', 'Data de nascimento inválida!')
      .nullable()
      .default(undefined)
      .typeError('Data de nascimento inválida!'),
    curso: yup.string().required('Campo curso é obrigatório!'),
    ano_ingresso: yup
      .string()
      .required('Campo ano de ingresso é obrigatório!')
      .matches(/^2[0|1]1[0-9]$|2020/, 'Ano de ingresso inválido!'),
    sexo: yup.string().required('Campo obrigatório!'),
  });

  const { handleSubmit, setValue, errors, control } = useForm({
    resolver: yupResolver(schema),
  });

  const navigation = useNavigation();

  function onSubmit(data) {
    navigation.navigate('step-2', {
      params: data,
    });
  }

  return (
    <S.Container>
      <S.ContainerInput>
        <ProgressBar progress={0.1} />
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
              />
            )}
            name="nome"
            rules={{ required: true }}
            defaultValue=""
          />
        </S.ContainerInputItem>

        <S.ContainerInputItem>
          {errors.matricula && (
            <HelperText padding="none" type="error">
              {errors.matricula.message}
            </HelperText>
          )}

          <Controller
            control={control}
            render={({ onChange }) => (
              <S.Input
                label="Matrícula"
                mode="outlined"
                keyboardType="numeric"
                error={errors.matricula}
                render={(props) => (
                  <TextInputMask
                    {...props}
                    type="custom"
                    options={{
                      mask: '9999999999',
                    }}
                  />
                )}
                onChangeText={(text) => onChange(text)}
              />
            )}
            name="matricula"
            rules={{ required: true }}
            defaultValue=""
          />
        </S.ContainerInputItem>

        <S.ContainerInputItem>
          {errors.data_nascimento && (
            <HelperText padding="none" type="error">
              {errors.data_nascimento.message}
            </HelperText>
          )}

          <Controller
            control={control}
            render={({ onChange }) => (
              <S.Input
                label="Data de Nascimento"
                mode="outlined"
                keyboardType="numeric"
                error={errors.data_nascimento}
                render={(props) => (
                  <TextInputMask
                    {...props}
                    type="datetime"
                    options={{
                      format: 'DD/MM/YYYY',
                    }}
                  />
                )}
                onChangeText={(text) => onChange(text)}
              />
            )}
            name="data_nascimento"
            rules={{ required: true }}
            defaultValue={null}
          />
        </S.ContainerInputItem>

        <S.ContainerInputItem>
          {errors.curso && (
            <HelperText padding="none" type="error">
              {errors.curso.message}
            </HelperText>
          )}

          <Controller
            control={control}
            render={({ onChange, value }) => (
              <S.Input
                label="Curso"
                mode="outlined"
                value={value}
                error={errors.curso}
                render={() => (
                  <RNPickerSelect
                    useNativeAndroidPickerStyle={false}
                    placeholder={{
                      label: 'Selecione seu curso',
                      value: null,
                      color: '#fff',
                    }}
                    onValueChange={(text) => onChange(text)}
                    style={S.pickerSelectStyles}
                    items={courseItems}
                  />
                )}
              />
            )}
            name="curso"
            rules={{ required: true }}
            defaultValue=""
          />
        </S.ContainerInputItem>

        <S.ContainerInputItem>
          {errors.ano_ingresso ? (
            <HelperText padding="none" type="error">
              {errors.ano_ingresso.message}
            </HelperText>
          ) : null}

          <Controller
            control={control}
            render={({ onChange }) => (
              <S.Input
                label="Ano de ingresso"
                mode="outlined"
                keyboardType="numeric"
                error={errors.ano_ingresso}
                render={(props) => (
                  <TextInputMask
                    {...props}
                    type="custom"
                    options={{
                      mask: '9999',
                    }}
                  />
                )}
                onChangeText={(text) => onChange(text)}
              />
            )}
            name="ano_ingresso"
            rules={{ required: true }}
            defaultValue=""
          />
        </S.ContainerInputItem>

        <Controller
          render={({ onChange, value }) => (
            <RadioButton.Group onValueChange={(text) => onChange(text)}>
              <S.ContainerRadioButton>
                <S.ContainerTitle>
                  <S.TitleRadioGroup error={errors.sexo}>
                    Sexo:{' '}
                  </S.TitleRadioGroup>
                  {errors.sexo && (
                    <HelperText padding="none" type="error">
                      {errors.sexo.message}
                    </HelperText>
                  )}
                </S.ContainerTitle>
                <RadioButtonItem
                  label="Masculino"
                  value="masculino"
                  status={value === 'masculino' ? 'checked' : 'unchecked'}
                  handlePress={() => setValue('sexo', 'masculino')}
                />

                <RadioButtonItem
                  label="Feminino"
                  value="feminino"
                  status={value === 'feminino' ? 'checked' : 'unchecked'}
                  handlePress={() => setValue('sexo', 'feminino')}
                />
              </S.ContainerRadioButton>
            </RadioButton.Group>
          )}
          name="sexo"
          control={control}
          rules={{ required: true }}
          defaultValue=""
        />
      </S.ContainerInput>

      <Button
        style={{ marginBottom: 5 }}
        mode="contained"
        onPress={handleSubmit(onSubmit)}
      >
        Próximo
      </Button>
    </S.Container>
  );
};

export default Step1;

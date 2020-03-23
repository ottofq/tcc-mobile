import React from 'react';
import {Button, RadioButton, HelperText} from 'react-native-paper';
import {useForm, Controller} from 'react-hook-form';

import RadioButtonItem from '../../../components/RadioButton';

import {
  Container,
  ContainerInputItem,
  ContainerInput,
  ContainerRadioButton,
  ContainerTitle,
  Input,
  TitleRadioGroup,
} from './styles';
export default function Step1({navigation}) {
  const {register, handleSubmit, setValue, errors, control} = useForm();

  function onSubmit(data) {
    //console.log(data);
    navigation.navigate('Questionário passo 2', {
      ...data,
    });
  }

  return (
    <Container>
      <ContainerInput>
        <ContainerInputItem>
          <Input
            label="Nome"
            mode="outlined"
            error={errors.nome}
            ref={register('nome', {required: true})}
            onChangeText={text => setValue('nome', text)}
          />
          {errors.nome && (
            <HelperText padding="none" type="error">
              Campo Obrigatório
            </HelperText>
          )}
        </ContainerInputItem>

        <ContainerInputItem>
          <Input
            label="Data de Nascimento"
            mode="outlined"
            error={errors.data_nascimento}
            keyboardType="number-pad"
            ref={register('data_nascimento', {required: true})}
            onChangeText={text => setValue('data_nascimento', text)}
          />
          {errors.data_nascimento && (
            <HelperText padding="none" type="error">
              Campo Obrigatório
            </HelperText>
          )}
        </ContainerInputItem>

        <ContainerInputItem>
          <Input
            label="Curso"
            mode="outlined"
            error={errors.curso}
            ref={register('curso', {required: true})}
            onChangeText={text => setValue('curso', text)}
          />
          {errors.curso && (
            <HelperText padding="none" type="error">
              Campo Obrigatório
            </HelperText>
          )}
        </ContainerInputItem>

        <ContainerInputItem>
          <Input
            label="Ano de Ingresso"
            mode="outlined"
            error={errors.ano_ingresso}
            keyboardType="number-pad"
            ref={register('ano_ingresso', {required: true})}
            onChangeText={text => setValue('ano_ingresso', text)}
          />
          {errors.ano_ingresso && (
            <HelperText padding="none" type="error">
              Campo Obrigatório
            </HelperText>
          )}
        </ContainerInputItem>
      </ContainerInput>

      <Controller
        as={
          <RadioButton.Group onValueChange={value => setValue('sexo', value)}>
            <ContainerRadioButton>
              <ContainerTitle>
                <TitleRadioGroup error={errors.bolsista}>
                  Sexo:{' '}
                </TitleRadioGroup>
                {errors.bolsista && (
                  <HelperText padding="none" type="error">
                    * Campo Obrigatório
                  </HelperText>
                )}
              </ContainerTitle>
              <RadioButtonItem
                label="Masculino"
                value="masculino"
                handlePress={() => setValue('sexo', 'masculino')}
              />

              <RadioButtonItem
                label="Feminino"
                value="feminino"
                handlePress={() => setValue('sexo', 'feminino')}
              />
            </ContainerRadioButton>
          </RadioButton.Group>
        }
        name="sexo"
        control={control}
        rules={{required: true}}
        defaultValue=""
      />

      <Controller
        as={
          <RadioButton.Group
            onValueChange={value => setValue('bolsista', value)}>
            <ContainerRadioButton>
              <ContainerTitle>
                <TitleRadioGroup error={errors.bolsista}>
                  Você é Bolsista do RU ?{' '}
                </TitleRadioGroup>
                {errors.bolsista && (
                  <HelperText padding="none" type="error">
                    * Campo Obrigatório
                  </HelperText>
                )}
              </ContainerTitle>
              <RadioButtonItem
                label="Não sou bolsista"
                value="false"
                handlePress={() => setValue('bolsista', 'false')}
              />
              <RadioButtonItem
                label="Bolsa Parcial"
                value="bolsa parcial"
                handlePress={() => setValue('bolsista', 'bolsa parcial')}
              />
              <RadioButtonItem
                label="Bolsa Integral"
                value="bolsa integral"
                handlePress={() => setValue('bolsista', 'bolsa integral')}
              />
            </ContainerRadioButton>
          </RadioButton.Group>
        }
        name="bolsista"
        control={control}
        rules={{required: true}}
        defaultValue=""
      />

      <Button mode="contained" onPress={handleSubmit(onSubmit)}>
        Próximo
      </Button>
    </Container>
  );
}

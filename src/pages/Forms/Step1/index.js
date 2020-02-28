import React from 'react';
import {Text} from 'react-native';
import {TextInput, Button, RadioButton} from 'react-native-paper';
import {useForm, Controller} from 'react-hook-form';
import {KeyboardAvoidingView} from 'react-native';

import {
  Container,
  ContainerRadioButton,
  ContainerRadioButtonItem,
  ContainerRadioButtonItemBolsa,
  ContainerRadioButtonBolsa,
  Input,
  TitleRadioGroup,
} from './styles';

export default function Step1({navigation}) {
  const {register, handleSubmit, setValue, errors, control} = useForm();

  function handleButton() {
    navigation.navigate('Questionário passo 2');
  }
  function onSubmit(data) {
    console.log(data);
    navigation.navigate('Questionário passo 2', {
      nome: data.nome,
    });
  }

  return (
    <Container>
      <Input
        label="Nome"
        type="outlined"
        ref={register('nome', {required: true})}
        onChangeText={text => setValue('nome', text)}
      />
      {errors.nome && <Text>Campo Obrigatório</Text>}
      <Input
        label="Data de Nascimento"
        type="outlined"
        keyboardType="number-pad"
        ref={register('data_nascimento', {required: true})}
        onChangeText={text => setValue('data_nascimento', text)}
      />
      {errors.data_nascimento && <Text>Campo Obrigatório</Text>}
      <Input
        label="Curso"
        type="outlined"
        ref={register('curso', {required: true})}
        onChangeText={text => setValue('curso', text)}
      />
      {errors.curso && <Text>Campo Obrigatório</Text>}
      <Input
        label="Ano de Ingresso"
        type="outlined"
        keyboardType="number-pad"
        ref={register('ano_ingresso', {
          required: true,
        })}
        onChangeText={text => setValue('ano_ingresso', text)}
      />
      {errors.ano_ingresso && <Text>Campo Obrigatório</Text>}

      <TitleRadioGroup>Sexo:</TitleRadioGroup>
      <ContainerRadioButton>
        <Controller
          as={
            <RadioButton.Group onValueChange={value => setValue('sexo', value)}>
              <ContainerRadioButtonItem>
                <RadioButton color="#004B82" value="masculino" />
                <Text>Masculino</Text>
              </ContainerRadioButtonItem>
              <ContainerRadioButtonItem>
                <RadioButton color="#004B82" value="feminino" />
                <Text>Feminino</Text>
              </ContainerRadioButtonItem>
            </RadioButton.Group>
          }
          name="sexo"
          control={control}
          onChange={value => setValue('sexo', value)}
          rules={{required: true}}
          defaultValue=""
        />
      </ContainerRadioButton>

      <TitleRadioGroup>Bolsista RU:</TitleRadioGroup>
      <ContainerRadioButtonBolsa>
        <Controller
          as={
            <RadioButton.Group
              onValueChange={value => setValue('bolsista', value)}>
              <ContainerRadioButtonItemBolsa>
                <RadioButton color="#004B82" value="Não sou bolsista" />
                <Text>Não sou bolsista</Text>
              </ContainerRadioButtonItemBolsa>
              <ContainerRadioButtonItemBolsa>
                <RadioButton color="#004B82" value="Bolsa Parcial" />
                <Text>Bolsa Parcial</Text>
              </ContainerRadioButtonItemBolsa>
              <ContainerRadioButtonItemBolsa>
                <RadioButton color="#004B82" value="Bolsa Integral" />
                <Text>Bolsa Integral (almoço e janta)</Text>
              </ContainerRadioButtonItemBolsa>
            </RadioButton.Group>
          }
          name="bolsista"
          control={control}
          onChange={value => setValue('sexo', value)}
          rules={{required: true}}
          defaultValue=""
        />
      </ContainerRadioButtonBolsa>

      <Button mode="contained" onPress={handleSubmit(onSubmit)}>
        Próximo
      </Button>
    </Container>
  );
}

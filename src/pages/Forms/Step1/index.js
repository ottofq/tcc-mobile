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
  TextError,
  styles,
} from './styles';

export default function Step1({navigation}) {
  const {register, handleSubmit, setValue, errors, control} = useForm();

  function handleButton() {
    navigation.navigate('Questionário passo 2');
  }
  function onSubmit(data) {
    navigation.navigate('Questionário passo 2', {
      ...data,
    });
  }

  return (
    <Container>
      <Input
        label="Nome"
        type="outlined"
        ref={register('nome')}
        onChangeText={text => setValue('nome', text)}
      />
      {errors.nome && <TextError>Campo Obrigatório</TextError>}
      <Input
        label="Data de Nascimento"
        type="outlined"
        keyboardType="number-pad"
        ref={register('data_nascimento')}
        onChangeText={text => setValue('data_nascimento', text)}
      />
      {errors.data_nascimento && <TextError>Campo Obrigatório</TextError>}
      <Input
        label="Curso"
        type="outlined"
        ref={register('curso')}
        onChangeText={text => setValue('curso', text)}
      />
      {errors.curso && <TextError>Campo Obrigatório</TextError>}
      <Input
        label="Ano de Ingresso"
        type="outlined"
        keyboardType="number-pad"
        ref={register('ano_ingresso')}
        onChangeText={text => setValue('ano_ingresso', text)}
      />
      {errors.ano_ingresso && <TextError>Campo Obrigatório</TextError>}

      <TitleRadioGroup>Sexo:</TitleRadioGroup>
      <ContainerRadioButton>
        <Controller
          as={
            <RadioButton.Group onValueChange={value => setValue('sexo', value)}>
              <ContainerRadioButtonItem>
                <RadioButton.Item
                  style={styles.radioItem}
                  label="Masculino"
                  value="masculino"
                />
              </ContainerRadioButtonItem>
              <ContainerRadioButtonItem>
                <RadioButton.Item
                  style={styles.radioItem}
                  label="Feminino"
                  value="feminino"
                />
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
                <RadioButton.Item
                  style={styles.radioItem}
                  label="Não sou Bolsista"
                  value="Não sou bolsista"
                />
              </ContainerRadioButtonItemBolsa>
              <ContainerRadioButtonItemBolsa>
                <RadioButton.Item
                  style={styles.radioItem}
                  label="Bolsa Parcial"
                  value="Bolsa Parcial"
                />
              </ContainerRadioButtonItemBolsa>
              <ContainerRadioButtonItemBolsa>
                <RadioButton.Item
                  style={styles.radioItem}
                  label="Bolsa Integral"
                  value="Bolsa Integral"
                />
              </ContainerRadioButtonItemBolsa>
            </RadioButton.Group>
          }
          name="bolsista"
          control={control}
          onChange={value => setValue('bolsa', value)}
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

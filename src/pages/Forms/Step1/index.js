import React from 'react';
import {Text} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {useForm} from 'react-hook-form';

export default function Step1({navigation}) {
  const {register, handleSubmit, setValue, errors} = useForm();

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
    <>
      <TextInput
        label="Nome"
        type="outlined"
        ref={register('nome', {required: true})}
        onChangeText={text => setValue('nome', text)}
      />
      {errors.nome && <Text>Error</Text>}

      <Button mode="contained" onPress={handleSubmit(onSubmit)}>
        Next
      </Button>
    </>
  );
}

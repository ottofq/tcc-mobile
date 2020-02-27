import React from 'react';
import {useForm} from 'react-hook-form';
import {TextInput, Button} from 'react-native-paper';

export default function Step2({route, navigation}) {
  const {register, handleSubmit, setValue, errors} = useForm();
  const {nome} = route.params;
  function handleButtonNext(data) {
    const obj = {nome, ...data};
    console.log(obj);
    navigation.navigate('Questionário passo 3', {
      data: obj,
    });
  }
  function handleButtonPrev() {
    navigation.goBack();
  }

  return (
    <>
      <TextInput
        label="Matricula"
        ref={register('matricula', {
          required: true,
          minLength: 10,
          maxLength: 10,
        })}
        onChangeText={text => setValue('matricula', text)}
        keyboardType="number-pad"
        type="outlined"
      />
      <Button mode="contained" onPress={handleSubmit(handleButtonNext)}>
        Next
      </Button>
      <Button mode="contained" onPress={handleButtonPrev}>
        Prev
      </Button>
    </>
  );
}

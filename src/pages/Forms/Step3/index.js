import React from 'react';
import {TextInput, Button} from 'react-native-paper';

export default function Step3({navigation}) {
  function handleButtonNext() {
    navigation.navigate('Cardapio RU - CCA UFES');
  }
  function handleButtonPrev() {
    navigation.goBack();
  }

  return (
    <>
      <TextInput
        label="Ano de Ingresso"
        keyboardType="number-pad"
        type="outlined"
      />
      <Button mode="contained" onPress={handleButtonNext}>
        Next
      </Button>
      <Button mode="contained" onPress={handleButtonPrev}>
        Prev
      </Button>
    </>
  );
}

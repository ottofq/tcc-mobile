import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default function Info({navigation}) {
  function handleButton() {
    navigation.navigate('Questionario', {screen: 'Questionario passo 1'});
  }
  return (
    <>
      <Text>Info</Text>
      <TouchableOpacity
        style={{height: 200, width: 200, borderWidth: 1, borderColor: 'black'}}
        onPress={handleButton}>
        <Text style={{textAlign: 'center', marginTop: 80, fontSize: 24}}>
          Teste
        </Text>
      </TouchableOpacity>
    </>
  );
}

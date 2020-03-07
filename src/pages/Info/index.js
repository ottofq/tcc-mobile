import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default function Info({navigation}) {
  function handleButton() {
    navigation.navigate('Questionario', {screen: 'Questionario passo 1'});
  }
  return (
    <>
      <Text>Info</Text>
    </>
  );
}

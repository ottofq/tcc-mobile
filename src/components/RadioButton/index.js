import React from 'react';
import {TouchableNativeFeedback} from 'react-native';
import {RadioButton} from 'react-native-paper';

import {Container, Label} from './styles';

export default function RadioButtonItem({value, handlePress, label}) {
  return (
    <TouchableNativeFeedback onPress={handlePress}>
      <Container>
        <RadioButton.Android value={value} color="#004B82" />
        <Label>{label}</Label>
      </Container>
    </TouchableNativeFeedback>
  );
}

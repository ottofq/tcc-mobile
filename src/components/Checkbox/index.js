import React from 'react';
import {TouchableNativeFeedback} from 'react-native';
import {Checkbox} from 'react-native-paper';

import {Container, Label} from './styles';

export default function CheckboxItem({onPress, label, status}) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <Container>
        <Checkbox.Android status={status} onPress={onPress} color="#004B82" />
        <Label>{label}</Label>
      </Container>
    </TouchableNativeFeedback>
  );
}

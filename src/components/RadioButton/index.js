import React from 'react';
import PropTypes from 'prop-types';
import { TouchableNativeFeedback } from 'react-native';
import { RadioButton } from 'react-native-paper';

import { Container, Label } from './styles';

const RadioButtonItem = ({ value, handlePress, label }) => {
  return (
    <TouchableNativeFeedback onPress={handlePress}>
      <Container>
        <RadioButton.Android value={value} color="#004B82" />
        <Label>{label}</Label>
      </Container>
    </TouchableNativeFeedback>
  );
};

RadioButtonItem.propTypes = {
  value: PropTypes.string.isRequired,
  handlePress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default RadioButtonItem;

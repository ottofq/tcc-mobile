import React from 'react';
import PropTypes from 'prop-types';
import { TouchableNativeFeedback } from 'react-native';
import { Checkbox } from 'react-native-paper';

import { Container, Label } from './styles';

const CheckboxItem = ({ onPress, label, status }) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <Container>
        <Checkbox.Android status={status} onPress={onPress} color="#004B82" />
        <Label>{label}</Label>
      </Container>
    </TouchableNativeFeedback>
  );
};

CheckboxItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default CheckboxItem;

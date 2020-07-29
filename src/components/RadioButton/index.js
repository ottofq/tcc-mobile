import React from 'react';
import PropTypes from 'prop-types';
import { TouchableNativeFeedback } from 'react-native';
import { RadioButton } from 'react-native-paper';

import { colors } from '../../styles';
import * as S from './styles';

const RadioButtonItem = ({ value, handlePress, label }) => {
  return (
    <TouchableNativeFeedback onPress={handlePress}>
      <S.Container>
        <RadioButton.Android value={value} color={colors.primary} />
        <S.Label>{label}</S.Label>
      </S.Container>
    </TouchableNativeFeedback>
  );
};

RadioButtonItem.propTypes = {
  value: PropTypes.string.isRequired,
  handlePress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default RadioButtonItem;

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { TouchableNativeFeedback } from 'react-native';
import { Checkbox } from 'react-native-paper';

import { colors } from '../../styles';
import * as S from './styles';

const CheckboxItem = ({ onPress, label, status }) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <S.Container>
        <Checkbox.Android
          status={status}
          onPress={onPress}
          color={colors.primary}
        />
        <S.Label>{label}</S.Label>
      </S.Container>
    </TouchableNativeFeedback>
  );
};

CheckboxItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default memo(CheckboxItem);

import styled from 'styled-components/native';
import {TextInput} from 'react-native-paper';
import {StyleSheet, KeyboardAvoidingView} from 'react-native';

export const Container = styled(KeyboardAvoidingView).attrs({
  behavior: 'padding',
})`
  flex: 1;
  padding: 5px 5px;
  margin-bottom: 10px;
  justify-content: space-between;
`;
export const ContainerRadioButton = styled.View`
  flex-direction: row;
`;

export const ContainerRadioButtonItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;

export const ContainerRadioButtonBolsa = styled.View`
  align-items: flex-start;
  margin-bottom: 5px;
`;

export const ContainerRadioButtonItemBolsa = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;

export const Input = styled(TextInput)`
  margin-bottom: 10px;
  height: 50px;
`;

export const TitleRadioGroup = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-weight: bold;
`;

export const TextError = styled.Text`
  font-size: 10px;
  color: #ff0025;
`;

export const styles = StyleSheet.create({
  radioItem: {
    flexDirection: 'row-reverse',
  },
});

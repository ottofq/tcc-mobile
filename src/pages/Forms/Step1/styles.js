import styled from 'styled-components/native';
import {TextInput} from 'react-native-paper';

export const Container = styled.View`
  flex: 1;
  padding: 5px 5px;
`;
export const ContainerRadioButton = styled.View`
  flex-direction: row;
  border: 1px solid #004b82;
`;

export const ContainerRadioButtonItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;

export const ContainerRadioButtonBolsa = styled.View`
  align-items: flex-start;
  border: 1px solid #004b82;
  margin-bottom: 5px;
`;

export const ContainerRadioButtonItemBolsa = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;

export const Input = styled(TextInput)`
  margin-bottom: 5px;
  height: 60px;
`;

export const TitleRadioGroup = styled.Text`
  margin-top: 5px;
  font-size: 16px;
`;

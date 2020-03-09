import styled from 'styled-components/native';
import {TextInput} from 'react-native-paper';
import {KeyboardAvoidingView} from 'react-native';

export const Container = styled(KeyboardAvoidingView).attrs({
  behavior: 'position',
  contentContainerStyle: {
    flex: 1,
    justifyContent: 'space-between',
  },
})`
  flex: 1;
  padding: 5px 5px;
`;
export const TitleCheckboxGroup = styled.Text`
  margin-top: 5px;
  margin-left: 5px;
  font-size: 20px;
  font-weight: bold;
`;

export const TitleCheckbox = styled.Text`
  font-size: 18px;
`;

export const ContainerButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
`;

export const ContainerCheckbox = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

export const Input = styled(TextInput)`
  margin-bottom: 5px;
  height: 50px;
`;

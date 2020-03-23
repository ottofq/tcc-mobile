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
  font-size: 20px;
  font-family: 'PTSans-Bold';
`;

export const ContainerButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Input = styled(TextInput)`
  margin-bottom: 15px;
`;

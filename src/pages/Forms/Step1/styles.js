import styled from 'styled-components/native';
import {TextInput} from 'react-native-paper';

export const Container = styled.View`
  flex: 1;
  padding: 5px 5px;
  justify-content: space-around;
`;

export const ContainerInput = styled.View`
  flex: 1;
  justify-content: space-around;
`;

export const ContainerInputItem = styled.View``;

export const ContainerRadioButton = styled.View`
  justify-content: space-around;
`;

export const ContainerTitle = styled.View`
  margin-bottom: 5px;
  flex-direction: row;
`;

export const Input = styled(TextInput)``;

export const TitleRadioGroup = styled.Text`
  font-size: 18px;
  font-family: 'PTSans-Bold';
  color: ${props => (props.error ? '#B00020' : 'black')};
`;

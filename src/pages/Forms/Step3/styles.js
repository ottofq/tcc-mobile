import styled from 'styled-components/native';
import {TextInput} from 'react-native-paper';

export const Container = styled.ScrollView`
  padding: 5px 5px;
`;

export const ContainerRadioButton = styled.View`
  justify-content: space-around;
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const TitleRadioGroup = styled.Text`
  font-size: 18px;
  font-family: 'PTSans-Bold';
  color: ${props => (props.error ? '#B00020' : 'black')};
`;

export const ContainerButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
`;

export const Input = styled(TextInput)`
  margin-bottom: ${props => (props.keyboardShow ? '20px' : '0px')};
`;

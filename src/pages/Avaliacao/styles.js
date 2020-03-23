import styled from 'styled-components/native';
import {Button} from 'react-native-paper';
import {KeyboardAvoidingView} from 'react-native';

export const Container = styled(KeyboardAvoidingView).attrs({
  behavior: 'padding',
})`
  flex: 1;
  justify-content: space-around;
  font-family: 'PT Sans';
`;

export const Title = styled.Text`
  font-size: 45px;
  color: #004b82;
  text-align: center;
  margin-top: 10px;
  font-family: 'PTSans-Bold';
`;

export const ContainerComentario = styled.View`
  border: 1px solid #004b82;
  padding: 5px;
  margin: 0px 15px;
  margin-bottom: 70px;
`;

export const InputComentario = styled.TextInput.attrs({
  underlineColorAndroid: 'transparent',
  placeholder: 'Digite um comentário',
  placeholderTextColor: 'grey',
  numberOfLines: 4,
  multiline: true,
})`
  font-size: 18px;
  padding: 5px;
  text-align-vertical: top;
  height: 150px;
`;

export const ButtonSubmit = styled(Button)`
  margin-bottom: 5px;
  margin: 0px 15px;
  height: 50px;
  justify-content: center;
`;

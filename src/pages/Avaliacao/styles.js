import styled from 'styled-components/native';
import {Button} from 'react-native-paper';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 45px;
  color: #004b82;
  text-align: center;
  margin-top: 10px;
  font-family: 'PTSans-Bold';
`;

export const ContainerSubmit = styled.View`
  margin-top: ${props => (props.keyboardVisible ? '0px' : '140px')};
`;

export const InputComentario = styled.TextInput.attrs({
  underlineColorAndroid: 'transparent',
  placeholder: 'Digite um comentário',
  placeholderTextColor: 'grey',
  numberOfLines: 4,
  multiline: true,
})`
  border: 1px solid #004b82;
  margin: 0px 15px;
  font-size: 18px;
  padding: 5px;
  text-align-vertical: top;
  height: 150px;
`;

export const ButtonSubmit = styled(Button)`
  margin: 5px 15px;
  height: 50px;
  justify-content: center;
`;

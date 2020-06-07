import styled from 'styled-components/native';
import {Button} from 'react-native-paper';
import Lottie from 'lottie-react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
`;

export const ScrollViewAvaliacao = styled.ScrollView.attrs({
  contentContainerStyle: {flexGrow: 1, justifyContent: 'space-between'},
})`
  flex: 1;
`;

export const ContainerAnimacao = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${hp(6)}px;
  color: #004b82;
  text-align: center;
  margin-top: ${hp(1)}px;
  font-family: 'PTSans-Bold';
`;

export const ContainerSubmit = styled.View`
  margin-top: ${props => (props.keyboardVisible ? '0px' : `${hp(6)}px`)};
`;

export const InputComentario = styled.TextInput.attrs({
  underlineColorAndroid: 'transparent',
  placeholder: 'Digite um comentário',
  placeholderTextColor: 'grey',
  numberOfLines: 4,
  multiline: true,
})`
  border: 1px solid #004b82;
  margin: ${hp(1)}px;
  font-size: ${hp(3)}px;
  padding: ${hp(1)}px;
  text-align-vertical: top;
  height: ${hp(30)}px;
`;

export const ButtonSubmit = styled(Button)`
  margin: ${hp(1)}px;
  height: ${hp(8)}px;
  justify-content: center;
`;

export const Animation = styled(Lottie)`
  width: 400px;
  height: 400px;
`;

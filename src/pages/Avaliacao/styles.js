import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
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
`;

export const InputComentario = styled.TextInput.attrs({
  underlineColorAndroid: 'transparent',
  placeholder: 'Digite um comentário',
  placeholderTextColor: 'grey',
  numberOfLines: 4,
  multiline: true,
})`
  font-size: 18px;
  text-align: center;
  height: 150px;
`;

import styled from 'styled-components/native';
import { Button as PaperButton, TextInput } from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { colors, fonts } from '../../styles';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
})`
  background-color: ${colors.primary};
`;

export const Form = styled.View`
  align-items: center;
  background-color: white;
  justify-content: space-evenly;
  width: ${wp(80)}px;
  height: ${hp(45)}px;
  padding: ${hp(1)}px;
  border-radius: 4px;
`;

export const Logo = styled.Image`
  height: ${hp(20)}px;
  width: 100%;
  resize-mode: contain;
  background-color: ${colors.primary};
  margin-bottom: ${hp(2)}px;
`;

export const ContainerInputItem = styled.View`
  width: 100%;
`;

export const Input = styled(TextInput)``;

export const Button = styled(PaperButton).attrs({
  color: '#fff',
  contentStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  labelStyle: {
    fontSize: fonts.big,
    color: '#fff',
  },
})`
  align-self: stretch;
`;

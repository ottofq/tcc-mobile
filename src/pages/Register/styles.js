import styled from 'styled-components/native';
import { Button as PaperButton, TextInput } from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { colors, fonts } from '../../styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
  align-items: center;
  justify-content: center;
`;

export const Form = styled.View`
  align-items: center;
  background-color: white;
  justify-content: space-around;
  width: ${wp(70)}px;
  height: ${hp(70)}px;
  padding: ${hp(1)}px;
  border-radius: 4px;
`;

export const Logo = styled.Image`
  height: ${hp(20)}px;
  width: 100%;
  resize-mode: contain;
  background-color: ${colors.primary};
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

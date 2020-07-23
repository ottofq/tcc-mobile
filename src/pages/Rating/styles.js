import styled from 'styled-components/native';
import { Button as ButtonNativePaper } from 'react-native-paper';
import Lottie from 'lottie-react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { fonts, colors } from '../../styles';

export const Container = styled.View`
  flex: 1;
`;

export const RatingContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: ${hp(1)}px;
`;

export const AnimationContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${fonts.giant}px;
  color: ${colors.primary};
  text-align: center;
  margin-top: ${hp(1)}px;
  font-family: 'PTSans-Bold';
`;

export const SubmitContainer = styled.View`
  margin-top: ${(props) => (props.keyboardVisible ? '0px' : `${hp(6)}px`)};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${colors.primary};
  border-radius: 4px;
`;

export const Input = styled.TextInput.attrs({
  underlineColorAndroid: 'transparent',
  placeholder: 'Digite um comentário',
  placeholderTextColor: 'grey',
  numberOfLines: 4,
  multiline: true,
})`
  font-size: ${hp(3)}px;
  padding: ${hp(1)}px;
  height: ${hp(8)}px;
  width: ${wp(80)}px;
`;

export const Button = styled(ButtonNativePaper).attrs({
  contentStyle: {
    height: hp(8),
    justifyContent: 'center',
  },
})``;

export const Animation = styled(Lottie)`
  display: flex;
  flex: 1;
`;

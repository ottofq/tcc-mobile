import styled from 'styled-components/native';
import { Button as ButtonNativePaper } from 'react-native-paper';
import Lottie from 'lottie-react-native';
import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { fonts, colors } from '../../../styles';

export const Container = styled.ScrollView.attrs({
  centerContent: true,
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
})`
  flex: 1;
  background-color: white;
`;

export const Title = styled.Text`
  font-size: ${fonts.giant}px;
  color: ${colors.primary};
  text-align: center;
  font-family: 'PTSans-Bold';
`;

export const RatingContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  height: ${hp(180)}px;
  padding: ${hp(1)}px;
`;

export const RattingWrapper = styled.View`
  background-color: ${colors.tertiary};
  border-radius: 4px;
  border: 1px solid ${colors.grayLight};
  height: ${hp(20)}px;
  align-items: center;
  justify-content: center;
`;

export const Description = styled(Title)`
  font-size: ${fonts.bigger}px;
`;

export const AnimationContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  height: 500px;
`;

export const SubmitContainer = styled.View`
  border: 1px solid ${colors.primary};
  border-radius: 4px;
`;

export const Input = styled.TextInput.attrs({
  underlineColorAndroid: 'transparent',
  placeholder: 'Digite um comentário',
  placeholderTextColor: 'grey',
  numberOfLines: 4,
  multiline: true,
  editable: true,
  spellCheck: true,
})`
  font-size: ${hp(3)}px;
  padding: ${hp(1)}px;
  height: ${hp(22)}px;
`;

export const Button = styled(ButtonNativePaper).attrs({
  contentStyle: {
    height: hp(7),
  },
  labelStyle: {
    fontSize: fonts.regular,
  },
})``;

export const Animation = styled(Lottie)`
  display: flex;
  flex: 1;
`;

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

import styled from 'styled-components/native';
import { Button as ButtonNativePaper } from 'react-native-paper';
import Lottie from 'lottie-react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { fonts, colors } from '../../styles';

export const Container = styled.ScrollView.attrs({
  centerContent: true,
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
})`
  flex: 1;
  background-color: ${colors.tertiary};
`;

export const RatingContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: ${hp(1)}px;
`;

export const TitleCurrentRating = styled.Text`
  font-size: ${fonts.superBig}px;
  color: ${colors.primary};
  text-align: center;
  margin-top: ${hp(1)}px;
  font-family: 'PTSans-Bold';
`;

export const TotalRatings = styled(TitleCurrentRating)`
  font-size: ${fonts.regular}px;
`;

export const CurrentRatingContainer = styled.View`
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const AnimationContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  height: 500px;
`;

export const Title = styled.Text`
  font-size: ${fonts.giant}px;
  color: ${colors.primary};
  text-align: center;
  margin-top: ${hp(1)}px;
  font-family: 'PTSans-Bold';
`;

export const SubmitContainer = styled.View`
  margin-top: ${hp(6.2)}px;
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

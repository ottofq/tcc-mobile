import styled from 'styled-components/native';
import { Button as ButtonNativePaper } from 'react-native-paper';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { fonts, colors } from '../../../styles';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flex: 1,
    justifyContent: 'space-around',
  },
})`
  padding: 5px;
  background-color: white;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${fonts.big}px;
  color: ${colors.primary};
  font-family: 'PTSans-Bold';
`;

export const TotalRatings = styled(Title)`
  font-size: ${fonts.big}px;
`;

export const Button = styled(ButtonNativePaper).attrs({
  contentStyle: {
    height: hp(6),
  },
  labelStyle: {
    fontSize: fonts.regular,
  },
})``;

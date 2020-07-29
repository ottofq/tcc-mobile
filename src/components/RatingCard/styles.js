import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { fonts, colors } from '../../styles';

export const Container = styled.View`
  border: 1px solid ${colors.grayLight};
  border-radius: 4px;
  background-color: ${colors.primary};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: ${hp(12)}px;
`;

export const Title = styled.Text`
  font-size: ${fonts.big}px;
  color: #fff;
  text-align: center;
  margin-top: ${hp(1)}px;
  font-family: 'PTSans-Bold';
`;

export const WrapperTitle = styled.View``;

export const WrapperRating = styled.View``;

export const WrapperTotalVotes = styled.View`
  border: 1px solid ${colors.grayLight};
  height: ${hp(10)}px;
  width: ${hp(10)}px;
  border-radius: ${hp(5)}px;
`;

export const TotalRatings = styled(Title)`
  font-size: ${fonts.regular}px;
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

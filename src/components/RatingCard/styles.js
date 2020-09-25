import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { fonts, colors } from '../../styles';

export const Container = styled.View`
  background-color: ${colors.tertiary};
  border-radius: 4px;
  border: 1px solid ${colors.grayLight};
  height: ${hp(10)}px;
  align-items: center;
  justify-content: center;
`;

export const Loading = styled.View`
  background-color: ${colors.grayMedium};
  border-radius: ${(props) => props.radius}px;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  margin-top: ${hp(1)}px;
`;

export const Description = styled.Text`
  font-size: ${fonts.regular}px;
  color: ${colors.primary};
  font-family: 'PTSans-Bold';
`;

export const Review = styled(Description)``;

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

import styled from 'styled-components/native';
import { Pressable, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { fonts, colors } from '../../styles';

export const Card = styled(Pressable).attrs({
  android_ripple: {
    color: colors.grayLight,
  },
})`
  border-radius: 8px;
  border: 1px solid ${colors.grayLight};
  background-color: ${colors.tertiary};
  padding: 5px;
  margin: 10px 0;
`;

export const ContentContainer = styled.View`
  flex-direction: row;
`;

export const Content = styled.View`
  width: 330px;
`;

export const Date = styled.Text`
  font-family: 'PTSans-Bold';
`;

export const Title = styled.Text`
  font-family: 'PTSans-Regular';
  line-height: 25px;
  font-size: ${fonts.regular}px;
  color: ${colors.black};
`;

export const ArrowContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  border-left-width: 1px;
  border-left-color: ${colors.grayLight};
`;

export const Arrow = styled.Text`
  font-size: ${fonts.bigger}px;
`;

export const Loading = styled.View`
  background-color: ${colors.grayMedium};
  border-radius: ${(props) => props.radius}px;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  align-self: flex-start;
  margin: ${hp(1)}px;
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

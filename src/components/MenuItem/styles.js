import styled from 'styled-components';
import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { fonts, colors } from '../../styles';

export const Container = styled.View`
  background-color: ${colors.tertiary};
  border-radius: 4px;
  border: 1px solid ${colors.grayLight};
  flex-direction: row;
  align-items: center;
`;

export const Loading = styled.View`
  background-color: ${colors.grayMedium};
  border-radius: ${(props) => props.radius}px;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  align-self: flex-start;
  margin: ${hp(1)}px;
`;

export const Image = styled.Image`
  width: ${hp(6)}px;
  height: ${hp(6)}px;
  margin: ${hp(1)}px;
`;

export const TextContainer = styled.View`
  align-items: center;
  margin-left: ${hp(1)}px;
`;

export const Description = styled.Text`
  font-family: 'PTSans-Bold';
  align-self: flex-start;
  font-size: ${fonts.bigger}px;
  color: ${colors.black};
`;

export const Title = styled.Text`
  font-family: 'PTSans-Regular';
  align-self: flex-start;
  font-size: ${fonts.small}px;
  font-weight: 200;
  color: ${colors.grayDark};
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

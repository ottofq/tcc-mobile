import styled from 'styled-components/native';
import {Button} from 'react-native-paper';
import Lottie from 'lottie-react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
  padding: ${hp(2.5)}px;
  background-color: #004b82;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerLogo = styled.View`
  align-items: center;
`;

export const Animation = styled(Lottie).attrs({})`
  height: ${hp(40)}px;
  width: ${wp(40)}px;
`;

export const ContainerDescription = styled.View`
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.Text`
  font-family: 'PTSans-Bold';
  color: #fff;
  font-size: ${hp(4)}px;
`;

export const Description = styled.Text`
  font-family: 'PTSans-Regular';
  font-size: ${hp(3)}px;
  color: #fff;
  text-align: justify;
`;

export const TitleLogo = styled.Text`
  font-family: 'PTSans-Bold';
  color: #fff;
  font-size: ${hp(5)}px;
  padding: 10px;
`;

export const ButtonNext = styled(Button).attrs({
  color: '#fff',
  contentStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelStyle: {
    fontSize: hp(3),
    color: '#004b82',
  },
})`
  align-self: stretch;
  color: black;
`;

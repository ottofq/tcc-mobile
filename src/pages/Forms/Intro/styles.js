import styled from 'styled-components/native';
import {Button} from 'react-native-paper';
import Lottie from 'lottie-react-native';

export const Container = styled.View`
  flex: 1;
  padding: 15px;
  background-color: #004b82;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerLogo = styled.View`
  align-items: center;
`;

export const Animation = styled(Lottie).attrs({})`
  height: 250px;
  width: 250px;
`;

export const ContainerDescription = styled.View`
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.Text`
  font-family: 'PTSans-Bold';
  color: #fff;
  font-size: 32px;
  margin-bottom: 5px;
`;

export const Description = styled.Text`
  font-family: 'PTSans-Regular';
  font-size: 22px;
  color: #fff;
  text-align: justify;
`;

export const Logo = styled.Image`
  height: 150px;
  width: 150px;
  border-radius: 75px;
  border-width: 1px;
  border-color: #fff;
`;

export const TitleLogo = styled.Text`
  font-family: 'PTSans-Bold';
  color: #fff;
  font-size: 35px;
  padding: 10px;
`;

export const ButtonNext = styled(Button).attrs({
  color: '#fff',
  contentStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelStyle: {
    fontSize: 20,
    color: '#004b82',
  },
})`
  align-self: stretch;
  color: black;
`;
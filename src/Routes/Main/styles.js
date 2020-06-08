import styled from 'styled-components/native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
  height: ${hp(30)}px;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.Text`
  font-size: ${hp(3)}px;
  font-family: 'PTSans-Bold';
  color: #fff;
`;

export const Logo = styled.Image`
  height: ${hp(20)}px;
  resize-mode: contain;
`;

export const Divider = styled.View`
  background-color: #f5f5f5;
  height: 0.5px;
  width: 100%;
`;

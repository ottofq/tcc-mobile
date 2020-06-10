import styled from 'styled-components/native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
`;
export const Label = styled.Text`
  font-family: 'PTSans-Regular';
  font-size: ${hp(2.5)}px;
`;

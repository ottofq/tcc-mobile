import styled from 'styled-components';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { colors, fonts } from '../../styles';

export const Container = styled.View`
  border: 1px solid ${colors.black};
  border-radius: ${hp(1)}px;
  padding: ${hp(1)}px;
  flex-direction: row;
  justify-content: center;
`;

export const Loading = styled.View`
  background-color: ${colors.grayMedium};
  border-radius: ${(props) => props.radius}px;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  align-self: flex-start;
  margin: ${hp(1)}px;
`;

export const Title = styled.Text`
  font-family: 'PTSans-Bold';
  font-size: ${fonts.small}px;
  color: ${colors.black};
`;

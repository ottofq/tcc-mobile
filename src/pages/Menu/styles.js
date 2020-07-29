import styled from 'styled-components/native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors, fonts } from '../../styles';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'space-around',
  },
})`
  flex: 1;
  background-color: #fff;
  padding: ${hp(1)}px;
`;

export const TextFooter = styled.Text`
  font-family: 'PTSans-Regular';
  font-size: ${fonts.smaller}px;
  color: ${colors.grayDark};
`;

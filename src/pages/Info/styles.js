import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors, fonts } from '../../styles';

export const Container = styled.ScrollView`
  flex: 1;
  padding: ${hp(1)}px;
`;

export const Title = styled.Text`
  font-family: 'PTSans-Bold';
  font-size: ${fonts.superBig}px;
  text-align: center;
  padding: ${hp(1)}px 0;
  color: ${colors.primary};
`;

export const Description = styled.Text`
  font-family: 'PTSans-Regular';
  text-align: center;
  font-size: ${fonts.smaller}px;
`;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: hp(1),
    backgroundColor: '#fff',
    paddingBottom: hp(1),
  },
  borderTable: { borderWidth: 1, borderColor: colors.grayLight },
  head: { height: hp(12), backgroundColor: colors.primary },
  titleHead: {
    margin: hp(1),
    color: '#fff',
    fontSize: fonts.smaller,
    textAlign: 'center',
    fontFamily: 'PTSans-Bold',
  },
  textRow: {
    margin: hp(0.5),
    fontFamily: 'PTSans-Regular',
    textAlign: 'center',
  },
});

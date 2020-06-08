import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const Container = styled.ScrollView`
  flex: 1;
  padding: ${hp(1)}px;
`;

export const Title = styled.Text`
  font-family: 'PTSans-Bold';
  font-size: ${hp(3.2)}px;
  text-align: center;
  padding: ${hp(1)}px 0;
  color: #004b82;
`;

export const TitleInfo = styled(Title)`
  font-size: ${hp(3)}px;
`;

export const InfoDescription = styled.Text`
  font-family: 'PTSans-Regular';
  text-align: center;
`;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: hp(1),
    backgroundColor: '#fff',
    paddingBottom: hp(1),
  },
  borderTable: {borderWidth: 1, borderColor: '#000'},
  head: {height: hp(12), backgroundColor: '#004B82'},
  titleHead: {
    margin: hp(1),
    color: '#fff',
    fontSize: hp(1.95),
    textAlign: 'center',
    fontFamily: 'PTSans-Bold',
  },
  textRow: {
    margin: hp(0.5),
    fontFamily: 'PTSans-Regular',
    textAlign: 'center',
  },
});

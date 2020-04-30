import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Container = styled.ScrollView`
  flex: 1px;
  padding: 5px;
`;

export const Title = styled.Text`
  font-family: 'PTSans-Bold';
  font-size: 24px;
  text-align: center;
  padding: 2px 0;
  color: #004b82;
`;

export const TitleInfo = styled(Title)`
  font-size: 16px;
`;

export const InfoDescription = styled.Text`
  font-family: 'PTSans-Regular';
  text-align: center;
`;

export const styles = StyleSheet.create({
  container: {flex: 1, margin: 5, backgroundColor: '#fff', paddingBottom: 40},
  borderTable: {borderWidth: 1, borderColor: '#000'},
  head: {height: 70, backgroundColor: '#004B82'},
  titleHead: {
    margin: 7,
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'PTSans-Bold',
  },
  textRow: {
    margin: 7,
    fontFamily: 'PTSans-Regular',
    textAlign: 'center',
  },
});

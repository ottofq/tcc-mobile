import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const ButtonLeft = styled.TouchableOpacity`
  width: 50px;
  padding-left: 15px;
`;

export const Container = styled.View`
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
  container: {flex: 1, backgroundColor: '#fff'},
  borderTable: {borderWidth: 1, borderColor: '#e2e2e2'},
  head: {height: 50, backgroundColor: '#004B82'},
  titleHead: {margin: 3, color: '#fff', fontFamily: 'PTSans-Bold'},
  textRow: {margin: 4, fontFamily: 'PTSans-Regular'},
});

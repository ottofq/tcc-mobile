import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

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

export const ContainerTitle = styled.View`
  border: 1px solid #101113;
  border-radius: ${hp(1)}px;
  padding: ${hp(1)}px;
  flex-direction: row;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: 'PTSans-Bold';
  font-size: ${hp(2.3)}px;
  color: #101113;
`;

export const CardapioItem = styled.View`
  background-color: #e2e2e2;
  flex-direction: row;
  align-items: center;
`;

export const CardapioImage = styled.Image`
  width: ${hp(6)}px;
  height: ${hp(6)}px;
  margin: ${hp(1)}px;
`;

export const CardapioTextContainer = styled.View`
  align-items: center;
  margin-left: ${hp(1)}px;
`;

export const CardapioTitle = styled.Text`
  font-family: 'PTSans-Bold';
  align-self: flex-start;
  font-size: ${hp(3)}px;
  color: #111111;
`;

export const CardapioDescription = styled.Text`
  font-family: 'PTSans-Regular';
  align-self: flex-start;
  font-size: ${hp(2.3)}px;
  font-weight: 200;
  color: #4a4a4a;
`;

export const LoadingShimmer = styled.View`
  background-color: #969696;
  border-radius: ${props => props.radius}px;
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  align-self: flex-start;
  margin: ${hp(1)}px;
`;

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

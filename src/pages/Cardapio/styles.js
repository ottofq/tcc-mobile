import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'space-around',
  },
})`
  flex: 1;
  background-color: #fff;
  padding: 10px;
`;

export const ContainerTitle = styled.View`
  border: 1px solid #101113;
  border-radius: 4px;
  padding: 5px;
  flex-direction: row;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: 'PTSans-Bold';
  font-size: 18px;
  color: #101113;
`;

export const CardapioItem = styled.View`
  background-color: #e2e2e2;
  flex-direction: row;
  align-items: center;
`;

export const CardapioImage = styled.Image`
  resize-mode: contain;
  width: 40px;
  height: 40px;
  margin: 5px;
`;

export const CardapioTextContainer = styled.View`
  align-items: center;
  margin-left: 5px;
`;

export const CardapioTitle = styled.Text`
  font-family: 'PTSans-Bold';
  align-self: flex-start;
  font-size: 20px;
  color: #111111;
`;

export const CardapioDescription = styled.Text`
  font-family: 'PTSans-Regular';
  align-self: flex-start;
  font-size: 14px;
  font-weight: 200;
  color: #4a4a4a;
`;

export const LoadingShimmer = styled.View`
  background-color: #969696;
  border-radius: ${props => props.radius}px;
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  align-self: flex-start;
  margin: 5px;
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

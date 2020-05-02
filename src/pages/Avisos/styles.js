import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  padding: 5px;
  flex: 1;
  margin-bottom: 5px;
`;

export const InfoCard = styled.View`
  border: 1px solid black;
  border-radius: 8px;
  padding: 5px;
  margin: 5px;
  background-color: #e2e2e2;
`;

export const Title = styled.Text`
  padding: 5px;
  font-family: 'PTSans-Bold';
  border-bottom-width: 1px;
`;

export const InfoContent = styled.Text`
  font-family: 'PTSans-Regular';
  padding: 5px;
  line-height: 25px;
  font-size: 14px;
  color: #111111;
`;

export const LoadingShimmer = styled.View`
  background-color: #969696;
  border-radius: ${props => props.radius}px;
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  align-self: flex-start;
  margin: 5px;
`;

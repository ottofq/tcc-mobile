import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 5px 5px;
  justify-content: space-between;
`;

export const ContainerRadioButton = styled.View`
  flex: 1;
  justify-content: space-evenly;
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const TitleRadioGroup = styled.Text`
  font-size: 18px;
  font-family: 'PTSans-Bold';
  color: ${props => (props.error ? '#B00020' : 'black')};
`;

export const ContainerButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
`;

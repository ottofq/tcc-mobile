import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 10px;
  justify-content: space-around;
`;

export const Title = styled.Text`
  font-family: 'PTSans-Regular';
  font-size: 18px;
  border: 0.5px solid #101113;
  font-weight: bold;
  border-radius: 4px;
  padding: 5px;
  text-align: center;
  color: #101113;
`;

export const CardapioItem = styled.View`
  background-color: #e2e2e2;
  flex-direction: row;
  align-items: center;
`;

export const CardapioImage = styled.Image`
  width: 40px;
  height: 40px;
  margin: 5px;
  border-radius: 20px;
`;

export const CardapioTextContainer = styled.View`
  align-items: center;
  margin-left: 5px;
`;

export const CardapioTitle = styled.Text`
  align-self: flex-start;
  font-size: 18px;
  font-weight: bold;
  color: #111111;
`;

export const CardapioDescription = styled.Text`
  align-self: flex-start;
  font-size: 12px;
  font-weight: 200;
  color: #4a4a4a;
`;

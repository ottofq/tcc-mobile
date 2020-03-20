import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 10px;
  justify-content: space-around;
`;

export const Title = styled.Text`
  font-family: 'PTSans-Bold';
  font-size: 18px;
  border: 0.5px solid #101113;
  border-radius: 4px;
  padding: 5px;
  text-align: center;
  color: #101113;
`;

export const CardapioItem = styled.View`
  background-color: #e2e2e2;
  font-family: 'PTSans-Regular';
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

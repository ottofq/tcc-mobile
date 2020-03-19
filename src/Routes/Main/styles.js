import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  height: 200px;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: 'PTSans-Bold';
  color: #fff;
`;

export const Logo = styled.Image`
  height: 150px;
  resize-mode: contain;
`;

export const Divider = styled.View`
  background-color: #f5f5f5;
  height: 0.5px;
  width: 240px;
`;

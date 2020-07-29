import styled from 'styled-components/native';
import { fonts } from '../../styles';

export const Container = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
`;
export const Label = styled.Text`
  font-family: 'PTSans-Regular';
  font-size: ${fonts.regular}px;
`;

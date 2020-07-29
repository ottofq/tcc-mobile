import styled from 'styled-components/native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { fonts, colors } from '../../../styles';

export const Container = styled.View`
  flex: 1;
  padding: ${hp(1)}px;
  justify-content: space-between;
`;

export const ContainerRadioButton = styled.View`
  height: ${hp(20)}px;
  justify-content: space-evenly;
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const TitleRadioGroup = styled.Text`
  font-size: ${fonts.regular}px;
  font-family: 'PTSans-Bold';
  color: ${(props) => (props.error ? colors.error : 'black')};
`;

export const ContainerButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

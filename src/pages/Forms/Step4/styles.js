import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors, fonts } from '../../../styles';

export const Container = styled.View`
  flex: 1;
  padding: ${hp(1)}px;
  justify-content: space-between;
`;

export const ContainerRadioButton = styled.View``;

export const ContainerTitle = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Input = styled(TextInput)``;

export const TitleRadioGroup = styled.Text`
  font-size: ${fonts.regular}px;
  font-family: 'PTSans-Bold';
  color: ${(props) => (props.error ? colors.error : 'black')};
`;

export const ContainerButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

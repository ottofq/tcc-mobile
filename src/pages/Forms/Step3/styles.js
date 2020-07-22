import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors, fonts } from '../../../styles';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
})`
  padding: ${hp(1)}px;
`;

export const ContainerRadioButton = styled.View``;

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
  margin-top: ${hp(1)}px;
`;

export const Input = styled(TextInput)`
  height: ${hp(7.5)}px;
`;

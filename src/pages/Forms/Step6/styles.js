import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { fonts } from '../../../styles';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
})`
  padding: ${hp(1)}px;
`;

export const ContainerCheckbox = styled.View`
  height: ${hp(80)}px;
  justify-content: space-around;
`;

export const TitleCheckboxGroup = styled.Text`
  font-size: ${fonts.regular}px;
  font-weight: bold;
`;

export const ContainerButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${hp(1)}px;
`;

export const Input = styled(TextInput)`
  margin-bottom: ${hp(1)}px;
`;

export const TitleInput = styled.Text`
  font-size: ${fonts.regular}px;
  font-weight: bold;
`;

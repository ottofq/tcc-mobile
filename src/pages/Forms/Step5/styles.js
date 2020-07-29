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
  flex: 1;
  justify-content: space-around;
`;
export const TitleCheckboxGroup = styled.Text`
  font-size: ${fonts.big}px;
  font-family: 'PTSans-Bold';
`;

export const ContainerButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Input = styled(TextInput)`
  margin-bottom: ${hp(2.4)}px;
`;

import styled from 'styled-components/native';
import {TextInput, ProgressBar} from 'react-native-paper';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'space-around',
  },
})`
  padding: ${hp(1)}px;
`;

export const Progress = styled(ProgressBar)`
  height: ${hp(2)}px;
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
  font-size: ${hp(2.5)}px;
  font-family: 'PTSans-Bold';
  color: ${props => (props.error ? '#B00020' : 'black')};
`;

export const ContainerCheckbox = styled.View`
  height: ${hp(30)}px;
  justify-content: space-around;
`;

export const TitleCheckboxGroup = styled.Text`
  font-size: ${hp(2.5)}px;
  font-weight: bold;
`;

export const ContainerButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${hp(1)}px;
`;

export const Input = styled(TextInput)``;

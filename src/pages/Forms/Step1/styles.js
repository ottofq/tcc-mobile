import styled from 'styled-components/native';
import {TextInput, ProgressBar} from 'react-native-paper';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },
})`
  flex: 1;
  padding: ${hp(1)}px;
`;

export const Progress = styled(ProgressBar)`
  height: ${hp(2)}px;
`;

export const ContainerInput = styled.View`
  flex: 1;
  justify-content: space-around;
`;

export const ContainerInputItem = styled.View`
  justify-content: space-around;
`;

export const ContainerRadioButton = styled.View`
  justify-content: space-between;
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
`;

export const Input = styled(TextInput)``;

export const DateInput = styled(TouchableOpacity)`
  justify-content: center;
  padding-left: ${hp(2)}px;
  height: ${hp(8.5)}px;
`;

export const PickerInput = styled(DateInput)``;

export const TitleRadioGroup = styled.Text`
  font-size: ${hp(2.5)}px;
  font-family: 'PTSans-Bold';
  color: ${props => (props.error ? '#B00020' : 'black')};
`;

export const PlaceholderDate = styled.Text`
  font-size: ${hp(2)}px;
  font-family: 'PTSans-Regular';
  color: #000;
`;

export const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    color: '#000',
    justifyContent: 'center',
    height: hp(8.5),
    paddingLeft: hp(2),
  },
  placeholder: {
    color: '#000',
    opacity: 0,
  },
});

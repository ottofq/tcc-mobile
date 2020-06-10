import styled from 'styled-components/native';
import {TextInput} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
  padding: ${hp(1)}px;
  justify-content: space-between;
`;

export const ContainerInput = styled.View`
  justify-content: space-around;
  height: ${hp(85)}px;
`;

export const ContainerInputItem = styled.View``;

export const ContainerRadioButton = styled.View`
  justify-content: space-between;
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
`;

export const Input = styled(TextInput)``;

export const DateInput = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  padding-left: ${hp(2)}px;
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
    paddingLeft: hp(2),
  },
  placeholder: {
    color: '#000',
    opacity: 0,
  },
});

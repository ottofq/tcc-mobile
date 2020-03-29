import styled from 'styled-components/native';
import {TextInput} from 'react-native-paper';
import {TouchableOpacity} from 'react-native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 5px 5px;
`;

export const ContainerInput = styled.View`
  flex: 1;
`;

export const ContainerInputItem = styled.View`
  height: 80px;
`;

export const ContainerRadioButton = styled.View`
  justify-content: space-around;
`;

export const ContainerTitle = styled.View`
  margin-bottom: 5px;
  flex-direction: row;
`;

export const Input = styled(TextInput)``;

export const DateInput = styled(TouchableOpacity)`
  border-width: 1px;
  border: ${props => (props.error ? '2px solid #B00020' : '1px solid #7a7a7a')};
  height: 60px;
  border-radius: 5px;
  justify-content: center;
  padding-left: 10px;
  margin-top: 5px;
`;

export const TitleRadioGroup = styled.Text`
  font-size: 18px;
  font-family: 'PTSans-Bold';
  color: ${props => (props.error ? '#B00020' : 'black')};
`;

export const PlaceholderDate = styled.Text`
  font-size: 15px;
  font-family: 'PTSans-Regular';
  color: ${props => (props.error ? '#B00020' : '#7a7a7a')};
`;

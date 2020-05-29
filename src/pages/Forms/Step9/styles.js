import styled from 'styled-components/native';
import {TextInput} from 'react-native-paper';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
})`
  padding: 5px 5px;
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
  font-size: 18px;
  font-family: 'PTSans-Bold';
  color: ${props => (props.error ? '#B00020' : 'black')};
`;

export const ContainerCheckbox = styled.View`
  height: 250px;
  justify-content: space-around;
`;

export const TitleCheckboxGroup = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const ContainerButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Input = styled(TextInput)`
  margin-bottom: 15px;
`;

import styled from 'styled-components/native';
import {TextInput, ProgressBar} from 'react-native-paper';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
})`
  padding: 5px 5px;
`;

export const Progress = styled(ProgressBar)`
  height: 10px;
`;

export const ContainerCheckbox = styled.View`
  flex: 1;
  height: 480px;
  justify-content: space-around;
`;
export const TitleCheckboxGroup = styled.Text`
  font-size: 20px;
  font-family: 'PTSans-Bold';
`;

export const ContainerButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Input = styled(TextInput)`
  margin-bottom: 15px;
`;

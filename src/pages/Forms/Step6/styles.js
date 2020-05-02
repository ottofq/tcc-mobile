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

export const ContainerCheckbox = styled.View`
  height: 380px;
  justify-content: space-around;
`;

export const TitleCheckboxGroup = styled.Text`
  margin-top: 5px;
  margin-left: 5px;
  font-size: 18px;
  font-weight: bold;
`;

export const ContainerButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
`;

export const Input = styled(TextInput)`
  margin-bottom: 5px;
  height: 50px;
`;

export const TitleInput = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

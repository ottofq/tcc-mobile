import styled from 'styled-components/native';
import {TextInput} from 'react-native-paper';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 5px 5px;
`;

export const ContainerCheckbox = styled.View`
  height: 425px;
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

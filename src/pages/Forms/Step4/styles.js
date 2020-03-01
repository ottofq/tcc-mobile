import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

export const Container = styled.View`
  flex: 1;
  padding: 5px 5px;
  justify-content: space-between;
`;
export const ContainerRadioButton = styled.View`
  align-items: flex-start;
`;

export const ContainerRadioButtonItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;

export const TitleRadioGroup = styled.Text`
  margin-top: 5px;
  margin-left: 5px;
  font-size: 14px;
  font-weight: bold;
`;
export const ContainerButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
`;
export const styles = StyleSheet.create({
  radioItem: {
    flexDirection: 'row-reverse',
    height: 32,
    width: '100%',
    justifyContent: 'flex-end',
  },
});

export const ContainerCheckbox = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

export const Input = styled(TextInput)`
  margin-bottom: 5px;
  height: 50px;
`;

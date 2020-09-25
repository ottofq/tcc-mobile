import styled from 'styled-components/native';
import { Snackbar as SnackbarPaper } from 'react-native-paper';
import { colors } from '../../styles';

export const Snackbar = styled(SnackbarPaper)`
  background-color: ${colors.error};
`;

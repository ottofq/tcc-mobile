import styled from 'styled-components/native';
import {ProgressBar} from 'react-native-paper';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Progress = styled(ProgressBar)`
  height: ${hp(2)}px;
  border-radius: ${hp(1)}px;
`;

import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'lottie-react-native';

import loadingAnimation from '../../../assets/loading.json';
import * as S from './styles';

const Loading = ({ loading }) => {
  return (
    <S.Container>
      <Lottie autoPlay loop={loading} source={loadingAnimation} />
    </S.Container>
  );
};

Loading.defaultProps = {
  loading: false,
};

Loading.propTypes = {
  loading: PropTypes.bool,
};

export default Loading;

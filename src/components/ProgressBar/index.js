import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const ProgressBar = ({ progress }) => {
  return <S.Progress progress={progress} />;
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;

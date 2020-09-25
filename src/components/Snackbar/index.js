import React, { useContext } from 'react';

import SnackbarContext from '../../contexts/Snackbar';

import * as S from './styles';

const SnackBar = () => {
  const { snackbar, dispatch } = useContext(SnackbarContext);
  return (
    <S.Snackbar
      onDismiss={() => dispatch({ type: 'SNACKBAR:HIDE' })}
      duration={2000}
      visible={snackbar.visible}
    >
      {snackbar.message}
    </S.Snackbar>
  );
};

export default SnackBar;

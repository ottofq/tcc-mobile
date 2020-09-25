/* eslint-disable no-underscore-dangle */
import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const SNACKBAR_INITIAL_STATE = {
  visible: false,
  message: '',
};

const SnackbarContext = createContext({
  snackbar: SNACKBAR_INITIAL_STATE,
});

function reducer(state = SNACKBAR_INITIAL_STATE, action) {
  switch (action.type) {
    case 'SNACKBAR:VISIBLE': {
      return {
        ...state,
        visible: true,
        message: action.payload,
      };
    }
    case 'SNACKBAR:HIDE': {
      return {
        ...state,
        visible: false,
        message: '',
      };
    }
    default:
      return state;
  }
}

export const SnackbarProvider = ({ children }) => {
  const [snackbar, dispatch] = useReducer(reducer, SNACKBAR_INITIAL_STATE);

  return (
    <SnackbarContext.Provider value={{ snackbar, dispatch }}>
      {children}
    </SnackbarContext.Provider>
  );
};

SnackbarProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default SnackbarContext;

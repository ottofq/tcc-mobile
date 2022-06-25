/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import AsyncStorage from '@react-native-async-storage/async-storage';

import USER_INITIAL_STATE from './initialStateStudent';
import reducer from './reducer';

const UserContext = createContext({
  user: USER_INITIAL_STATE,
  dispatch: () => {},
});

export const UserProvider = ({ children }) => {
  const [user, dispatch] = useReducer(reducer, USER_INITIAL_STATE);

  async function persistUser(student) {
    const userToString = JSON.stringify(student);
    await AsyncStorage.setItem('@APP_RU:user', userToString);
    dispatch({ type: 'STUDENT:LOAD_FROM_STORAGE', payload: student });
  }

  return (
    <UserContext.Provider value={{ user, dispatch, persistUser }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UserContext;

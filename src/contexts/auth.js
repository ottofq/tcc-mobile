/* eslint-disable no-underscore-dangle */
import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';

import userContext from './User';
import { singIn } from '../services';

const AUTH_INITIAL_STATE = {
  token: '',
};

const AuthContext = createContext({
  auth: AUTH_INITIAL_STATE,
});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(AUTH_INITIAL_STATE);
  const { dispatch } = useContext(userContext);

  useEffect(() => {
    async function loadStorageAuth() {
      const storageAuth = await AsyncStorage.getItem('@APP_RU:auth');

      if (storageAuth) {
        setAuth(JSON.parse(storageAuth));
      }
    }
    loadStorageAuth();
  }, []);

  async function persistAuth(responseAuth) {
    setAuth(responseAuth);
    const stringfyAuth = JSON.stringify(responseAuth);
    await AsyncStorage.setItem('@APP_RU:auth', stringfyAuth);
  }

  async function login(email, password) {
    try {
      const { student, auth: reponseAuth } = await singIn(email, password);
      await persistAuth(reponseAuth);
      dispatch({ type: 'STUDENT:ADD_PROPS', payload: student });
    } catch (error) {
      throw Error(error.message);
    }
  }

  async function signOut() {
    await AsyncStorage.multiRemove(['@APP_RU:auth', '@APP_RU:user']);
    setAuth(AUTH_INITIAL_STATE);
  }

  return (
    <AuthContext.Provider value={{ auth, persistAuth, login, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthContext;

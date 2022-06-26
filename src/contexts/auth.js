/* eslint-disable no-underscore-dangle */
import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PropTypes from 'prop-types';

import userContext from './User';
import { singIn } from '../services';
import api from '../services/api';

const AUTH_INITIAL_STATE = {
  token: '',
};

const AuthContext = createContext({
  auth: AUTH_INITIAL_STATE,
});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(AUTH_INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const { dispatch, persistUser } = useContext(userContext);

  useEffect(() => {
    async function loadStorage() {
      setLoading(true);
      const storageAuth = await AsyncStorage.getItem('@APP_RU:auth');
      const storageUser = await AsyncStorage.getItem('@APP_RU:user');

      if (storageAuth && storageUser) {
        const parsedAuth = JSON.parse(storageAuth);
        const parsedUser = JSON.parse(storageUser);

        setAuth(parsedAuth);

        api.defaults.headers.common.Authorization = `Bearer ${parsedAuth.token}`;

        dispatch({ type: 'STUDENT:LOAD_FROM_STORAGE', payload: parsedUser });

        setLoading(false);
      }

      setLoading(false);
    }
    loadStorage();
  }, []);

  async function persistAuth(responseAuth) {
    api.defaults.headers.common.Authorization = `Bearer ${responseAuth.token}`;
    const stringfyAuth = JSON.stringify(responseAuth);
    await AsyncStorage.setItem('@APP_RU:auth', stringfyAuth);

    setAuth(responseAuth);
  }

  async function login(email, password) {
    try {
      const { student, auth: responseAuth } = await singIn(email, password);
      await persistAuth(responseAuth);
      await persistUser(student);
    } catch (error) {
      throw Error(error.message);
    }
  }

  async function signOut() {
    await AsyncStorage.multiRemove(['@APP_RU:auth', '@APP_RU:user']);
    dispatch({ type: 'STUDENT:LOGOUT' });
    setAuth(AUTH_INITIAL_STATE);
  }

  return (
    <AuthContext.Provider
      value={{ auth, loading, persistAuth, login, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthContext;

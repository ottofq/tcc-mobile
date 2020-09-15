import React, { useContext, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';

import AuthContext from '../../contexts/auth';
import UserContext from '../../contexts/User';

import { colors } from '../../styles';

const Logout = () => {
  const { signOut } = useContext(AuthContext);
  const { dispatch } = useContext(UserContext);

  useEffect(() => {
    async function logout() {
      await signOut();
      dispatch({ type: 'STUDENT:LOGOUT' });
    }
    logout();
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

export default Logout;

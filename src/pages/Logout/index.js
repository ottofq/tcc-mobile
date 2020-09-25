import React, { useContext, useEffect } from 'react';
import { useNavigation, CommonActions } from '@react-navigation/native';

import Loading from '../../components/Loading';
import AuthContext from '../../contexts/auth';

const Logout = () => {
  const { signOut } = useContext(AuthContext);
  const navigation = useNavigation();

  useEffect(() => {
    async function logout() {
      await signOut();
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'home' }],
        })
      );
    }
    logout();
  }, []);
  return <Loading />;
};

export default Logout;

/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState, memo, useContext } from 'react';
import Lottie from 'lottie-react-native';
import { Snackbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import userContext from '../../../contexts/User';
import authContext from '../../../contexts/auth';
import animation from '../../../../assets/done.json';
import { createUser } from '../../../services';

const Done = () => {
  const [loading, setLoading] = useState(false);
  const [snackBarVisible, setSnackBarVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Error');
  const navigation = useNavigation();
  const { user, dispatch, persistUser } = useContext(userContext);
  const { persistAuth } = useContext(authContext);

  useEffect(() => {
    async function postData() {
      try {
        setLoading(true);
        dispatch({ type: 'STUDENT:CLEAN_PROPS' });
        const { student, auth } = await createUser(user);
        await persistAuth(auth);
        await persistUser(student);
      } catch (error) {
        setSnackBarVisible(true);
        setErrorMessage(error.message);
      }
    }
    postData();

    return function cleanup() {
      setLoading(false);
    };
  }, []);

  const onDismissSnackBar = () => setSnackBarVisible(false);

  function finish() {
    navigation.navigate('login');
  }

  return (
    <>
      <Lottie
        onAnimationFinish={finish}
        autoPlay
        loop={loading}
        source={animation}
      />
      <Snackbar
        onDismiss={onDismissSnackBar}
        duration={2000}
        visible={snackBarVisible}
      >
        {errorMessage}
      </Snackbar>
    </>
  );
};

export default memo(Done);

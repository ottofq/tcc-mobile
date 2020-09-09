/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState, memo, useContext } from 'react';
import Lottie from 'lottie-react-native';
import { Snackbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import userContext from '../../../contexts/User';
import animation from '../../../../assets/done.json';
import api from '../../../services/api';

const Done = () => {
  const [loading, setLoading] = useState(false);
  const [snackBarVisible, setSnackBarVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Error');
  const navigation = useNavigation();
  const { postStudent } = useContext(userContext);

  useEffect(() => {
    async function postData() {
      try {
        setLoading(true);
        await postStudent();
        setLoading(false);
      } catch (error) {
        setSnackBarVisible(true);
        setErrorMessage(error.message);
      }
    }
    postData();
  }, []);

  const onDismissSnackBar = () => setSnackBarVisible(false);

  function finish() {
    navigation.navigate('Cardapio RU - CCA UFES');
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

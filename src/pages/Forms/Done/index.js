/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState, memo, useContext } from 'react';
import Lottie from 'lottie-react-native';
import { Snackbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import userContext from '../../../contexts/User';
import animation from '../../../../assets/done.json';
import api from '../../../services/api';

const Done = () => {
  const [loading, setLoading] = useState(true);
  const [snackBarVisible, setSnackBarVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Error');
  const navigation = useNavigation();
  const { user, dispatch, persistUser } = useContext(userContext);

  useEffect(() => {
    async function postData() {
      try {
        dispatch({ type: 'STUDENT:CLEAN_PROPS' });
        const response = await api.post('/alunos', user);
        const student = response.data;
        dispatch({ type: 'STUDENT:POST_API', payload: { id: student._id } });
        setLoading(false);
        persistUser();
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
        Error
      </Snackbar>
    </>
  );
};

export default memo(Done);

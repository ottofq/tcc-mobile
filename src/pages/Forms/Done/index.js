import React, { useEffect, useState, memo } from 'react';
import Lottie from 'lottie-react-native';
import { Snackbar } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';

import animation from '../../../../assets/done.json';
import api from '../../../services/api';

const Done = () => {
  const [loading, setLoading] = useState(true);
  const [snackBarVisible, setSnackBarVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Error');
  const navigation = useNavigation();
  const { params } = useRoute;

  const data = params;

  useEffect(() => {
    async function postData() {
      try {
        await api.post('/alunos', data);
        setLoading(false);
      } catch (error) {
        setSnackBarVisible(true);
        setErrorMessage(error);
      }
    }
    postData();
  }, [data]);

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

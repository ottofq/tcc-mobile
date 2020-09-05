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
  const { user, dispatch } = useContext(userContext);

  const cleanObjectProps = (obj) => {
    Object.keys(obj).forEach((item) => {
      if (obj[item] === undefined) {
        delete obj[item];
      }

      if (obj[item] === 'nao') {
        obj[item] = false;
      }
      if (obj[item] === 'sim') {
        obj[item] = true;
      }
    });
  };

  useEffect(() => {
    async function postData() {
      try {
        const userClean = cleanObjectProps(user);
        const student = await api.post('/alunos', userClean);
        console.log(student);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
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

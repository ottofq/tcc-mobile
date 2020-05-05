import React, {useEffect, useState} from 'react';
import Lottie from 'lottie-react-native';

import animation from '../../../../assets/done.json';

import api from '../../../services/api';

export default function Done({navigation, route}) {
  const [loading, setLoading] = useState(true);

  const data = route.params;

  useEffect(() => {
    async function postData() {
      try {
        console.log(data);
        const result = await api.post('/alunos', data);
        console.log(result.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    postData();
  }, [data]);

  function finish() {
    navigation.navigate('Cardapio RU - CCA UFES');
  }

  return (
    <Lottie
      onAnimationFinish={finish}
      autoPlay
      loop={loading}
      source={animation}
    />
  );
}

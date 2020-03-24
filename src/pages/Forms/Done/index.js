import React from 'react';
import Lottie from 'lottie-react-native';

import animation from '../../../../assets/done.json';

export default function Done({navigation, route}) {
  const params = route.params;

  function handleSubmit() {
    console.log('Dados', params);
    navigation.navigate('Cardapio RU - CCA UFES');
  }

  return (
    <Lottie
      onAnimationFinish={handleSubmit}
      autoPlay
      loop={false}
      source={animation}
    />
  );
}

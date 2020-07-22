import React from 'react';
import { useNavigation } from '@react-navigation/native';

import animation from '../../../../assets/animation.json';

import * as S from './styles';

const Intro = () => {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate('step-1');
  };
  return (
    <S.Container>
      <S.ContainerLogo>
        <S.Animation
          loop={false}
          resizeMode="center"
          autoPlay
          source={animation}
        />

        <S.TitleLogo>CARDÁPIO RU CCA UFES</S.TitleLogo>
      </S.ContainerLogo>
      <S.ContainerDescription>
        <S.Title>Bem Vindo</S.Title>
        <S.Description>
          Antes de exibir o cardápio, precisamos que responda um questionário
          para o setor de nutrição do RU CCA UFES.
        </S.Description>
      </S.ContainerDescription>

      <S.ButtonNext mode="contained" onPress={handleNext}>
        Avançar
      </S.ButtonNext>
    </S.Container>
  );
};

export default Intro;

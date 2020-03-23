import React from 'react';

import icon from '../../../../assets/images/icon.png';
import {
  Container,
  ContainerLogo,
  ContainerDescription,
  Title,
  TitleLogo,
  Description,
  Logo,
  ButtonNext,
} from './styles';

export default function Intro({navigation}) {
  function handleNext() {
    navigation.navigate('Questionario passo 1');
  }
  return (
    <Container>
      <ContainerLogo>
        <Logo source={icon} />
        <TitleLogo>CARDÁPIO RU CCA UFES</TitleLogo>
      </ContainerLogo>
      <ContainerDescription>
        <Title>Bem Vindo</Title>
        <Description>
          Antes de exibir o cardápio, precisamos que responda um questionário
          para o setor de nutrição do RU CCA UFES.
        </Description>
      </ContainerDescription>

      <ButtonNext mode="contained" onPress={handleNext}>
        Avançar
      </ButtonNext>
    </Container>
  );
}

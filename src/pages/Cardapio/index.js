import React from 'react';
import {StyleSheet} from 'react-native';

import {
  Container,
  Title,
  CardapioItem,
  CardapioImage,
  CardapioTextContainer,
  CardapioTitle,
  CardapioDescription,
} from './styles';

export default function Cardapio() {
  return (
    <Container>
      <Title>15/02/2020 - Almoço</Title>
      <CardapioItem style={styles.shadow}>
        <CardapioImage />
        <CardapioTextContainer>
          <CardapioTitle>Tomate Berinjela ao Vinagrete</CardapioTitle>
          <CardapioDescription>Entrada</CardapioDescription>
        </CardapioTextContainer>
      </CardapioItem>

      <CardapioItem style={styles.shadow}>
        <CardapioImage />
        <CardapioTextContainer>
          <CardapioTitle>Bife de Frango Empanado</CardapioTitle>
          <CardapioDescription>Prato Proteico</CardapioDescription>
        </CardapioTextContainer>
      </CardapioItem>

      <CardapioItem style={styles.shadow}>
        <CardapioImage />
        <CardapioTextContainer>
          <CardapioTitle>Ovo Frito</CardapioTitle>
          <CardapioDescription>Opção</CardapioDescription>
        </CardapioTextContainer>
      </CardapioItem>

      <CardapioItem style={styles.shadow}>
        <CardapioImage />
        <CardapioTextContainer>
          <CardapioTitle>Arroz e Feijão</CardapioTitle>
          <CardapioDescription>Acompanhamento</CardapioDescription>
        </CardapioTextContainer>
      </CardapioItem>

      <CardapioItem style={styles.shadow}>
        <CardapioImage />
        <CardapioTextContainer>
          <CardapioTitle>Purê de Batata</CardapioTitle>
          <CardapioDescription>Guarnição</CardapioDescription>
        </CardapioTextContainer>
      </CardapioItem>

      <CardapioItem style={styles.shadow}>
        <CardapioImage />
        <CardapioTextContainer>
          <CardapioTitle>Mamão</CardapioTitle>
          <CardapioDescription>Sobremesa</CardapioDescription>
        </CardapioTextContainer>
      </CardapioItem>
    </Container>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

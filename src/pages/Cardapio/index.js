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

import entrada from '../../../assets/images/entrada.png';
import proteico from '../../../assets/images/proteico.png';
import opcao from '../../../assets/images/opcao.png';
import acompanhamento from '../../../assets/images/acompanhamento.png';
import guarnicao from '../../../assets/images/guarnicao.png';
import sobremesa from '../../../assets/images/sobremesa.png';

export default function Cardapio() {
  return (
    <Container>
      <Title>15/02/2020 - Almoço</Title>
      <CardapioItem style={styles.shadow}>
        <CardapioImage resizeMode="contain" source={entrada} />
        <CardapioTextContainer>
          <CardapioTitle>Tomate Berinjela ao Vinagrete</CardapioTitle>
          <CardapioDescription>Entrada</CardapioDescription>
        </CardapioTextContainer>
      </CardapioItem>

      <CardapioItem style={styles.shadow}>
        <CardapioImage source={proteico} />
        <CardapioTextContainer>
          <CardapioTitle>Bife de Frango Empanado</CardapioTitle>
          <CardapioDescription>Prato Proteico</CardapioDescription>
        </CardapioTextContainer>
      </CardapioItem>

      <CardapioItem style={styles.shadow}>
        <CardapioImage source={opcao} />
        <CardapioTextContainer>
          <CardapioTitle>Ovo Frito</CardapioTitle>
          <CardapioDescription>Opção</CardapioDescription>
        </CardapioTextContainer>
      </CardapioItem>

      <CardapioItem style={styles.shadow}>
        <CardapioImage source={acompanhamento} />
        <CardapioTextContainer>
          <CardapioTitle>Arroz e Feijão</CardapioTitle>
          <CardapioDescription>Acompanhamento</CardapioDescription>
        </CardapioTextContainer>
      </CardapioItem>

      <CardapioItem style={styles.shadow}>
        <CardapioImage source={guarnicao} />
        <CardapioTextContainer>
          <CardapioTitle>Purê de Batata</CardapioTitle>
          <CardapioDescription>Guarnição</CardapioDescription>
        </CardapioTextContainer>
      </CardapioItem>

      <CardapioItem style={styles.shadow}>
        <CardapioImage source={sobremesa} />
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

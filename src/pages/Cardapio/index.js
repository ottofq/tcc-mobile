import React, {useEffect, useState, useCallback} from 'react';
import Shimmer from 'react-native-shimmer';
import {RefreshControl} from 'react-native';

import {
  Container,
  ContainerTitle,
  Title,
  CardapioItem,
  CardapioImage,
  CardapioTextContainer,
  CardapioTitle,
  CardapioDescription,
  LoadingShimmer,
  TextFooter,
  styles,
} from './styles';

import entrada from '../../../assets/images/entrada.png';
import proteico from '../../../assets/images/proteico.png';
import opcao from '../../../assets/images/opcao.png';
import acompanhamento from '../../../assets/images/acompanhamento.png';
import guarnicao from '../../../assets/images/guarnicao.png';
import sobremesa from '../../../assets/images/sobremesa.png';

import api from '../../services/api';

export default function Cardapio() {
  const [cardapio, setCardapio] = useState('');
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setLoading(true);
    loadCardapio();
  }, []);

  async function loadCardapio() {
    try {
      const result = await api.get('/cardapio/last');
      setCardapio(result.data);
      setLoading(false);
      setRefreshing(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadCardapio();
  }, []);

  return (
    <Container
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {loading ? (
        <Shimmer>
          <ContainerTitle>
            <LoadingShimmer radius={0} height={14} width={150} />
            <LoadingShimmer radius={0} height={14} width={150} />
          </ContainerTitle>
        </Shimmer>
      ) : (
        <ContainerTitle>
          <Title>
            {cardapio.data} - {cardapio.tipo}
          </Title>
        </ContainerTitle>
      )}

      {loading ? (
        <Shimmer>
          <CardapioItem style={styles.shadow}>
            <LoadingShimmer radius={20} height={40} width={40} />
            <CardapioTextContainer>
              <LoadingShimmer radius={0} height={14} width={250} />
              <LoadingShimmer radius={0} height={14} width={50} />
            </CardapioTextContainer>
          </CardapioItem>
        </Shimmer>
      ) : (
        <CardapioItem style={styles.shadow}>
          <CardapioImage source={entrada} />
          <CardapioTextContainer>
            <CardapioTitle>{cardapio.entrada.descricao}</CardapioTitle>
            <CardapioDescription>Entrada</CardapioDescription>
          </CardapioTextContainer>
        </CardapioItem>
      )}

      {loading ? (
        <Shimmer>
          <CardapioItem style={styles.shadow}>
            <LoadingShimmer radius={20} height={40} width={40} />
            <CardapioTextContainer>
              <LoadingShimmer radius={0} height={14} width={250} />
              <LoadingShimmer radius={0} height={14} width={50} />
            </CardapioTextContainer>
          </CardapioItem>
        </Shimmer>
      ) : (
        <CardapioItem style={styles.shadow}>
          <CardapioImage source={proteico} />
          <CardapioTextContainer>
            <CardapioTitle>{cardapio.proteina.descricao}</CardapioTitle>
            <CardapioDescription>Prato Proteico</CardapioDescription>
          </CardapioTextContainer>
        </CardapioItem>
      )}

      {loading ? (
        <Shimmer>
          <CardapioItem style={styles.shadow}>
            <LoadingShimmer radius={20} height={40} width={40} />
            <CardapioTextContainer>
              <LoadingShimmer radius={0} height={14} width={250} />
              <LoadingShimmer radius={0} height={14} width={50} />
            </CardapioTextContainer>
          </CardapioItem>
        </Shimmer>
      ) : (
        <CardapioItem style={styles.shadow}>
          <CardapioImage source={opcao} />
          <CardapioTextContainer>
            <CardapioTitle>{cardapio.opcao.descricao}</CardapioTitle>
            <CardapioDescription>Opção</CardapioDescription>
          </CardapioTextContainer>
        </CardapioItem>
      )}

      {loading ? (
        <Shimmer>
          <CardapioItem style={styles.shadow}>
            <LoadingShimmer radius={20} height={40} width={40} />
            <CardapioTextContainer>
              <LoadingShimmer radius={0} height={14} width={250} />
              <LoadingShimmer radius={0} height={14} width={50} />
            </CardapioTextContainer>
          </CardapioItem>
        </Shimmer>
      ) : (
        <CardapioItem style={styles.shadow}>
          <CardapioImage source={acompanhamento} />
          <CardapioTextContainer>
            <CardapioTitle>{cardapio.acompanhamento.descricao}</CardapioTitle>
            <CardapioDescription>Acompanhamento</CardapioDescription>
          </CardapioTextContainer>
        </CardapioItem>
      )}

      {loading ? (
        <Shimmer>
          <CardapioItem style={styles.shadow}>
            <LoadingShimmer radius={20} height={40} width={40} />
            <CardapioTextContainer>
              <LoadingShimmer radius={0} height={14} width={250} />
              <LoadingShimmer radius={0} height={14} width={50} />
            </CardapioTextContainer>
          </CardapioItem>
        </Shimmer>
      ) : (
        <CardapioItem style={styles.shadow}>
          <CardapioImage source={guarnicao} />
          <CardapioTextContainer>
            <CardapioTitle>{cardapio.guarnicao.descricao}</CardapioTitle>
            <CardapioDescription>Guarnição</CardapioDescription>
          </CardapioTextContainer>
        </CardapioItem>
      )}

      {loading ? (
        <Shimmer>
          <CardapioItem style={styles.shadow}>
            <LoadingShimmer radius={20} height={40} width={40} />
            <CardapioTextContainer>
              <LoadingShimmer radius={0} height={14} width={250} />
              <LoadingShimmer radius={0} height={14} width={50} />
            </CardapioTextContainer>
          </CardapioItem>
        </Shimmer>
      ) : (
        <CardapioItem style={styles.shadow}>
          <CardapioImage source={sobremesa} />
          <CardapioTextContainer>
            <CardapioTitle>{cardapio.sobremesa.descricao}</CardapioTitle>
            <CardapioDescription>Sobremesa</CardapioDescription>
          </CardapioTextContainer>
        </CardapioItem>
      )}

      <TextFooter>
        * O cardápio poderá sofrer alterações sem comunicação prévia, de acordo
        com as necessidades da Seção.
      </TextFooter>
    </Container>
  );
}

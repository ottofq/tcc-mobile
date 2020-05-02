import React, {useEffect, useState, useCallback} from 'react';
import Shimmer from 'react-native-shimmer';
import {RefreshControl} from 'react-native';

import {
  Container,
  ContainerLoading,
  InfoCard,
  Title,
  InfoContent,
  LoadingShimmer,
} from './styles';
import api from '../../services/api';

export default function Avisos() {
  const [avisos, setAvisos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setLoading(true);
    loadAvisos();
  }, []);

  async function loadAvisos() {
    try {
      const result = await api.get('/informacoes');
      setAvisos(result.data);
      setLoading(false);
      setRefreshing(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadAvisos();
  }, []);

  return (
    <Container
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {loading ? (
        <ContainerLoading>
          <Shimmer>
            <InfoCard>
              <Title>
                <LoadingShimmer radius={0} height={14} width={350} />
              </Title>
              <InfoContent>
                <LoadingShimmer radius={0} height={14} width={350} />
                <LoadingShimmer radius={0} height={14} width={350} />
                <LoadingShimmer radius={0} height={14} width={350} />
                <LoadingShimmer radius={0} height={14} width={350} />
              </InfoContent>
            </InfoCard>
          </Shimmer>
          <Shimmer>
            <InfoCard>
              <Title>
                <LoadingShimmer radius={0} height={14} width={350} />
              </Title>
              <InfoContent>
                <LoadingShimmer radius={0} height={14} width={350} />
                <LoadingShimmer radius={0} height={14} width={350} />
                <LoadingShimmer radius={0} height={14} width={350} />
                <LoadingShimmer radius={0} height={14} width={350} />
              </InfoContent>
            </InfoCard>
          </Shimmer>
          <Shimmer>
            <InfoCard>
              <Title>
                <LoadingShimmer radius={0} height={14} width={350} />
              </Title>
              <InfoContent>
                <LoadingShimmer radius={0} height={14} width={350} />
                <LoadingShimmer radius={0} height={14} width={350} />
                <LoadingShimmer radius={0} height={14} width={350} />
                <LoadingShimmer radius={0} height={14} width={350} />
              </InfoContent>
            </InfoCard>
          </Shimmer>
        </ContainerLoading>
      ) : (
        avisos.map(aviso => (
          <InfoCard key={aviso._id}>
            <Title>
              {aviso.data} - {aviso.titulo}
            </Title>
            <InfoContent>{aviso.descricao}</InfoContent>
          </InfoCard>
        ))
      )}
    </Container>
  );
}

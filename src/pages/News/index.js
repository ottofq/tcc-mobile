/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState, useCallback } from 'react';
import { RefreshControl, StyleSheet } from 'react-native';

import NewsCard from '../../components/NewsCard';

import * as S from './styles';
import api from '../../services/api';

const News = () => {
  const [avisos, setAvisos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  async function loadAvisos() {
    try {
      const result = await api.get('/informacoes?page=1');

      setAvisos(result.data.result);
      setLoading(false);
      setRefreshing(false);
    } catch (error) {
      console.log(error);
    }
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setLoading(true);
    loadAvisos();
  }, []);

  useEffect(() => {
    loadAvisos();
  }, []);

  return (
    <S.Container
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {loading ? (
        <>
          <NewsCard loading={loading} title="..." date="..." />
          <NewsCard loading={loading} title="..." date="..." />
          <NewsCard loading={loading} title="..." date="..." />
          <NewsCard loading={loading} title="..." date="..." />
        </>
      ) : (
        avisos.map((aviso) => (
          <NewsCard
            loading={loading}
            key={aviso._id}
            title={aviso.titulo}
            date={aviso.data}
          />
        ))
      )}

      {/* {loading ? (
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
              {format(parseISO(aviso.data), 'eeee, dd/MM/yyyy', {
                locale: ptBR,
              })}{' '}
              - {aviso.titulo}
            </Title>
            <HTMLView
              stylesheet={styles}
              value={`<div>${aviso.descricao}</div>`}
            />
          </InfoCard>
        ))
      )} */}
    </S.Container>
  );
};

const styles = StyleSheet.create({
  p: {
    marginTop: 5,
    marginBottom: 5,
    lineHeight: 20,
  },
  strong: {
    fontWeight: 'bold',
  },
  ul: {
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 1,
  },
  li: {
    marginTop: 5,
    marginBottom: 5,
    lineHeight: 20,
  },
  ol: {
    marginTop: 5,
    marginBottom: 5,
  },
});

export default News;

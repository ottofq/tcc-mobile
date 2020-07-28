/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState, useCallback, memo } from 'react';
import { RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import NewsCard from '../../../components/NewsCard';

import * as S from './styles';
import api from '../../../services/api';

const List = () => {
  const [avisos, setAvisos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const navigator = useNavigation();

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

  const handlePress = (data) => {
    navigator.navigate('News', {
      screen: 'news-details',
      params: { data },
    });
  };

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
            onPress={() => handlePress(aviso)}
            loading={loading}
            key={aviso._id}
            title={aviso.titulo}
            date={aviso.data}
          />
        ))
      )}
    </S.Container>
  );
};

export default memo(List);

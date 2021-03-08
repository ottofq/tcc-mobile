/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState, useCallback, memo } from 'react';
import { RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import NewsCard from '../../../components/NewsCard';

import * as S from './styles';
import { getNews } from '../../../services';

const List = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const navigator = useNavigation();

  async function loadNews() {
    try {
      const response = await getNews();

      setNews(response);
      setLoading(false);
      setRefreshing(false);
    } catch (error) {
      console.log(error);
    }
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setLoading(true);
    loadNews();
  }, []);

  useEffect(() => {
    loadNews();
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
        news.map((aviso) => (
          <NewsCard
            style={{marginVertical: 5}}
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

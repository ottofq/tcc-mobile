/* eslint-disable camelcase */
import React, {
  memo,
  useEffect,
  useCallback,
  useState,
  useContext,
} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { RefreshControl } from 'react-native';

import RatingCard from '../../../components/RatingCard';

import * as S from './styles';

import snackbarContext from '../../../contexts/Snackbar';
import MenuContext from '../../../contexts/menu';
import { getMenuRating } from '../../../services';

const Rating = () => {
  const [rating, setRating] = useState({
    total_avaliacoes: 0,
    avaliacao: {
      entrada: 0,
      prato_proteico: 0,
      opcao: 0,
      acompanhamento: 0,
      guarnicao: 0,
      sobremesa: 0,
    },
  });

  const [loading, setLoading] = useState(false);
  const [loadingRefresh, setLoadingRefresh] = useState(false);
  const { menu } = useContext(MenuContext);
  const { dispatch } = useContext(snackbarContext);

  const navigation = useNavigation();

  async function loadRating() {
    try {
      setLoading(true);
      const ratingRespose = await getMenuRating(menu.id);
      setRating(ratingRespose.data);
      setLoading(false);
    } catch (error) {
      dispatch({ type: 'SNACKBAR:VISIBLE', payload: error.message });
      setLoading(false);
    }
  }

  useEffect(() => {
    loadRating();
  }, []);

  const onRefresh = useCallback(() => {
    setLoadingRefresh(true);
    loadRating();
    setLoadingRefresh(false);
  }, []);

  const handleButton = () => {
    navigation.navigate('create-rating');
  };

  return (
    <S.Container
      refreshControl={
        <RefreshControl refreshing={loadingRefresh} onRefresh={onRefresh} />
      }
    >
      <S.TitleContainer>
        <S.Title>Total de avaliações: </S.Title>
        <Icon name="star" size={32} color="#f1c40f" />
        <S.TotalRatings>{rating.total_avaliacoes}</S.TotalRatings>
      </S.TitleContainer>

      <RatingCard
        loading={loading}
        description={menu.entrada}
        rating={rating.avaliacao.entrada}
      />
      <RatingCard
        loading={loading}
        description={menu.prato_proteico}
        rating={rating.avaliacao.prato_proteico}
      />
      <RatingCard
        loading={loading}
        description={menu.opcao}
        rating={rating.avaliacao.opcao}
      />
      <RatingCard
        loading={loading}
        description={menu.acompanhamento}
        rating={rating.avaliacao.acompanhamento}
      />
      <RatingCard
        loading={loading}
        description={menu.guarnicao}
        rating={rating.avaliacao.guarnicao}
      />
      <RatingCard
        loading={loading}
        description={menu.sobremesa}
        rating={rating.avaliacao.sobremesa}
      />

      <S.Button mode="contained" onPress={handleButton}>
        Avaliar cardápio
      </S.Button>
    </S.Container>
  );
};

export default memo(Rating);

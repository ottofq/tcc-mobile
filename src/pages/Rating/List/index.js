/* eslint-disable camelcase */
import React, { memo } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import RatingCard from '../../../components/RatingCard';

import * as S from './styles';

const Rating = () => {
  const navigation = useNavigation();

  const handleButton = () => {
    navigation.navigate('create-rating');
  };

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>Total de avaliações: </S.Title>
        <Icon name="star" size={32} color="#f1c40f" />
        <S.TotalRatings>200</S.TotalRatings>
      </S.TitleContainer>

      <RatingCard
        loading={false}
        description="Repolho Branco, Duo de Batatas"
        rating={3}
      />
      <RatingCard loading={false} description="Sobrecoxa Assada" rating={3} />
      <RatingCard loading={false} description="Ovo Frito" rating={3} />
      <RatingCard loading={false} description="Arroz, Feijão" rating={3} />
      <RatingCard
        loading={false}
        description="Macarrão gravatinha ao alho e óleo"
        rating={3}
      />
      <RatingCard loading={false} description="Melão" rating={3} />

      <S.Button mode="contained" onPress={handleButton}>
        Avaliar cardápio
      </S.Button>
    </S.Container>
  );
};

export default memo(Rating);

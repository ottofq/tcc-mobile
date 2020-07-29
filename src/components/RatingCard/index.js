import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { AirbnbRating } from 'react-native-ratings';

import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import * as S from './styles';

const RatingCard = ({ rating, totalVotes }) => {
  const reviews = ['Muito Ruim', 'Ruim', 'Regular', 'Bom', 'Muito Bom'];

  return (
    <S.Container style={S.styles.shadow}>
      <S.WrapperTitle>
        <S.Title>Avaliação</S.Title>
        <S.Title>atual</S.Title>
      </S.WrapperTitle>
      <S.WrapperRating>
        <AirbnbRating
          showRating={false}
          count={5}
          defaultRating={rating}
          size={wp(5)}
          isDisabled
        />
        <S.TotalRatings>{reviews[rating - 1]}</S.TotalRatings>
      </S.WrapperRating>
      <S.WrapperTotalVotes>
        <S.TotalRatings>{totalVotes}</S.TotalRatings>
        <S.TotalRatings>votos</S.TotalRatings>
      </S.WrapperTotalVotes>
    </S.Container>
  );
};

RatingCard.propTypes = {
  rating: PropTypes.number.isRequired,
  totalVotes: PropTypes.number.isRequired,
};

export default memo(RatingCard);

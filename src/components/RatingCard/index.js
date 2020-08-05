import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { AirbnbRating } from 'react-native-ratings';
import Shimmer from 'react-native-shimmer';

import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import * as S from './styles';

const RatingCard = ({ rating, description, loading }) => {
  const reviews = ['Muito Ruim', 'Ruim', 'Regular', 'Bom', 'Muito Bom'];

  return (
    <>
      {loading ? (
        <Shimmer>
          <S.Container style={S.styles.shadow}>
            <S.Loading radius={0} height={19} width={250} />
            <S.Loading radius={0} height={15} width={120} />
            <S.Loading radius={0} height={12} width={50} />
          </S.Container>
        </Shimmer>
      ) : (
        <S.Container style={S.styles.shadow}>
          <S.Description>{description}</S.Description>
          <AirbnbRating
            isDisabled
            showRating={false}
            count={5}
            defaultRating={3}
            size={wp(5)}
          />
          <S.Review>{reviews[rating - 1]}</S.Review>
        </S.Container>
      )}
    </>
  );
};

RatingCard.propTypes = {
  rating: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default memo(RatingCard);

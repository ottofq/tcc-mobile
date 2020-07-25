import React from 'react';
import PropTypes from 'prop-types';
import Shimmer from 'react-native-shimmer';

import * as S from './styles';

const MenuItem = ({ imgSrc, title, description, loading }) => {
  return (
    <>
      {loading ? (
        <Shimmer>
          <S.Container style={S.styles.shadow}>
            <S.Loading radius={20} height={40} width={40} />
            <S.TextContainer>
              <S.Loading radius={0} height={14} width={250} />
              <S.Loading radius={0} height={14} width={50} />
            </S.TextContainer>
          </S.Container>
        </Shimmer>
      ) : (
        <S.Container style={S.styles.shadow}>
          <S.Image source={imgSrc} />
          <S.TextContainer>
            <S.Description>{description}</S.Description>
            <S.Title>{title}</S.Title>
          </S.TextContainer>
        </S.Container>
      )}
    </>
  );
};

MenuItem.propTypes = {
  imgSrc: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default MenuItem;

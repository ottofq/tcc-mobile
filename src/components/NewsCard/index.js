import React from 'react';
import PropTypes from 'prop-types';
import Shimmer from 'react-native-shimmer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import * as S from './styles';

const NewsCard = ({ loading, title, date }) => {
  return (
    <>
      {loading ? (
        <Shimmer>
          <S.Card disable style={S.styles.shadow}>
            <S.ContentContainer>
              <S.Content>
                <S.Loading radius={0} height={10} width={150} />
                <S.Loading radius={0} height={10} width={300} />
                <S.Loading radius={0} height={10} width={300} />
              </S.Content>
              <S.ArrowContainer>
                <Icon name="arrow-right" color="#969696" size={32} />
              </S.ArrowContainer>
            </S.ContentContainer>
          </S.Card>
        </Shimmer>
      ) : (
        <S.Card style={S.styles.shadow}>
          <S.ContentContainer>
            <S.Content>
              <S.Date>
                {format(parseISO(date), 'eeee, dd/MM/yyyy', {
                  locale: ptBR,
                })}
              </S.Date>
              <S.Title>{title}</S.Title>
            </S.Content>
            <S.ArrowContainer>
              <Icon name="arrow-right" color="#969696" size={32} />
            </S.ArrowContainer>
          </S.ContentContainer>
        </S.Card>
      )}
    </>
  );
};

NewsCard.propTypes = {
  loading: PropTypes.bool.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NewsCard;

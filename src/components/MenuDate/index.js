import React from 'react';
import Shimmer from 'react-native-shimmer';
import { format, parseISO } from 'date-fns';
import PropTypes from 'prop-types';
import ptBR from 'date-fns/locale/pt-BR';

import * as S from './styles';

const MenuDate = ({ loading, date, title }) => {
  return (
    <>
      {loading ? (
        <Shimmer>
          <S.Container>
            <S.Loading radius={0} height={14} width={150} />
            <S.Loading radius={0} height={14} width={150} />
          </S.Container>
        </Shimmer>
      ) : (
        <S.Container>
          <S.Title>
            {format(parseISO(date), 'eeee, dd/MM/yyyy', {
              locale: ptBR,
            })}{' '}
            - {title}
          </S.Title>
        </S.Container>
      )}
    </>
  );
};

MenuDate.propTypes = {
  loading: PropTypes.bool.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MenuDate;

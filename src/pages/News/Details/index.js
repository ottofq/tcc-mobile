/* eslint-disable no-underscore-dangle */
import React from 'react';
import HTMLView from 'react-native-htmlview';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRoute, useNavigation } from '@react-navigation/native';

import * as S from './styles';

const Details = () => {
  const { params } = useRoute();
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <S.Container>
      <S.Header onPress={handlePress}>
        <S.ArrowContainer>
          <Icon name="arrow-left" color="#969696" size={32} />
        </S.ArrowContainer>
        <S.TitleContainer>
          <S.Title>{params.data.titulo}</S.Title>
        </S.TitleContainer>
      </S.Header>

      <S.Content>
        <HTMLView
          stylesheet={S.styles}
          value={`<div>${params.data.descricao}</div>`}
        />
      </S.Content>
    </S.Container>
  );
};

export default Details;

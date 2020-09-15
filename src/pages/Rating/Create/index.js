/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
import React, { useState, memo, useContext } from 'react';
import { Snackbar } from 'react-native-paper';
import { AirbnbRating } from 'react-native-ratings';
import { useForm, Controller } from 'react-hook-form';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

import userContext from '../../../contexts/User';
import menuContext from '../../../contexts/menu';
import animation from '../../../../assets/animation-rating.json';
import { createRating } from '../../../services';

import * as S from './styles';

const Rating = () => {
  const { handleSubmit, reset, control } = useForm();
  const [showAnimation, setShowAnimation] = useState(false);
  const [snackBarVisible, setSnackBarVisible] = useState(false);
  const navigation = useNavigation();
  const { user } = useContext(userContext);
  const { menu } = useContext(menuContext);

  async function onSubmit(data) {
    try {
      const { comment, avaliacao } = data;
      await createRating(menu.id, user._id, avaliacao, comment);
      setShowAnimation(true);
    } catch (error) {
      setSnackBarVisible(true);
    }
  }

  function finishAnimation() {
    reset();
    setShowAnimation(false);
    navigation.goBack();
  }

  const onDismissSnackBar = () => setSnackBarVisible(false);

  return (
    <S.Container>
      {showAnimation === false ? (
        <S.RatingContainer>
          <S.Title>Avalie o cardápio</S.Title>

          <S.RattingWrapper style={S.styles.shadow}>
            <S.Description>Repolho Branco, Duo de Batatas</S.Description>
            <Controller
              render={({ onChange }) => (
                <AirbnbRating
                  showRating
                  onFinishRating={(value) => onChange(value)}
                  count={5}
                  reviews={[
                    'Muito Ruim',
                    'Ruim',
                    'Regular',
                    'Bom',
                    'Muito Bom',
                  ]}
                  defaultRating={3}
                  size={wp(12)}
                />
              )}
              name="avaliacao.entrada"
              control={control}
              defaultValue={3}
            />
          </S.RattingWrapper>

          <S.RattingWrapper style={S.styles.shadow}>
            <S.Description>Sobrecoxa Assada</S.Description>
            <Controller
              render={({ onChange }) => (
                <AirbnbRating
                  showRating
                  onFinishRating={(value) => onChange(value)}
                  count={5}
                  reviews={[
                    'Muito Ruim',
                    'Ruim',
                    'Regular',
                    'Bom',
                    'Muito Bom',
                  ]}
                  defaultRating={3}
                  size={wp(12)}
                />
              )}
              name="avaliacao.prato_proteico"
              control={control}
              defaultValue={3}
            />
          </S.RattingWrapper>

          <S.RattingWrapper style={S.styles.shadow}>
            <S.Description>Ovo Frito</S.Description>
            <Controller
              render={({ onChange }) => (
                <AirbnbRating
                  showRating
                  onFinishRating={(value) => onChange(value)}
                  count={5}
                  reviews={[
                    'Muito Ruim',
                    'Ruim',
                    'Regular',
                    'Bom',
                    'Muito Bom',
                  ]}
                  defaultRating={3}
                  size={wp(12)}
                />
              )}
              name="avaliacao.opcao"
              control={control}
              defaultValue={3}
            />
          </S.RattingWrapper>

          <S.RattingWrapper style={S.styles.shadow}>
            <S.Description>Arroz, Feijão</S.Description>
            <Controller
              render={({ onChange }) => (
                <AirbnbRating
                  showRating
                  onFinishRating={(value) => onChange(value)}
                  count={5}
                  reviews={[
                    'Muito Ruim',
                    'Ruim',
                    'Regular',
                    'Bom',
                    'Muito Bom',
                  ]}
                  defaultRating={3}
                  size={wp(12)}
                />
              )}
              name="avaliacao.acompanhamento"
              control={control}
              defaultValue={3}
            />
          </S.RattingWrapper>

          <S.RattingWrapper style={S.styles.shadow}>
            <S.Description>Macarrão Gravatinha ao Alho e Óleo</S.Description>
            <Controller
              render={({ onChange }) => (
                <AirbnbRating
                  showRating
                  onFinishRating={(value) => onChange(value)}
                  count={5}
                  reviews={[
                    'Muito Ruim',
                    'Ruim',
                    'Regular',
                    'Bom',
                    'Muito Bom',
                  ]}
                  defaultRating={3}
                  size={wp(12)}
                />
              )}
              name="avaliacao.guarnicao"
              control={control}
              defaultValue={3}
            />
          </S.RattingWrapper>

          <S.RattingWrapper style={S.styles.shadow}>
            <S.Description>Melão</S.Description>
            <Controller
              render={({ onChange }) => (
                <AirbnbRating
                  showRating
                  onFinishRating={(value) => onChange(value)}
                  count={5}
                  reviews={[
                    'Muito Ruim',
                    'Ruim',
                    'Regular',
                    'Bom',
                    'Muito Bom',
                  ]}
                  defaultRating={3}
                  size={wp(12)}
                />
              )}
              name="avaliacao.sobremesa"
              control={control}
              defaultValue={3}
            />
          </S.RattingWrapper>

          <S.SubmitContainer>
            <Controller
              render={({ onChange }) => (
                <S.Input onChangeText={(text) => onChange(text)} />
              )}
              name="comment"
              defaultValue=""
              control={control}
            />

            <S.Button mode="contained" onPress={handleSubmit(onSubmit)}>
              Enviar avaliação
            </S.Button>
          </S.SubmitContainer>
          <Snackbar
            onDismiss={onDismissSnackBar}
            duration={2000}
            visible={snackBarVisible}
          >
            Erro ao enviar avaliação
          </Snackbar>
        </S.RatingContainer>
      ) : (
        <S.Animation
          onAnimationFinish={finishAnimation}
          autoPlay
          loop={false}
          source={animation}
        />
      )}
    </S.Container>
  );
};

export default memo(Rating);

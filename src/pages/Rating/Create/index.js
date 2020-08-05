/* eslint-disable camelcase */
import React, { useState, memo } from 'react';
import { Snackbar } from 'react-native-paper';
import { AirbnbRating } from 'react-native-ratings';
import { useForm, Controller } from 'react-hook-form';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

import animation from '../../../../assets/animation-rating.json';

import * as S from './styles';

const Rating = () => {
  const { handleSubmit, reset, control } = useForm();
  const [showAnimation, setShowAnimation] = useState(false);
  const [snackBarVisible, setSnackBarVisible] = useState(false);
  const navigation = useNavigation();

  async function onSubmit(data) {
    console.log(data);
    setShowAnimation(true);

    // try {
    //   const { comentario } = data;
    //   const user_id = Math.random() * 9;
    //   const nome = 'TEST_APP_NAME';
    //   const result = await api.get('cardapio/last');
    //   const { _id } = result.data;
    //   await api.post(`/cardapio/avaliar/${_id}`, {
    //     nome,
    //     comentario,
    //     user_id,
    //     nota,
    //   });

    //   Keyboard.dismiss();
    //   setShowAnimation(true);
    // } catch (error) {
    //   setSnackBarVisible(true);
    //   console.log(error);
    // }
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
              name="comentario"
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

/* eslint-disable camelcase */
import React, { useState } from 'react';
import { Snackbar } from 'react-native-paper';
import { AirbnbRating } from 'react-native-ratings';
import { Keyboard } from 'react-native';
import { useForm } from 'react-hook-form';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

import animation from '../../../assets/animation-rating.json';
import api from '../../services/api';

import * as S from './styles';

const Rating = () => {
  const [nota, setNota] = useState(3);
  const { register, setValue, handleSubmit, reset } = useForm();
  const [showAnimation, setShowAnimation] = useState(false);
  const [snackBarVisible, setSnackBarVisible] = useState(false);
  const navigation = useNavigation();

  async function onSubmit(data) {
    try {
      const { comentario } = data;
      const user_id = Math.random() * 9;
      const nome = 'TEST_APP_NAME';
      const result = await api.get('cardapio/last');
      const { _id } = result.data;
      await api.post(`/cardapio/avaliar/${_id}`, {
        nome,
        comentario,
        user_id,
        nota,
      });

      Keyboard.dismiss();
      setShowAnimation(true);
    } catch (error) {
      setSnackBarVisible(true);
      console.log(error);
    }
  }

  function finishAnimation() {
    reset();
    setShowAnimation(false);
    navigation.navigate('Cardapio');
  }

  const onDismissSnackBar = () => setSnackBarVisible(false);

  return (
    <S.Container>
      {showAnimation === false ? (
        <S.RatingContainer>
          <S.Title>Avalie o cardápio</S.Title>
          <AirbnbRating
            showRating
            starContainerStyle={{ backgroudColor: '#000' }}
            onFinishRating={setNota}
            count={5}
            reviews={['Muito Ruim', 'Ruim', 'Regular', 'Bom', 'Muito Bom']}
            defaultRating={3}
            size={wp(17)}
          />

          <S.SubmitContainer>
            <S.Input
              onChangeText={(text) => setValue('comentario', text)}
              ref={register('comentario')}
            />
            <S.Button mode="contained" onPress={handleSubmit(onSubmit)}>
              <Icon name="send" size={32} color="#fff" />
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
        <S.AnimationContainer>
          <S.Animation
            onAnimationFinish={finishAnimation}
            autoPlay
            loop={false}
            source={animation}
          />
        </S.AnimationContainer>
      )}
    </S.Container>
  );
};

export default Rating;

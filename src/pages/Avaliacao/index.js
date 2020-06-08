import React, {useState} from 'react';
import {Snackbar} from 'react-native-paper';
import {AirbnbRating} from 'react-native-ratings';
import {Keyboard} from 'react-native';
import {useForm} from 'react-hook-form';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import animation from '../../../assets/animation-rating.json';
import api from '../../services/api';

import {
  Container,
  ContainerAvaliacao,
  ContainerAnimacao,
  Title,
  ContainerSubmit,
  InputComentario,
  ButtonSubmit,
  Animation,
} from './styles';

export default function Avaliacao({navigation}) {
  const [nota, setNota] = useState(3);
  const {register, setValue, handleSubmit, reset} = useForm();
  const [showAnimation, setShowAnimation] = useState(false);
  const [snackBarVisible, setSnackBarVisible] = useState(false);

  async function onSubmit(data) {
    try {
      const {comentario} = data;
      const user_id = Math.random() * 9;
      const nome = 'TEST_APP_NAME';
      const result = await api.get('cardapio/last');
      const {_id} = result.data;
      const result_coment = await api.post(`/cardapio/avaliar/${_id}`, {
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
    navigation.navigate('Cardapio');
    setShowAnimation(false);
  }

  const _onDismissSnackBar = () => setSnackBarVisible(false);

  return (
    <Container>
      {showAnimation === false ? (
        <ContainerAvaliacao>
          <Title>Avalie o cardápio</Title>
          <AirbnbRating
            onFinishRating={setNota}
            count={5}
            reviews={['Muito Ruim', 'Ruim', 'Regular', 'Bom', 'Muito Bom']}
            defaultRating={3}
            size={hp(10)}
          />

          <ContainerSubmit>
            <InputComentario
              onChangeText={text => setValue('comentario', text)}
              ref={register('comentario')}
            />
            <ButtonSubmit mode="contained" onPress={handleSubmit(onSubmit)}>
              <Icon name="send" size={32} color="#fff" />
            </ButtonSubmit>
          </ContainerSubmit>
          <Snackbar
            onDismiss={_onDismissSnackBar}
            duration={2000}
            visible={snackBarVisible}>
            Erro ao enviar avaliação
          </Snackbar>
        </ContainerAvaliacao>
      ) : (
        <ContainerAnimacao>
          <Animation
            onAnimationFinish={finishAnimation}
            autoPlay
            loop={false}
            source={animation}
          />
        </ContainerAnimacao>
      )}
    </Container>
  );
}

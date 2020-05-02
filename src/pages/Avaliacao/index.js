import React, {useState, useEffect} from 'react';
import {AirbnbRating} from 'react-native-ratings';
import {Keyboard} from 'react-native';
import {useForm} from 'react-hook-form';

import animation from '../../../assets/animation-rating.json';
import api from '../../services/api';

import {
  Container,
  ScrollViewAvaliacao,
  ContainerAnimacao,
  Title,
  ContainerSubmit,
  InputComentario,
  ButtonSubmit,
  Animation,
} from './styles';

export default function Avaliacão({navigation}) {
  const [nota, setNota] = useState(3);
  const {register, setValue, handleSubmit, reset} = useForm();
  const [showAnimation, setShowAnimation] = useState(false);
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    return () => {
      Keyboard.removeListener('keyboardDidShow', keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', keyboardDidHide);
      console.log('componente unmount, listener removido');
    };
  }, []);

  const keyboardDidShow = () => {
    setKeyboardVisible(true);
    console.log('teclado aberto');
  };

  const keyboardDidHide = () => {
    setKeyboardVisible(false);
    console.log('teclado fechado');
  };

  function onSubmit(data) {
    console.log('data', data);
    console.log('a nota é', nota);
    Keyboard.dismiss();
    setShowAnimation(true);
  }

  function finishAnimation() {
    reset();
    navigation.navigate('Cardapio');
    setShowAnimation(false);
  }

  return (
    <Container>
      {showAnimation === false ? (
        <ScrollViewAvaliacao keyboardShouldPersistTaps="always">
          <Title>Avalie o cardápio</Title>
          <AirbnbRating
            onFinishRating={setNota}
            count={5}
            reviews={['Muito Ruim', 'Ruim', 'Regular', 'Bom', 'Muito Bom']}
            defaultRating={3}
            size={70}
          />

          <ContainerSubmit keyboardVisible={keyboardVisible}>
            <InputComentario
              onChangeText={text => setValue('comentario', text)}
              ref={register('comentario')}
            />
            <ButtonSubmit onPress={handleSubmit(onSubmit)} mode="contained">
              Enviar Avaliação
            </ButtonSubmit>
          </ContainerSubmit>
        </ScrollViewAvaliacao>
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

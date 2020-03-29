import React, {useState, useEffect} from 'react';
import {AirbnbRating} from 'react-native-ratings';
import {Keyboard, KeyboardAvoidingView} from 'react-native';

import {
  Container,
  Title,
  ContainerSubmit,
  InputComentario,
  ButtonSubmit,
} from './styles';

export default function Avaliacão({navigation}) {
  const [nota, setNota] = useState(0);
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

  function handleButton() {
    Keyboard.dismiss();
    console.log('a nota é', nota);
  }
  return (
    <Container keyboardShouldPersistTaps="always">
      <Title>Avalie o cardápio</Title>
      <AirbnbRating
        onFinishRating={setNota}
        count={5}
        reviews={['Muito Ruim', 'Ruim', 'Regular', 'Bom', 'Muito Bom']}
        defaultRating={3}
        size={70}
      />

      <ContainerSubmit keyboardVisible={keyboardVisible}>
        <InputComentario />
        <ButtonSubmit onPress={handleButton} mode="contained">
          Enviar Avaliação
        </ButtonSubmit>
      </ContainerSubmit>
    </Container>
  );
}

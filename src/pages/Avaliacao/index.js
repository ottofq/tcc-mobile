import React, {useState} from 'react';
import {AirbnbRating} from 'react-native-ratings';

import {
  Container,
  Title,
  ContainerComentario,
  InputComentario,
  ButtonSubmit,
} from './styles';

export default function Avaliacão() {
  const [nota, setNota] = useState(0);

  function handleButton() {
    console.log('a nota é', nota);
  }
  return (
    <Container>
      <Title>Avalie o cardápio</Title>
      <AirbnbRating
        onFinishRating={setNota}
        count={5}
        reviews={['Muito Ruim', 'Ruim', 'Regular', 'Bom', 'Muito Bom']}
        defaultRating={3}
        size={70}
      />

      <ContainerComentario>
        <InputComentario />
      </ContainerComentario>
      <ButtonSubmit onPress={handleButton} mode="contained">
        Enviar Avaliação
      </ButtonSubmit>
    </Container>
  );
}

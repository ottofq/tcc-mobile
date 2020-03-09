import React, {useState} from 'react';
import {Button} from 'react-native-paper';
import {AirbnbRating} from 'react-native-ratings';

import {Container, Title, ContainerComentario, InputComentario} from './styles';

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
        defaultRating={0}
        size={70}
      />

      <ContainerComentario>
        <InputComentario />
      </ContainerComentario>
      <Button
        onPress={handleButton}
        style={{
          marginBottom: 5,
          marginHorizontal: 15,
          height: 50,
          justifyContent: 'center',
        }}
        mode="contained">
        Enviar Avaliação
      </Button>
    </Container>
  );
}

import React, {useState, useEffect} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {useForm} from 'react-hook-form';
import {Button} from 'react-native-paper';

import {
  Container,
  TitleCheckboxGroup,
  ContainerButton,
  ContainerCheckbox,
  Input,
  TitleCheckbox,
} from './styles';

export default function Step9({navigation, route}) {
  const {register, handleSubmit, setValue} = useForm();
  const [melhoriaCardapio, setMelhoriaCardapio] = useState(false);
  const [melhoriaSaborPreparacao, setMelhoriaSaborPreparacao] = useState(false);
  const [melhoriaOpcoesVegana, setMelhoriaOpcoesVegana] = useState(false);
  const [melhoriaEstruturaFisica, setMelhoriaEstruturaFisica] = useState(false);
  const [melhoriaTempoEsperaFila, setMelhoriaTempoEsperaFila] = useState(false);
  const [melhoriaPrecoTicket, setMelhoriaPrecoTicket] = useState(false);

  useEffect(() => {
    setValue('melhoria_cardapio', false);
    setValue('melhoria_sabor_preparacao', false);
    setValue('melhoria_opcoes_vegana', false);
    setValue('melhoria_estrutura_fisica', false);
    setValue('melhoria_tempo_espera_fila', false);
    setValue('melhoria_preco_ticket', false);
    setValue('melhorias_outras', false);
  }, [setValue]);

  const params = route.params;

  function handleButtonNext(data) {
    const obj = {...params, ...data};
    console.log(obj);
    navigation.navigate('Cardapio RU - CCA UFES', {
      ...obj,
    });
  }
  function handlerCheckbox(field, state, setState) {
    setState(!state);
    setValue(field, !state);
  }

  function handleButtonPrev() {
    navigation.goBack();
  }

  return (
    <Container>
      <TitleCheckboxGroup>
        O que você acha que deveria ser melhorado no RU?
      </TitleCheckboxGroup>
      <ContainerCheckbox
        onStartShouldSetResponder={() =>
          handlerCheckbox(
            'melhorias_cardapio',
            melhoriaCardapio,
            setMelhoriaCardapio,
          )
        }>
        <CheckBox
          ref={register({name: 'melhoria_cardapio'})}
          value={melhoriaCardapio ? true : false}
          onValueChange={() =>
            handlerCheckbox(
              'melhorias_cardapio',
              melhoriaCardapio,
              setMelhoriaCardapio,
            )
          }
        />
        <TitleCheckbox>Cardápio</TitleCheckbox>
      </ContainerCheckbox>
      <ContainerCheckbox
        onStartShouldSetResponder={() =>
          handlerCheckbox(
            'melhoria_sabor_preparacao',
            melhoriaSaborPreparacao,
            setMelhoriaSaborPreparacao,
          )
        }>
        <CheckBox
          ref={register({name: 'melhoria_sabor_preparacao'})}
          value={melhoriaSaborPreparacao ? true : false}
          onValueChange={() =>
            handlerCheckbox(
              'melhoria_sabor_preparacao',
              melhoriaSaborPreparacao,
              setMelhoriaSaborPreparacao,
            )
          }
        />
        <TitleCheckbox>Sabor das preparações</TitleCheckbox>
      </ContainerCheckbox>

      <ContainerCheckbox
        onStartShouldSetResponder={() =>
          handlerCheckbox(
            'melhoria_opcoes_vegana',
            melhoriaOpcoesVegana,
            setMelhoriaOpcoesVegana,
          )
        }>
        <CheckBox
          ref={register({name: 'melhoria_opcoes_vegana'})}
          value={melhoriaOpcoesVegana ? true : false}
          onValueChange={() =>
            handlerCheckbox(
              'melhoria_mais_opcoes_vegana',
              melhoriaOpcoesVegana,
              setMelhoriaOpcoesVegana,
            )
          }
        />
        <TitleCheckbox>Mais opções veganas</TitleCheckbox>
      </ContainerCheckbox>

      <ContainerCheckbox
        onStartShouldSetResponder={() =>
          handlerCheckbox(
            'melhoria_estrutura_fisica',
            melhoriaEstruturaFisica,
            setMelhoriaEstruturaFisica,
          )
        }>
        <CheckBox
          ref={register({name: 'melhoria_estrutura_fisica'})}
          value={melhoriaEstruturaFisica ? true : false}
          onValueChange={() =>
            handlerCheckbox(
              'melhoria_estrutura_fisica',
              melhoriaEstruturaFisica,
              setMelhoriaEstruturaFisica,
            )
          }
        />
        <TitleCheckbox>Estrutura física</TitleCheckbox>
      </ContainerCheckbox>
      <ContainerCheckbox
        onStartShouldSetResponder={() =>
          handlerCheckbox(
            'melhoria_tempo_espera_fila',
            melhoriaTempoEsperaFila,
            setMelhoriaTempoEsperaFila,
          )
        }>
        <CheckBox
          ref={register({name: 'melhoria_tempo_espera_fila'})}
          value={melhoriaTempoEsperaFila ? true : false}
          onValueChange={() =>
            handlerCheckbox(
              'melhoria_tempo_espera_fila',
              melhoriaTempoEsperaFila,
              setMelhoriaTempoEsperaFila,
            )
          }
        />
        <TitleCheckbox>Tempo de espera na fila</TitleCheckbox>
      </ContainerCheckbox>

      <ContainerCheckbox
        onStartShouldSetResponder={() =>
          handlerCheckbox(
            'melhoria_preco_ticket',
            melhoriaPrecoTicket,
            setMelhoriaPrecoTicket,
          )
        }>
        <CheckBox
          ref={register({name: 'melhoria_preco_ticket'})}
          value={melhoriaPrecoTicket ? true : false}
          onValueChange={() =>
            handlerCheckbox(
              'melhoria_preco_ticket',
              melhoriaPrecoTicket,
              setMelhoriaPrecoTicket,
            )
          }
        />
        <TitleCheckbox>Preço do ticket</TitleCheckbox>
      </ContainerCheckbox>

      <Input
        label="Outras"
        type="outlined"
        ref={register('outras_melhorias')}
        onChangeText={text => setValue('outras_melhorias', text)}
      />

      <ContainerButton>
        <Button mode="contained" onPress={handleButtonPrev}>
          Voltar
        </Button>
        <Button mode="contained" onPress={handleSubmit(handleButtonNext)}>
          Próximo
        </Button>
      </ContainerButton>
    </Container>
  );
}

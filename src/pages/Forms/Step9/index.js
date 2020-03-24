import React, {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {Button} from 'react-native-paper';

import CheckBoxItem from '../../../components/Checkbox';

import {Container, TitleCheckboxGroup, ContainerButton, Input} from './styles';

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
    navigation.navigate('Done', {
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

      <CheckBoxItem
        label="Cardápio"
        status={melhoriaCardapio ? 'checked' : 'unchecked'}
        onPress={() =>
          handlerCheckbox(
            'melhorias_cardapio',
            melhoriaCardapio,
            setMelhoriaCardapio,
          )
        }
      />

      <CheckBoxItem
        label="Sabor das preparações"
        status={melhoriaSaborPreparacao ? 'checked' : 'unchecked'}
        onPress={() =>
          handlerCheckbox(
            'melhoria_sabor_preparacao',
            melhoriaSaborPreparacao,
            setMelhoriaSaborPreparacao,
          )
        }
      />

      <CheckBoxItem
        label="Mais opções veganas"
        status={melhoriaOpcoesVegana ? 'checked' : 'unchecked'}
        onPress={() =>
          handlerCheckbox(
            'melhoria_mais_opcoes_vegana',
            melhoriaOpcoesVegana,
            setMelhoriaOpcoesVegana,
          )
        }
      />

      <CheckBoxItem
        label="Estrutura física"
        status={melhoriaEstruturaFisica ? 'checked' : 'unchecked'}
        onPress={() =>
          handlerCheckbox(
            'melhoria_estrutura_fisica',
            melhoriaEstruturaFisica,
            setMelhoriaEstruturaFisica,
          )
        }
      />

      <CheckBoxItem
        label="Tempo de espera na fila"
        status={melhoriaTempoEsperaFila ? 'checked' : 'unchecked'}
        onPress={() =>
          handlerCheckbox(
            'melhoria_tempo_espera_fila',
            melhoriaTempoEsperaFila,
            setMelhoriaTempoEsperaFila,
          )
        }
      />

      <CheckBoxItem
        label="Preço do ticket"
        status={melhoriaPrecoTicket ? 'checked' : 'unchecked'}
        onPress={() =>
          handlerCheckbox(
            'melhoria_preco_ticket',
            melhoriaPrecoTicket,
            setMelhoriaPrecoTicket,
          )
        }
      />

      <Input
        label="Outras"
        mode="outlined"
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

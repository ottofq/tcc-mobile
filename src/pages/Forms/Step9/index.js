import React, {useState, useEffect} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {Button, RadioButton, HelperText} from 'react-native-paper';
import {KeyboardAvoidingView} from 'react-native';
import {merge} from 'lodash';

import CheckBoxItem from '../../../components/Checkbox';
import RadioButtonItem from '../../../components/RadioButton';

import {
  Container,
  ContainerCheckbox,
  ContainerRadioButton,
  ContainerTitle,
  TitleRadioGroup,
  TitleCheckboxGroup,
  ContainerButton,
  Input,
} from './styles';

export default function Step9({navigation, route}) {
  const {register, handleSubmit, setValue, errors, control} = useForm();
  const [melhoriaCardapio, setMelhoriaCardapio] = useState(false);
  const [melhoriaSaborPreparacao, setMelhoriaSaborPreparacao] = useState(false);
  const [melhoriaOpcoesVegana, setMelhoriaOpcoesVegana] = useState(false);
  const [melhoriaEstruturaFisica, setMelhoriaEstruturaFisica] = useState(false);
  const [melhoriaTempoEsperaFila, setMelhoriaTempoEsperaFila] = useState(false);
  const [melhoriaPrecoTicket, setMelhoriaPrecoTicket] = useState(false);

  useEffect(() => {
    setValue('melhorias_RU.cardapio', false);
    setValue('melhorias_RU.melhoria_sabor_preparacao', false);
    setValue('melhorias_RU.opcao_vegetariana', false);
    setValue('melhorias_RU.estrutura_fisica', false);
    setValue('melhorias_RU.tempo_fila', false);
    setValue('melhorias_RU.preco_ticket', false);
    setValue('melhorias_RU.melhoria_outros', false);
  }, [setValue]);

  const params = route.params;

  function handleButtonNext(data) {
    const obj = merge(params, data);
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
    <KeyboardAvoidingView style={{flex: 1}}>
      <Container>
        <Controller
          as={
            <RadioButton.Group
              onValueChange={value =>
                setValue('avaliacao_RU.avaliacao_geral', value)
              }>
              <ContainerRadioButton>
                <ContainerTitle>
                  <TitleRadioGroup
                    error={errors?.avaliacao_RU?.avaliacao_geral}>
                    De modo geral, como você avalia o cardápio do RU?
                  </TitleRadioGroup>
                  {errors?.avaliacao_RU?.avaliacao_geral && (
                    <HelperText padding="none" type="error">
                      * Campo Obrigatório
                    </HelperText>
                  )}
                </ContainerTitle>
                <RadioButtonItem
                  label="Muito ruim"
                  value="Muito ruim"
                  handlePress={() =>
                    setValue('avaliacao_RU.avaliacao_geral', 'Muito ruim')
                  }
                />

                <RadioButtonItem
                  label="Ruim"
                  value="Ruim"
                  handlePress={() =>
                    setValue('avaliacao_RU.avaliacao_geral', 'Ruim')
                  }
                />

                <RadioButtonItem
                  label="Regular"
                  value="Regular"
                  handlePress={() =>
                    setValue('avaliacao_RU.avaliacao_geral', 'Regular')
                  }
                />

                <RadioButtonItem
                  label="Bom"
                  value="Bom"
                  handlePress={() =>
                    setValue('avaliacao_RU.avaliacao_geral', 'Bom')
                  }
                />

                <RadioButtonItem
                  label="Muito bom"
                  value="Muito bom"
                  handlePress={() =>
                    setValue('avaliacao_RU.avaliacao_geral', 'Muito bom')
                  }
                />
              </ContainerRadioButton>
            </RadioButton.Group>
          }
          name="avaliacao_RU.avaliacao_geral"
          control={control}
          rules={{required: true}}
          defaultValue=""
        />
        <TitleCheckboxGroup>
          O que você acha que deveria ser melhorado no RU?
        </TitleCheckboxGroup>

        <ContainerCheckbox>
          <CheckBoxItem
            label="Cardápio"
            status={melhoriaCardapio ? 'checked' : 'unchecked'}
            ref={register('melhorias_RU.cardapio')}
            onPress={() =>
              handlerCheckbox(
                'melhorias_RU.cardapio',
                melhoriaCardapio,
                setMelhoriaCardapio,
              )
            }
          />

          <CheckBoxItem
            label="Sabor das preparações"
            status={melhoriaSaborPreparacao ? 'checked' : 'unchecked'}
            ref={register('melhorias_RU.melhoria_sabor_preparacao')}
            onPress={() =>
              handlerCheckbox(
                'melhorias_RU.melhoria_sabor_preparacao',
                melhoriaSaborPreparacao,
                setMelhoriaSaborPreparacao,
              )
            }
          />

          <CheckBoxItem
            label="Mais opções veganas"
            status={melhoriaOpcoesVegana ? 'checked' : 'unchecked'}
            ref={register('melhorias_RU.opcao_vegetariana')}
            onPress={() =>
              handlerCheckbox(
                'melhorias_RU.opcao_vegetariana',
                melhoriaOpcoesVegana,
                setMelhoriaOpcoesVegana,
              )
            }
          />

          <CheckBoxItem
            label="Estrutura física"
            status={melhoriaEstruturaFisica ? 'checked' : 'unchecked'}
            ref={register('melhorias_RU.estrutura_fisica')}
            onPress={() =>
              handlerCheckbox(
                'melhorias_RU.estrutura_fisica',
                melhoriaEstruturaFisica,
                setMelhoriaEstruturaFisica,
              )
            }
          />

          <CheckBoxItem
            label="Tempo de espera na fila"
            status={melhoriaTempoEsperaFila ? 'checked' : 'unchecked'}
            ref={register('melhorias_RU.tempo_fila')}
            onPress={() =>
              handlerCheckbox(
                'melhorias_RU.tempo_fila',
                melhoriaTempoEsperaFila,
                setMelhoriaTempoEsperaFila,
              )
            }
          />

          <CheckBoxItem
            label="Preço do ticket"
            status={melhoriaPrecoTicket ? 'checked' : 'unchecked'}
            ref={register('melhorias_RU.preco_ticket')}
            onPress={() =>
              handlerCheckbox(
                'melhorias_RU.preco_ticket',
                melhoriaPrecoTicket,
                setMelhoriaPrecoTicket,
              )
            }
          />
        </ContainerCheckbox>

        <Input
          label="Outras"
          mode="outlined"
          ref={register('melhorias_RU.melhoria_outros')}
          onChangeText={text => setValue('melhorias_RU.melhoria_outros', text)}
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
    </KeyboardAvoidingView>
  );
}

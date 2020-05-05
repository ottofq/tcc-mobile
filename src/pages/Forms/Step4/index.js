import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {Button, RadioButton, HelperText} from 'react-native-paper';

import RadioButtonItem from '../../../components/RadioButton';

import {
  Container,
  ContainerRadioButton,
  ContainerTitle,
  TitleRadioGroup,
  ContainerButton,
} from './styles';

export default function Step4({navigation, route}) {
  const {handleSubmit, setValue, control, errors} = useForm();

  const params = route.params;

  function handleButtonNext(data) {
    const obj = {...params, ...data};
    StringToBoolean(obj);
    console.log(obj);
    navigation.navigate('Questionário passo 5', {
      ...obj,
    });
  }

  function StringToBoolean(obj) {
    Object.keys(obj).forEach(item => {
      if (obj[item] === 'nao') {
        obj[item] = false;
      }
      if (obj[item] === 'sim') {
        obj[item] = true;
      }
    });
  }

  function handleButtonPrev() {
    navigation.goBack();
  }

  return (
    <Container>
      <Controller
        as={
          <RadioButton.Group
            onValueChange={value => setValue('adiciona_sal', value)}>
            <ContainerRadioButton>
              <ContainerTitle>
                <TitleRadioGroup error={errors.adiciona_sal}>
                  Costuma adicionar sal nos alimentos prontos e saladas (você
                  faz uso do saleiro à mesa)?
                  {errors.adiciona_sal && (
                    <HelperText padding="none" type="error">
                      * Campo Obrigatório
                    </HelperText>
                  )}
                </TitleRadioGroup>
              </ContainerTitle>

              <RadioButtonItem
                label="Sim"
                value="sim"
                handlePress={() => setValue('adiciona_sal', 'sim')}
              />

              <RadioButtonItem
                label="Não"
                value="nao"
                handlePress={() => setValue('adiciona_sal', 'nao')}
              />
            </ContainerRadioButton>
          </RadioButton.Group>
        }
        name="adiciona_sal"
        control={control}
        rules={{required: true}}
        defaultValue=""
      />

      <Controller
        as={
          <RadioButton.Group
            onValueChange={value => setValue('utiliza_oleo_composto', value)}>
            <ContainerRadioButton>
              <ContainerTitle>
                <TitleRadioGroup error={errors.utiliza_oleo_composto}>
                  Você utiliza o óleo composto que fica no balcão de
                  distribuição de refeições?
                  {errors.utiliza_oleo_composto && (
                    <HelperText padding="none" type="error">
                      * Campo Obrigatório
                    </HelperText>
                  )}
                </TitleRadioGroup>
              </ContainerTitle>

              <RadioButtonItem
                label="Sim"
                value="sim"
                handlePress={() => setValue('utiliza_oleo_composto', 'sim')}
              />

              <RadioButtonItem
                label="Não"
                value="nao"
                handlePress={() => setValue('utiliza_oleo_composto', 'nao')}
              />
            </ContainerRadioButton>
          </RadioButton.Group>
        }
        name="utiliza_oleo_composto"
        control={control}
        rules={{required: true}}
        defaultValue=""
      />

      <Controller
        as={
          <RadioButton.Group
            onValueChange={value =>
              setValue('consome_bebida_alcoolica', value)
            }>
            <ContainerRadioButton>
              <ContainerTitle>
                <TitleRadioGroup error={errors.consome_bebida_alcoolica}>
                  Você consome bebidas alcoólicas?
                </TitleRadioGroup>
                {errors.consome_bebida_alcoolica && (
                  <HelperText padding="none" type="error">
                    * Campo Obrigatório
                  </HelperText>
                )}
              </ContainerTitle>

              <RadioButtonItem
                label="Sim, Diariamente"
                value="diariamente"
                handlePress={() =>
                  setValue('consome_bebida_alcoolica', 'diariamente')
                }
              />

              <RadioButtonItem
                label="Sim, de 3-6 vezes na semana"
                value="3-6 vezes na semana"
                handlePress={() =>
                  setValue('consome_bebida_alcoolica', '3-6 vezes na semana')
                }
              />

              <RadioButtonItem
                label="Sim, de 1-2 vezes na semana"
                value="1-2 vezes na semana"
                handlePress={() =>
                  setValue('consome_bebida_alcoolica', '1-2 vezes na semana')
                }
              />

              <RadioButtonItem
                label="Sim, Raramente"
                value="raramente"
                handlePress={() =>
                  setValue('consome_bebida_alcoolica', 'raramente')
                }
              />

              <RadioButtonItem
                label="Não Consumo"
                value="nao consumo"
                handlePress={() =>
                  setValue('consome_bebida_alcoolica', 'nao consumo')
                }
              />
            </ContainerRadioButton>
          </RadioButton.Group>
        }
        name="consome_bebida_alcoolica"
        control={control}
        rules={{required: true}}
        defaultValue=""
      />

      <Controller
        as={
          <RadioButton.Group
            onValueChange={value => setValue('tabagista', value)}>
            <ContainerRadioButton>
              <ContainerTitle>
                <TitleRadioGroup error={errors.tabagista}>
                  Você é tabagista?
                </TitleRadioGroup>
                {errors.tabagista && (
                  <HelperText padding="none" type="error">
                    * Campo Obrigatório
                  </HelperText>
                )}
              </ContainerTitle>

              <RadioButtonItem
                label="Sim"
                value="sim"
                handlePress={() => setValue('tabagista', 'sim')}
              />

              <RadioButtonItem
                label="Não"
                value="nao"
                handlePress={() => setValue('tabagista', 'nao')}
              />
            </ContainerRadioButton>
          </RadioButton.Group>
        }
        name="tabagista"
        control={control}
        rules={{required: true}}
        defaultValue=""
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

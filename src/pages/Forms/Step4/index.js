/* eslint-disable no-param-reassign */
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, RadioButton, HelperText } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';

import RadioButtonItem from '../../../components/RadioButton';
import ProgressBar from '../../../components/ProgressBar';

import * as S from './styles';

const Step4 = () => {
  const { handleSubmit, setValue, control, errors } = useForm();
  const navigation = useNavigation();
  const { params } = useRoute();

  function StringToBoolean(obj) {
    Object.keys(obj).forEach((item) => {
      if (obj[item] === 'nao') {
        obj[item] = false;
      }
      if (obj[item] === 'sim') {
        obj[item] = true;
      }
    });
  }

  function handleButtonNext(data) {
    const obj = { ...params, ...data };
    StringToBoolean(obj);
    navigation.navigate('step-5', {
      ...obj,
    });
  }

  function handleButtonPrev() {
    navigation.goBack();
  }

  return (
    <S.Container>
      <ProgressBar progress={0.4} />
      <Controller
        as={
          <RadioButton.Group
            onValueChange={(value) => setValue('adiciona_sal', value)}
          >
            <S.ContainerRadioButton>
              <S.ContainerTitle>
                <S.TitleRadioGroup error={errors.adiciona_sal}>
                  Costuma adicionar sal nos alimentos prontos e saladas (você
                  faz uso do saleiro à mesa)?
                  {errors.adiciona_sal && (
                    <HelperText padding="none" type="error">
                      * Campo Obrigatório
                    </HelperText>
                  )}
                </S.TitleRadioGroup>
              </S.ContainerTitle>

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
            </S.ContainerRadioButton>
          </RadioButton.Group>
        }
        name="adiciona_sal"
        control={control}
        rules={{ required: true }}
        defaultValue=""
      />

      <Controller
        as={
          <RadioButton.Group
            onValueChange={(value) => setValue('utiliza_oleo_composto', value)}
          >
            <S.ContainerRadioButton>
              <S.ContainerTitle>
                <S.TitleRadioGroup error={errors.utiliza_oleo_composto}>
                  Você utiliza o óleo composto que fica no balcão de
                  distribuição de refeições?
                  {errors.utiliza_oleo_composto && (
                    <HelperText padding="none" type="error">
                      * Campo Obrigatório
                    </HelperText>
                  )}
                </S.TitleRadioGroup>
              </S.ContainerTitle>

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
            </S.ContainerRadioButton>
          </RadioButton.Group>
        }
        name="utiliza_oleo_composto"
        control={control}
        rules={{ required: true }}
        defaultValue=""
      />

      <Controller
        as={
          <RadioButton.Group
            onValueChange={(value) =>
              setValue('consome_bebida_alcoolica', value)
            }
          >
            <S.ContainerRadioButton>
              <S.ContainerTitle>
                <S.TitleRadioGroup error={errors.consome_bebida_alcoolica}>
                  Você consome bebidas alcoólicas?
                </S.TitleRadioGroup>
                {errors.consome_bebida_alcoolica && (
                  <HelperText padding="none" type="error">
                    * Campo Obrigatório
                  </HelperText>
                )}
              </S.ContainerTitle>

              <RadioButtonItem
                label="Sim, Diariamente"
                value="Diariamente"
                handlePress={() =>
                  setValue('consome_bebida_alcoolica', 'Diariamente')
                }
              />

              <RadioButtonItem
                label="Sim, de 3-6 vezes na semana"
                value="de 3-6 vezes na semana"
                handlePress={() =>
                  setValue('consome_bebida_alcoolica', 'de 3-6 vezes na semana')
                }
              />

              <RadioButtonItem
                label="Sim, de 1-2 vezes na semana"
                value="de 1-2 vezes na semana"
                handlePress={() =>
                  setValue('consome_bebida_alcoolica', 'de 1-2 vezes na semana')
                }
              />

              <RadioButtonItem
                label="Sim, Raramente"
                value="Raramente"
                handlePress={() =>
                  setValue('consome_bebida_alcoolica', 'Raramente')
                }
              />

              <RadioButtonItem
                label="Não Consumo"
                value="Não consumo bebidas alcoólicas"
                handlePress={() =>
                  setValue(
                    'consome_bebida_alcoolica',
                    'Não consumo bebidas alcoólicas'
                  )
                }
              />
            </S.ContainerRadioButton>
          </RadioButton.Group>
        }
        name="consome_bebida_alcoolica"
        control={control}
        rules={{ required: true }}
        defaultValue=""
      />

      <Controller
        as={
          <RadioButton.Group
            onValueChange={(value) => setValue('tabagista', value)}
          >
            <S.ContainerRadioButton>
              <S.ContainerTitle>
                <S.TitleRadioGroup error={errors.tabagista}>
                  Você é tabagista?
                </S.TitleRadioGroup>
                {errors.tabagista && (
                  <HelperText padding="none" type="error">
                    * Campo Obrigatório
                  </HelperText>
                )}
              </S.ContainerTitle>

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
            </S.ContainerRadioButton>
          </RadioButton.Group>
        }
        name="tabagista"
        control={control}
        rules={{ required: true }}
        defaultValue=""
      />

      <S.ContainerButton>
        <Button mode="contained" onPress={handleButtonPrev}>
          Voltar
        </Button>
        <Button mode="contained" onPress={handleSubmit(handleButtonNext)}>
          Próximo
        </Button>
      </S.ContainerButton>
    </S.Container>
  );
};

export default Step4;

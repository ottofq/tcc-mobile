import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, RadioButton, HelperText } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';

import RadioButtonItem from '../../../components/RadioButton';
import ProgressBar from '../../../components/ProgressBar';

import * as S from './styles';

const Step2 = () => {
  const { handleSubmit, setValue, control, errors } = useForm();
  const navigation = useNavigation();
  const { params } = useRoute();

  function handleButtonNext(data) {
    const obj = { ...params, ...data };
    navigation.navigate('step-3', {
      ...obj,
    });
  }
  function handleButtonPrev() {
    navigation.goBack();
  }

  return (
    <S.Container>
      <ProgressBar progress={0.2} />
      <Controller
        as={
          <RadioButton.Group
            onValueChange={(value) => setValue('bolsista', value)}
          >
            <S.ContainerRadioButton>
              <S.ContainerTitle>
                <S.TitleRadioGroup error={errors.bolsista}>
                  Você é Bolsista do RU ?
                  {errors.bolsista && (
                    <HelperText padding="none" type="error">
                      * Campo Obrigatório
                    </HelperText>
                  )}
                </S.TitleRadioGroup>
              </S.ContainerTitle>
              <RadioButtonItem
                label="Não sou bolsista"
                value="Não sou bolsista"
                handlePress={() => setValue('bolsista', 'Não sou bolsista')}
              />
              <RadioButtonItem
                label="Bolsa Parcial"
                value="Bolsa parcial"
                handlePress={() => setValue('bolsista', 'Bolsa parcial')}
              />
              <RadioButtonItem
                label="Bolsa Integral"
                value="Bolsa integral"
                handlePress={() => setValue('bolsista', 'Bolsa integral')}
              />
            </S.ContainerRadioButton>
          </RadioButton.Group>
        }
        name="bolsista"
        control={control}
        rules={{ required: true }}
        defaultValue=""
      />
      <Controller
        as={
          <RadioButton.Group
            onValueChange={(value) => setValue('frequencia_RU', value)}
          >
            <S.ContainerRadioButton>
              <S.ContainerTitle>
                <S.TitleRadioGroup error={errors.frequencia_RU}>
                  Com qual frequência você realiza suas refeições no RU.{' '}
                  {errors.frequencia_RU && (
                    <HelperText padding="none" type="error">
                      * Campo Obrigatório
                    </HelperText>
                  )}
                </S.TitleRadioGroup>
              </S.ContainerTitle>
              <RadioButtonItem
                label="Todos os dias"
                value="Todos os dias"
                handlePress={() => setValue('frequencia_RU', 'Todos os dias')}
              />

              <RadioButtonItem
                label="Pelo menos 3 vezes na semana"
                value="Pelo menos 3 vezes na semana"
                handlePress={() =>
                  setValue('frequencia_RU', 'Pelo menos 3 vezes na semana')
                }
              />

              <RadioButtonItem
                label="Pelo menos 1 vez na semana"
                value="Pelo menos 1 vez na semana"
                handlePress={() =>
                  setValue('frequencia_RU', 'Pelo menos 1 vez na semana')
                }
              />

              <RadioButtonItem
                label="Raramente"
                value="Raramente"
                handlePress={() => setValue('frequencia_RU', 'Raramente')}
              />
            </S.ContainerRadioButton>
          </RadioButton.Group>
        }
        name="frequencia_RU"
        control={control}
        rules={{ required: true }}
        defaultValue=""
      />

      <Controller
        as={
          <RadioButton.Group
            onValueChange={(value) => setValue('tipo_refeicao_RU', value)}
          >
            <S.ContainerRadioButton>
              <S.ContainerTitle>
                <S.TitleRadioGroup error={errors.tipo_refeicao_RU}>
                  Qual tipo de refeição você costuma realizar no RU?
                  {errors.tipo_refeicao_RU && (
                    <HelperText padding="none" type="error">
                      * Campo Obrigatório
                    </HelperText>
                  )}
                </S.TitleRadioGroup>
              </S.ContainerTitle>
              <RadioButtonItem
                label="Almoço"
                value="Almoço"
                handlePress={() => setValue('tipo_refeicao_RU', 'Almoço')}
              />

              <RadioButtonItem
                label="Jantar"
                value="Jantar"
                handlePress={() => setValue('tipo_refeicao_RU', 'Jantar')}
              />

              <RadioButtonItem
                label="Almoço e Jantar"
                value="Almoço e Jantar"
                handlePress={() =>
                  setValue('tipo_refeicao_RU', 'Almoço e Jantar')
                }
              />
            </S.ContainerRadioButton>
          </RadioButton.Group>
        }
        name="tipo_refeicao_RU"
        control={control}
        rules={{ required: true }}
        defaultValue=""
      />

      <Controller
        as={
          <RadioButton.Group
            onValueChange={(value) => setValue('nivel_fisico', value)}
          >
            <S.ContainerRadioButton>
              <S.ContainerTitle>
                <S.TitleRadioGroup error={errors.nivel_fisico}>
                  Como você se considera de acordo com o seu nível de atividade
                  física?
                  {errors.nivel_fisico && (
                    <HelperText padding="none" type="error">
                      * Campo Obrigatório
                    </HelperText>
                  )}
                </S.TitleRadioGroup>
              </S.ContainerTitle>
              <RadioButtonItem
                label="Sedentário"
                value="Sedentário"
                handlePress={() => setValue('nivel_fisico', 'Sedentário')}
              />

              <RadioButtonItem
                label="Leve"
                value="Leve"
                handlePress={() => setValue('nivel_fisico', 'Leve')}
              />

              <RadioButtonItem
                label="Moderado"
                value="Moderado"
                handlePress={() => setValue('nivel_fisico', 'Moderado')}
              />

              <RadioButtonItem
                label="Ativo"
                value="Ativo"
                handlePress={() => setValue('nivel_fisico', 'Ativo')}
              />
            </S.ContainerRadioButton>
          </RadioButton.Group>
        }
        name="nivel_fisico"
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

export default Step2;

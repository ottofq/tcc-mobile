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

export default function Step2({route, navigation}) {
  const {handleSubmit, setValue, control, errors} = useForm();
  const params = route.params;

  function handleButtonNext(data) {
    const obj = {...params, ...data};
    //console.log(obj);
    navigation.navigate('Questionário passo 3', {
      ...obj,
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
            onValueChange={value => setValue('frequencia_ru', value)}>
            <ContainerRadioButton>
              <ContainerTitle>
                <TitleRadioGroup error={errors.frequencia_ru}>
                  Com qual frequência você realiza suas refeições no RU.{' '}
                </TitleRadioGroup>
                {errors.frequencia_ru && (
                  <HelperText padding="none" type="error">
                    * Campo Obrigatório
                  </HelperText>
                )}
              </ContainerTitle>
              <RadioButtonItem
                label="Todos os dias"
                value="Todos os dias"
                handlePress={() => setValue('frequencia_ru', 'Todos os dias')}
              />

              <RadioButtonItem
                label="Pelo menos 3 vezes na semana"
                value="Pelo menos 3 vezes na semana"
                handlePress={() =>
                  setValue('frequencia_ru', 'Pelo menos 3 vezes na semana')
                }
              />

              <RadioButtonItem
                label="Pelo menos 1 vez na semana"
                value="Pelo menos 1 vez na semana"
                handlePress={() =>
                  setValue('frequencia_ru', 'Pelo menos 1 vez na semana')
                }
              />

              <RadioButtonItem
                label="Raramente"
                value="Raramente"
                handlePress={() => setValue('frequencia_ru', 'Raramente')}
              />
            </ContainerRadioButton>
          </RadioButton.Group>
        }
        name="frequencia_ru"
        control={control}
        rules={{required: true}}
        defaultValue=""
      />

      <Controller
        as={
          <RadioButton.Group
            onValueChange={value => setValue('tipo_refeicao', value)}>
            <ContainerRadioButton>
              <ContainerTitle>
                <TitleRadioGroup error={errors.tipo_refeicao}>
                  Qual tipo de refeição você costuma realizar no RU?{' '}
                </TitleRadioGroup>
                {errors.tipo_refeicao && (
                  <HelperText padding="none" type="error">
                    * Campo Obrigatório
                  </HelperText>
                )}
              </ContainerTitle>
              <RadioButtonItem
                label="Almoço"
                value="almoço"
                handlePress={() => setValue('tipo_refeicao', 'almoço')}
              />

              <RadioButtonItem
                label="Jantar"
                value="jantar"
                handlePress={() => setValue('tipo_refeicao', 'jantar')}
              />

              <RadioButtonItem
                label="Almoço e Jantar"
                value="almoco e jantar"
                handlePress={() => setValue('tipo_refeicao', 'almoco e jantar')}
              />
            </ContainerRadioButton>
          </RadioButton.Group>
        }
        name="tipo_refeicao"
        control={control}
        rules={{required: true}}
        defaultValue=""
      />

      <Controller
        as={
          <RadioButton.Group
            onValueChange={value => setValue('atividade_fisica', value)}>
            <ContainerRadioButton>
              <ContainerTitle>
                <TitleRadioGroup error={errors.atividade_fisica}>
                  Como você se considera de acordo com o seu nível de atividade
                  física?{' '}
                </TitleRadioGroup>
                {errors.atividade_fisica && (
                  <HelperText padding="none" type="error">
                    * Campo Obrigatório
                  </HelperText>
                )}
              </ContainerTitle>
              <RadioButtonItem
                label="Sedentário"
                value="sedentario"
                handlePress={() => setValue('atividade_fisica', 'sedentario')}
              />

              <RadioButtonItem
                label="Leve"
                value="leve"
                handlePress={() => setValue('atividade_fisica', 'leve')}
              />

              <RadioButtonItem
                label="Moderado"
                value="moderado"
                handlePress={() => setValue('atividade_fisica', 'moderado')}
              />

              <RadioButtonItem
                label="Ativo"
                value="ativo"
                handlePress={() => setValue('atividade_fisica', 'ativo')}
              />
            </ContainerRadioButton>
          </RadioButton.Group>
        }
        name="atividade_fisica"
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

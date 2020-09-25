import React, { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, RadioButton, HelperText } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import RadioButtonItem from '../../../components/RadioButton';
import ProgressBar from '../../../components/ProgressBar';
import userContext from '../../../contexts/User';

import * as S from './styles';

const Step2 = () => {
  const { handleSubmit, setValue, control, errors } = useForm();
  const navigation = useNavigation();
  const { user, dispatch } = useContext(userContext);

  function handleButtonNext(data) {
    dispatch({ type: 'STUDENT:ADD_PROPS', payload: data });
    navigation.navigate('step-3');
  }
  function handleButtonPrev() {
    navigation.goBack();
  }

  return (
    <S.Container>
      <ProgressBar progress={0.2} />
      <Controller
        render={({ onChange, value }) => (
          <RadioButton.Group onValueChange={(text) => onChange(text)}>
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
                status={value === 'Não sou bolsista' ? 'checked' : 'unchecked'}
                handlePress={() => setValue('bolsista', 'Não sou bolsista')}
              />
              <RadioButtonItem
                label="Bolsa Parcial"
                value="Bolsa parcial"
                status={value === 'Bolsa parcial' ? 'checked' : 'unchecked'}
                handlePress={() => setValue('bolsista', 'Bolsa parcial')}
              />
              <RadioButtonItem
                label="Bolsa Integral"
                value="Bolsa integral"
                status={value === 'Bolsa integral' ? 'checked' : 'unchecked'}
                handlePress={() => setValue('bolsista', 'Bolsa integral')}
              />
            </S.ContainerRadioButton>
          </RadioButton.Group>
        )}
        name="bolsista"
        control={control}
        rules={{ required: true }}
        defaultValue={user.bolsista}
      />
      <Controller
        render={({ onChange, value }) => (
          <RadioButton.Group onValueChange={(text) => onChange(text)}>
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
                status={value === 'Todos os dias' ? 'checked' : 'unchecked'}
                handlePress={() => setValue('frequencia_RU', 'Todos os dias')}
              />

              <RadioButtonItem
                label="Pelo menos 3 vezes na semana"
                value="Pelo menos 3 vezes na semana"
                status={
                  value === 'Pelo menos 3 vezes na semana'
                    ? 'checked'
                    : 'unchecked'
                }
                handlePress={() =>
                  setValue('frequencia_RU', 'Pelo menos 3 vezes na semana')
                }
              />

              <RadioButtonItem
                label="Pelo menos 1 vez na semana"
                value="Pelo menos 1 vez na semana"
                status={
                  value === 'Pelo menos 1 vez na semana'
                    ? 'checked'
                    : 'unchecked'
                }
                handlePress={() =>
                  setValue('frequencia_RU', 'Pelo menos 1 vez na semana')
                }
              />

              <RadioButtonItem
                label="Raramente"
                value="Raramente"
                status={value === 'Raramente' ? 'checked' : 'unchecked'}
                handlePress={() => setValue('frequencia_RU', 'Raramente')}
              />
            </S.ContainerRadioButton>
          </RadioButton.Group>
        )}
        name="frequencia_RU"
        control={control}
        rules={{ required: true }}
        defaultValue={user.frequencia_RU}
      />

      <Controller
        render={({ onChange, value }) => (
          <RadioButton.Group onValueChange={(text) => onChange(text)}>
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
                status={value === 'Almoço' ? 'checked' : 'unchecked'}
                handlePress={() => setValue('tipo_refeicao_RU', 'Almoço')}
              />

              <RadioButtonItem
                label="Jantar"
                value="Jantar"
                status={value === 'Jantar' ? 'checked' : 'unchecked'}
                handlePress={() => setValue('tipo_refeicao_RU', 'Jantar')}
              />

              <RadioButtonItem
                label="Almoço e Jantar"
                value="Almoço e Jantar"
                status={value === 'Almoço e Jantar' ? 'checked' : 'unchecked'}
                handlePress={() =>
                  setValue('tipo_refeicao_RU', 'Almoço e Jantar')
                }
              />
            </S.ContainerRadioButton>
          </RadioButton.Group>
        )}
        name="tipo_refeicao_RU"
        control={control}
        rules={{ required: true }}
        defaultValue={user.tipo_refeicao_RU}
      />

      <Controller
        render={({ onChange, value }) => (
          <RadioButton.Group onValueChange={(text) => onChange(text)}>
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
                status={value === 'Sedentário' ? 'checked' : 'unchecked'}
                handlePress={() => setValue('nivel_fisico', 'Sedentário')}
              />

              <RadioButtonItem
                label="Leve"
                value="Leve"
                status={value === 'Leve' ? 'checked' : 'unchecked'}
                handlePress={() => setValue('nivel_fisico', 'Leve')}
              />

              <RadioButtonItem
                label="Moderado"
                value="Moderado"
                status={value === 'Moderado' ? 'checked' : 'unchecked'}
                handlePress={() => setValue('nivel_fisico', 'Moderado')}
              />

              <RadioButtonItem
                label="Ativo"
                value="Ativo"
                status={value === 'Ativo' ? 'checked' : 'unchecked'}
                handlePress={() => setValue('nivel_fisico', 'Ativo')}
              />
            </S.ContainerRadioButton>
          </RadioButton.Group>
        )}
        name="nivel_fisico"
        control={control}
        rules={{ required: true }}
        defaultValue={user.nivel_fisico}
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

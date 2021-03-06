/* eslint-disable camelcase */
import React, { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, RadioButton, HelperText } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import userContext from '../../../contexts/User';
import RadioButtonItem from '../../../components/RadioButton';
import ProgressBar from '../../../components/ProgressBar';

import * as S from './styles';

const Step7 = () => {
  const { handleSubmit, setValue, control, errors } = useForm();
  const { user, dispatch } = useContext(userContext);
  const navigation = useNavigation();

  function handleButtonNext(data) {
    dispatch({ type: 'STUDENT:RU_RATING_PAGE_1', payload: data });
    navigation.navigate('step-8');
  }

  function handleButtonPrev() {
    navigation.goBack();
  }

  return (
    <S.Container>
      <ProgressBar progress={0.7} />
      <Controller
        render={({ onChange, value }) => (
          <RadioButton.Group onValueChange={(text) => onChange(text)}>
            <S.ContainerRadioButton>
              <S.ContainerTitle>
                <S.TitleRadioGroup error={errors?.avaliacao_RU?.aroma}>
                  Como você avalia a refeição servida no RU, quanto ao aroma das
                  preparações
                </S.TitleRadioGroup>
                {errors?.avaliacao_RU?.aroma && (
                  <HelperText padding="none" type="error">
                    * Campo Obrigatório
                  </HelperText>
                )}
              </S.ContainerTitle>

              <RadioButtonItem
                label="Muito ruim"
                value="Muito ruim"
                status={value === 'Muito ruim' ? 'checked' : 'unchecked'}
                handlePress={() => setValue('avaliacao_RU.aroma', 'Muito ruim')}
              />

              <RadioButtonItem
                label="Ruim"
                value="Ruim"
                status={value === 'Ruim' ? 'checked' : 'unchecked'}
                handlePress={() => setValue('avaliacao_RU.aroma', 'Ruim')}
              />

              <RadioButtonItem
                label="Regular"
                value="Regular"
                status={value === 'Regular' ? 'checked' : 'unchecked'}
                handlePress={() => setValue('avaliacao_RU.aroma', 'Regular')}
              />

              <RadioButtonItem
                label="Bom"
                value="Bom"
                status={value === 'Bom' ? 'checked' : 'unchecked'}
                handlePress={() => setValue('avaliacao_RU.aroma', 'Bom')}
              />

              <RadioButtonItem
                label="Muito bom"
                value="Muito bom"
                status={value === 'Muito bom' ? 'checked' : 'unchecked'}
                handlePress={() => setValue('avaliacao_RU.aroma', 'Muito bom')}
              />
            </S.ContainerRadioButton>
          </RadioButton.Group>
        )}
        name="avaliacao_RU.aroma"
        control={control}
        rules={{ required: true }}
        defaultValue={user.avaliacao_RU.aroma}
      />

      <Controller
        render={({ onChange, value }) => (
          <RadioButton.Group onValueChange={(text) => onChange(text)}>
            <S.ContainerRadioButton>
              <S.ContainerTitle>
                <S.TitleRadioGroup
                  error={errors?.avaliacao_RU?.coloracao_cardapio}
                >
                  Como você avalia a refeição servida no RU, quanto a coloração
                  do cardápio
                </S.TitleRadioGroup>
                {errors?.avaliacao_RU?.coloracao_cardapio && (
                  <HelperText padding="none" type="error">
                    * Campo Obrigatório
                  </HelperText>
                )}
              </S.ContainerTitle>
              <RadioButtonItem
                label="Muito ruim"
                value="Muito ruim"
                status={value === 'Muito ruim' ? 'checked' : 'unchecked'}
                handlePress={() =>
                  setValue('avaliacao_RU.coloracao_cardapio', 'Muito ruim')
                }
              />

              <RadioButtonItem
                label="Ruim"
                value="Ruim"
                status={value === 'Ruim' ? 'checked' : 'unchecked'}
                handlePress={() =>
                  setValue('avaliacao_RU.coloracao_cardapio', 'Ruim')
                }
              />

              <RadioButtonItem
                label="Regular"
                value="Regular"
                status={value === 'Regular' ? 'checked' : 'unchecked'}
                handlePress={() =>
                  setValue('avaliacao_RU.coloracao_cardapio', 'Regular')
                }
              />

              <RadioButtonItem
                label="Bom"
                value="Bom"
                status={value === 'Bom' ? 'checked' : 'unchecked'}
                handlePress={() =>
                  setValue('avaliacao_RU.coloracao_cardapio', 'Bom')
                }
              />

              <RadioButtonItem
                label="Muito bom"
                value="Muito bom"
                status={value === 'Muito bom' ? 'checked' : 'unchecked'}
                handlePress={() =>
                  setValue('avaliacao_RU.coloracao_cardapio', 'Muito bom')
                }
              />
            </S.ContainerRadioButton>
          </RadioButton.Group>
        )}
        name="avaliacao_RU.coloracao_cardapio"
        control={control}
        rules={{ required: true }}
        defaultValue={user.avaliacao_RU.coloracao_cardapio}
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

export default Step7;

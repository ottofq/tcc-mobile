import React, { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, RadioButton, HelperText } from 'react-native-paper';
import { KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import userContext from '../../../contexts/User';
import RadioButtonItem from '../../../components/RadioButton';
import CheckBoxItem from '../../../components/Checkbox';
import ProgressBar from '../../../components/ProgressBar';

import * as S from './styles';

const Step3 = () => {
  const { watch, handleSubmit, setValue, control, errors } = useForm();
  const { user, dispatch } = useContext(userContext);

  const navigation = useNavigation();

  function handleButtonNext(data) {
    dispatch({ type: 'STUDENT:ADD_PROPS', payload: data });
    navigation.navigate('step-4');
  }

  const handleCheckboxStatus = (value) => {
    if (watch('alergias.nao_tenho_alergias')) return 'indeterminate';

    if (value) return 'checked';

    return 'unchecked';
  };

  function handleButtonPrev() {
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <S.Container>
        <ProgressBar progress={0.3} />
        <Controller
          render={({ onChange, value }) => (
            <RadioButton.Group onValueChange={(text) => onChange(text)}>
              <S.ContainerRadioButton>
                <S.ContainerTitle>
                  <S.TitleRadioGroup error={errors.peso_ideal}>
                    Você se considera dentro do peso ideal para a sua idade e
                    sexo?{' '}
                    {errors.peso_ideal && (
                      <HelperText padding="none" type="error">
                        * Campo Obrigatório
                      </HelperText>
                    )}
                  </S.TitleRadioGroup>
                </S.ContainerTitle>

                <RadioButtonItem
                  label="Sim"
                  value="sim"
                  status={value === 'sim' ? 'checked' : 'unchecked'}
                  handlePress={() => setValue('peso_ideal', 'sim')}
                />

                <RadioButtonItem
                  label="Não"
                  value="nao"
                  status={value === 'nao' ? 'checked' : 'unchecked'}
                  handlePress={() => setValue('peso_ideal', 'nao')}
                />
              </S.ContainerRadioButton>
            </RadioButton.Group>
          )}
          name="peso_ideal"
          control={control}
          rules={{ required: true }}
          defaultValue={user.peso_ideal}
        />

        <Controller
          render={({ onChange, value }) => (
            <RadioButton.Group onValueChange={(text) => onChange(text)}>
              <S.ContainerRadioButton>
                <S.ContainerTitle>
                  <S.TitleRadioGroup error={errors.vegano_vegetariano}>
                    Você é vegetariano ou vegano?
                  </S.TitleRadioGroup>
                  {errors.vegano_vegetariano && (
                    <HelperText padding="none" type="error">
                      * Campo Obrigatório
                    </HelperText>
                  )}
                </S.ContainerTitle>

                <RadioButtonItem
                  label="Não sou vegano ou vegetariano"
                  value="Não sou vegano/vegetariano"
                  status={
                    value === 'Não sou vegano/vegetariano'
                      ? 'checked'
                      : 'unchecked'
                  }
                  handlePress={() =>
                    setValue('vegano_vegetariano', 'Não sou vegano/vegetariano')
                  }
                />

                <RadioButtonItem
                  label="Ovolactovegetariano"
                  value="ovolactovegetariano"
                  status={
                    value === 'ovolactovegetariano' ? 'checked' : 'unchecked'
                  }
                  handlePress={() =>
                    setValue('vegano_vegetariano', 'ovolactovegetariano')
                  }
                />

                <RadioButtonItem
                  label="Vegetariano restrito – alimentação"
                  value="Vegetariano restrito – alimentação"
                  status={
                    value === 'Vegetariano restrito – alimentação'
                      ? 'checked'
                      : 'unchecked'
                  }
                  handlePress={() =>
                    setValue(
                      'vegano_vegetariano',
                      'Vegetariano restrito – alimentação'
                    )
                  }
                />

                <RadioButtonItem
                  label="Vegano"
                  value="Vegano"
                  status={value === 'Vegano' ? 'checked' : 'unchecked'}
                  handlePress={() => setValue('vegano_vegetariano', 'Vegano')}
                />
              </S.ContainerRadioButton>
            </RadioButton.Group>
          )}
          name="vegano_vegetariano"
          control={control}
          rules={{ required: true }}
          defaultValue={user.vegano_vegetariano}
        />

        <S.TitleRadioGroup>
          Você possui algum tipo de alergia ou intolerância alimentar?
        </S.TitleRadioGroup>

        <Controller
          render={({ value }) => (
            <CheckBoxItem
              label="Alergia ao glúten"
              status={handleCheckboxStatus(value)}
              onPress={() => setValue('alergias.alergia_gluten', !value)}
            />
          )}
          name="alergias.alergia_gluten"
          control={control}
          defaultValue={user.alergias.alergia_gluten}
        />

        <Controller
          render={({ value }) => (
            <CheckBoxItem
              label="Intolerância a lactose"
              status={handleCheckboxStatus(value)}
              onPress={() => setValue('alergias.intolerancia_lactose', !value)}
            />
          )}
          name="alergias.intolerancia_lactose"
          control={control}
          defaultValue={user.alergias.intolerancia_lactose}
        />

        <Controller
          render={({ value }) => (
            <CheckBoxItem
              label="Alergia à proteína do leite de vaca"
              status={handleCheckboxStatus(value)}
              onPress={() => setValue('alergias.proteina_leite_vaca', !value)}
            />
          )}
          name="alergias.proteina_leite_vaca"
          control={control}
          defaultValue={user.alergias.proteina_leite_vaca}
        />

        <Controller
          render={({ value }) => (
            <CheckBoxItem
              label="Não possuo alergias"
              status={value ? 'checked' : 'unchecked'}
              onPress={() => {
                setValue('alergias.nao_tenho_alergias', !value);
                setValue('alergias.alergia_gluten', false);
                setValue('alergias.intolerancia_lactose', false);
                setValue('alergias.proteina_leite_vaca', false);
                setValue('alergias.outras_alergias', '');
              }}
            />
          )}
          name="alergias.nao_tenho_alergias"
          control={control}
          defaultValue={false}
        />

        <Controller
          render={({ onChange, value }) => (
            <S.Input
              disabled={watch('alergias.nao_tenho_alergias')}
              label="Outro"
              mode="outlined"
              value={value}
              onChangeText={(text) => onChange(text)}
            />
          )}
          name="alergias.outras_alergias"
          control={control}
          defaultValue={'' || user.alergias.outras_alergias}
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
    </KeyboardAvoidingView>
  );
};

export default Step3;

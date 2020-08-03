import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from 'react-native-paper';
import { useRoute, useNavigation } from '@react-navigation/native';

import CheckBoxItem from '../../../components/Checkbox';
import ProgressBar from '../../../components/ProgressBar';

import * as S from './styles';

const Step5 = () => {
  const { handleSubmit, setValue, watch, control } = useForm();

  const navigation = useNavigation();
  const { params } = useRoute();

  function handleButtonNext(data) {
    const obj = { ...params, ...data };
    navigation.navigate('step-6', {
      ...obj,
    });
  }

  const handleCheckboxStatus = (value) => {
    if (watch('patologias.nao_tenho_patologias')) return 'indeterminate';

    if (value) return 'checked';

    return 'unchecked';
  };

  function handleButtonPrev() {
    navigation.goBack();
  }

  return (
    <S.Container>
      <ProgressBar progress={0.5} />
      <S.ContainerCheckbox>
        <S.TitleCheckboxGroup>
          Você apresenta ou já apresentou alguma das patologias abaixo? Se sim,
          quais?
        </S.TitleCheckboxGroup>
        <Controller
          render={({ value }) => (
            <CheckBoxItem
              label="Doença cardiovascular"
              status={handleCheckboxStatus(value)}
              onPress={() =>
                setValue('patologias.doenca_cardiovascular', !value)
              }
            />
          )}
          name="patologias.doenca_cardiovascular"
          control={control}
          defaultValue={false}
        />

        <Controller
          render={({ value }) => (
            <CheckBoxItem
              label="Hipertensão arterial"
              status={handleCheckboxStatus(value)}
              onPress={() => setValue('patologias.hipertensao', !value)}
            />
          )}
          name="patologias.hipertensao"
          control={control}
          defaultValue={false}
        />

        <Controller
          render={({ value }) => (
            <CheckBoxItem
              label="Obesidade"
              status={handleCheckboxStatus(value)}
              onPress={() => setValue('patologias.obesidade', !value)}
            />
          )}
          name="patologias.obesidade"
          control={control}
          defaultValue={false}
        />

        <Controller
          render={({ value }) => (
            <CheckBoxItem
              label="Dislipidemias"
              status={handleCheckboxStatus(value)}
              onPress={() => setValue('patologias.dislipidemias', !value)}
            />
          )}
          name="patologias.dislipidemias"
          control={control}
          defaultValue={false}
        />

        <Controller
          render={({ value }) => (
            <CheckBoxItem
              label="Diabetes"
              status={handleCheckboxStatus(value)}
              onPress={() => setValue('patologias.diabetes', !value)}
            />
          )}
          name="patologias.diabetes"
          control={control}
          defaultValue={false}
        />

        <Controller
          render={({ value }) => (
            <CheckBoxItem
              label="Doença Arterial Coronariana"
              status={handleCheckboxStatus(value)}
              onPress={() =>
                setValue('patologias.doenca_arterial_coronariana', !value)
              }
            />
          )}
          name="patologias.doenca_arterial_coronariana"
          control={control}
          defaultValue={false}
        />

        <Controller
          render={({ value }) => (
            <CheckBoxItem
              label="Não possuo patologias"
              status={value ? 'checked' : 'unchecked'}
              onPress={() => {
                setValue('patologias.nao_tenho_patologias', !value);
                setValue('patologias.doenca_cardiovascular', false);
                setValue('patologias.hipertensao', false);
                setValue('patologias.obesidade', false);
                setValue('patologias.dislipidemias', false);
                setValue('patologias.diabetes', false);
                setValue('patologias.doenca_arterial_coronariana', false);
                setValue('patologias.outras_patologias', '');
              }}
            />
          )}
          name="patologias.nao_tenho_patologias"
          control={control}
          defaultValue={false}
        />

        <Controller
          render={({ onChange, value }) => (
            <S.Input
              disabled={watch('patologias.nao_tenho_patologias')}
              label="Outro"
              mode="outlined"
              value={value}
              onChangeText={(text) => onChange(text)}
            />
          )}
          name="patologias.outras_patologias"
          control={control}
          defaultValue=""
        />
      </S.ContainerCheckbox>

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

export default Step5;

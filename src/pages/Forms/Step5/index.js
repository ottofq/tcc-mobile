import React, { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import userContext from '../../../contexts/User';
import CheckBoxItem from '../../../components/Checkbox';
import ProgressBar from '../../../components/ProgressBar';

import * as S from './styles';

const Step5 = () => {
  const { handleSubmit, setValue, control } = useForm();
  const navigation = useNavigation();
  const { user, dispatch } = useContext(userContext);

  function handleButtonNext(data) {
    dispatch({ type: 'STUDENT:ADD_PROPS', payload: data });
    navigation.navigate('step-6');
  }

  const handleCheckboxStatus = (value) => {
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
          defaultValue={user.patologias.hipertensao_arterial}
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
          defaultValue={user.patologias.obesidade}
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
          defaultValue={user.patologias.dislipidemias}
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
          defaultValue={user.patologias.diabetes}
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
          defaultValue={user.patologias.doenca_arterial_coronariana}
        />

        <Controller
          render={({ onChange, value }) => (
            <S.Input
              label="Outro"
              mode="outlined"
              value={value}
              onChangeText={(text) => onChange(text)}
            />
          )}
          name="patologias.outras_patologias"
          control={control}
          defaultValue={'' || user.patologias.outras_patologias}
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

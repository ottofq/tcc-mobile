import React, { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from 'react-native-paper';
import { KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import userContext from '../../../contexts/User';
import CheckBoxItem from '../../../components/Checkbox';
import ProgressBar from '../../../components/ProgressBar';

import * as S from './styles';

const Step6 = () => {
  const { handleSubmit, setValue, control } = useForm();
  const { user, dispatch } = useContext(userContext);

  const navigation = useNavigation();

  function handleButtonNext(data) {
    dispatch({ type: 'STUDENT:ADD_PROPS', payload: data });
    navigation.navigate('step-7');
  }

  const handleCheckboxStatus = (value) => {
    if (value) return 'checked';

    return 'unchecked';
  };

  function handleButtonPrev() {
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <S.Container>
        <S.ContainerCheckbox>
          <ProgressBar progress={0.6} />
          <S.TitleCheckboxGroup>
            Há histórico de presença, de alguma das patologias abaixo, na sua
            família? Se sim, quais?
          </S.TitleCheckboxGroup>

          <Controller
            render={({ value }) => (
              <CheckBoxItem
                label="Doença cardiovascular"
                status={handleCheckboxStatus(value)}
                onPress={() =>
                  setValue(
                    'patologias_familia.fam_doenca_cardiovascular',
                    !value
                  )
                }
              />
            )}
            name="patologias_familia.fam_doenca_cardiovascular"
            control={control}
            defaultValue={user.patologias_familia.fam_doenca_cardiovascular}
          />

          <Controller
            render={({ value }) => (
              <CheckBoxItem
                label="Hipertensão arterial"
                status={handleCheckboxStatus(value)}
                onPress={() =>
                  setValue('patologias_familia.fam_hipertensao', !value)
                }
              />
            )}
            name="patologias_familia.fam_hipertensao"
            control={control}
            defaultValue={user.patologias_familia.fam_hipertensao}
          />

          <Controller
            render={({ value }) => (
              <CheckBoxItem
                label="Obesidade"
                status={handleCheckboxStatus(value)}
                onPress={() =>
                  setValue('patologias_familia.fam_obesidade', !value)
                }
              />
            )}
            name="patologias_familia.fam_obesidade"
            control={control}
            defaultValue={user.patologias_familia.fam_obesidade}
          />

          <Controller
            render={({ value }) => (
              <CheckBoxItem
                label="Dislipidemias"
                status={handleCheckboxStatus(value)}
                onPress={() =>
                  setValue('patologias_familia.fam_dislipidemias', !value)
                }
              />
            )}
            name="patologias_familia.fam_dislipidemias"
            control={control}
            defaultValue={user.patologias_familia.fam_dislipidemias}
          />

          <Controller
            render={({ value }) => (
              <CheckBoxItem
                label="Diabetes"
                status={handleCheckboxStatus(value)}
                onPress={() =>
                  setValue('patologias_familia.fam_diabetes', !value)
                }
              />
            )}
            name="patologias_familia.fam_diabetes"
            control={control}
            defaultValue={user.patologias_familia.fam_diabetes}
          />

          <Controller
            render={({ value }) => (
              <CheckBoxItem
                label="Doença Arterial Coronariana"
                status={handleCheckboxStatus(value)}
                onPress={() =>
                  setValue(
                    'patologias_familia.fam_doenca_arterial_coronariana',
                    !value
                  )
                }
              />
            )}
            name="patologias_familia.fam_doenca_arterial_coronariana"
            control={control}
            defaultValue={
              user.patologias_familia.fam_doenca_arterial_coronariana
            }
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
            name="patologias_familia.patologias_familia_outras"
            control={control}
            defaultValue={
              '' || user.patologias_familia.patologias_familia_outras
            }
          />

          <S.TitleInput>
            Faz uso contínuo de algum medicamento? Se sim qual?
          </S.TitleInput>

          <Controller
            render={({ onChange, value }) => (
              <S.Input
                label="Medicamentos"
                mode="outlined"
                value={value}
                onChangeText={(text) => onChange(text)}
              />
            )}
            name="medicamento_continuo"
            control={control}
            defaultValue={'' || user.medicamento_continuo}
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
    </KeyboardAvoidingView>
  );
};

export default Step6;

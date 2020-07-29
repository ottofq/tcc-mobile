import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, RadioButton, HelperText } from 'react-native-paper';
import { KeyboardAvoidingView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import RadioButtonItem from '../../../components/RadioButton';
import CheckBoxItem from '../../../components/Checkbox';
import ProgressBar from '../../../components/ProgressBar';

import * as S from './styles';

const Step3 = () => {
  const { register, handleSubmit, setValue, control, errors } = useForm();
  const [gluten, setGluten] = useState(false);
  const [lactose, setLactose] = useState(false);
  const [proteinaLeite, setProteinaLeite] = useState(false);
  const [alergia, setAlergia] = useState(false);
  const navigation = useNavigation();
  const { params } = useRoute();

  useEffect(() => {
    setValue('alergias.nenhuma', true);
    setValue('alergias.alergia_gluten', false);
    setValue('alergias.intolerancia_lactose', false);
    setValue('alergias.proteina_leite_vaca', false);
    setValue('alergias.outras_alergias', false);
  }, [setValue]);

  function handleButtonNext(data) {
    const obj = { ...params, ...data };
    navigation.navigate('step-4', {
      ...obj,
    });
  }
  function handlerCheckbox(field, state, setState) {
    if (!alergia) {
      setState(!state);
      setValue(field, !state);
    }
  }

  function handlerCheckboxAlergia() {
    setAlergia(!alergia);
    setValue('alergias.nenhuma', false);
    setValue('alergias.alergia_gluten', false);
    setValue('alergias.intolerancia_lactose', false);
    setValue('alergias.proteina_leite_vaca', false);
    setValue('alergias.outras_alergias', false);
  }

  function handleButtonPrev() {
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <S.Container>
        <ProgressBar progress={0.3} />
        <Controller
          as={
            <RadioButton.Group
              onValueChange={(value) => setValue('peso_ideal', value)}
            >
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
                  handlePress={() => setValue('peso_ideal', 'sim')}
                />

                <RadioButtonItem
                  label="Não"
                  value="nao"
                  handlePress={() => setValue('peso_ideal', 'nao')}
                />
              </S.ContainerRadioButton>
            </RadioButton.Group>
          }
          name="peso_ideal"
          control={control}
          rules={{ required: true }}
          defaultValue=""
        />

        <Controller
          as={
            <RadioButton.Group
              onValueChange={(value) => setValue('vegano_vegetariano', value)}
            >
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
                  handlePress={() =>
                    setValue('vegano_vegetariano', 'Não sou vegano/vegetariano')
                  }
                />

                <RadioButtonItem
                  label="Ovolactovegetariano"
                  value="ovolactovegetariano"
                  handlePress={() =>
                    setValue('vegano_vegetariano', 'ovolactovegetariano')
                  }
                />

                <RadioButtonItem
                  label="Vegetariano restrito – alimentação"
                  value="Vegetariano restrito – alimentação"
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
                  handlePress={() => setValue('vegano_vegetariano', 'Vegano')}
                />
              </S.ContainerRadioButton>
            </RadioButton.Group>
          }
          name="vegano_vegetariano"
          control={control}
          rules={{ required: true }}
          defaultValue=""
        />

        <S.TitleRadioGroup>
          Você possui algum tipo de alergia ou intolerância alimentar?
        </S.TitleRadioGroup>

        <CheckBoxItem
          label="Alergia ao Gluten"
          status={
            alergia
              ? 'indeterminate'
              : 'unchecked' && gluten
              ? 'checked'
              : 'unchecked'
          }
          ref={register('alergias.alergia_gluten')}
          onPress={() =>
            handlerCheckbox('alergias.alergia_gluten', gluten, setGluten)
          }
        />

        <CheckBoxItem
          label="Intolerância a lactose"
          status={
            alergia
              ? 'indeterminate'
              : 'unchecked' && lactose
              ? 'checked'
              : 'unchecked'
          }
          ref={register('alergias.intolerancia_lactose')}
          onPress={() =>
            handlerCheckbox(
              'alergias.intolerancia_lactose',
              lactose,
              setLactose
            )
          }
        />

        <CheckBoxItem
          label="Alergia à proteína do leite de vaca"
          status={
            alergia
              ? 'indeterminate'
              : 'unchecked' && proteinaLeite
              ? 'checked'
              : 'unchecked'
          }
          ref={register('alergias.proteina_leite_vaca')}
          onPress={() =>
            handlerCheckbox(
              'alergias.proteina_leite_vaca',
              proteinaLeite,
              setProteinaLeite
            )
          }
        />

        <CheckBoxItem
          label="Não possuo alergias"
          status={
            gluten || lactose || proteinaLeite
              ? 'indeterminate'
              : 'unchecked' && alergia
              ? 'checked'
              : 'unchecked'
          }
          ref={register('alergias.nenhuma')}
          onPress={() => handlerCheckboxAlergia()}
        />

        <S.Input
          disabled={alergia}
          label="Outro"
          mode="outlined"
          ref={register('alergias.outras_alergias')}
          onChangeText={(text) => setValue('alergias.outras_alergias', text)}
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

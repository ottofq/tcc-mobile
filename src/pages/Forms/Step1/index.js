import React, { useState } from 'react';
import { Button, RadioButton, HelperText } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import { useForm, Controller } from 'react-hook-form';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation } from '@react-navigation/native';
import RadioButtonItem from '../../../components/RadioButton';
import ProgressBar from '../../../components/ProgressBar';
import { dateItems, courseItems } from './selectItem';

import * as S from './styles';

const Step1 = () => {
  const { register, handleSubmit, setValue, errors, control } = useForm();

  const [course, setCourse] = useState();
  const [year, setYear] = useState(0);
  const navigation = useNavigation();

  const regexDate = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

  function formatDate(dateValue) {
    const date = new Date(dateValue);
    return date.toISOString();
  }

  function onSubmit(data) {
    console.log(formatDate(data.data_nascimento));
    navigation.navigate('step-2', {
      ...data,
    });
  }

  function handleSelect(field, value, setState) {
    setValue(field, value);
    setState(value);
  }

  return (
    <S.Container>
      <S.ContainerInput>
        <ProgressBar progress={0.1} />
        <S.ContainerInputItem>
          {errors.nome && (
            <HelperText padding="none" type="error">
              Campo Nome é Obrigatório
            </HelperText>
          )}
          <S.Input
            label="Nome"
            mode="outlined"
            error={errors.nome}
            ref={register('nome', { required: true })}
            onChangeText={(text) => setValue('nome', text)}
          />
        </S.ContainerInputItem>

        <S.ContainerInputItem>
          {errors.matricula && errors.matricula.type === 'required' ? (
            <HelperText padding="none" type="error">
              Campo Matrícula é Obrigatório
            </HelperText>
          ) : null}
          <S.Input
            label="Matrícula"
            mode="outlined"
            keyboardType="numeric"
            error={errors.matricula}
            render={(props) => (
              <TextInputMask
                {...props}
                type="custom"
                options={{
                  mask: '9999999999',
                }}
              />
            )}
            ref={register('matricula', {
              required: true,
              pattern: /\d{10}/,
            })}
            onChangeText={(text) => setValue('matricula', text)}
          />
        </S.ContainerInputItem>

        <S.ContainerInputItem>
          {errors.data_nascimento &&
          errors.data_nascimento.type === 'required' ? (
            <HelperText padding="none" type="error">
              Campo Data de Nascimento é Obrigatório
            </HelperText>
          ) : null}
          {errors.data_nascimento &&
          errors.data_nascimento.type === 'pattern' ? (
            <HelperText padding="none" type="error">
              Data de Nascimento Inválida
            </HelperText>
          ) : null}
          <S.Input
            label="Data de Nascimento"
            mode="outlined"
            keyboardType="numeric"
            error={errors.data_nascimento}
            render={(props) => (
              <TextInputMask
                {...props}
                type="datetime"
                options={{
                  format: 'DD/MM/YYYY',
                }}
              />
            )}
            ref={register('data_nascimento', {
              required: true,
              pattern: regexDate,
            })}
            onChangeText={(text) => setValue('data_nascimento', text)}
          />
        </S.ContainerInputItem>

        <S.ContainerInputItem>
          {errors.curso && (
            <HelperText padding="none" type="error">
              Campo Curso é Obrigatório
            </HelperText>
          )}

          <S.Input
            label="Curso"
            mode="outlined"
            value={course}
            error={errors.curso}
            render={() => (
              <RNPickerSelect
                useNativeAndroidPickerStyle={false}
                placeholder={{
                  label: 'Selecione seu curso',
                  value: null,
                  color: '#fff',
                }}
                ref={register('curso', {
                  required: true,
                })}
                onValueChange={(value) =>
                  handleSelect('curso', value, setCourse)
                }
                style={S.pickerSelectStyles}
                items={courseItems}
              />
            )}
          />
        </S.ContainerInputItem>

        <S.ContainerInputItem>
          {errors.ano_ingresso ? (
            <HelperText padding="none" type="error">
              Campo Ano de Ingresso é Obrigatório
            </HelperText>
          ) : null}

          <S.Input
            label="Ano de Ingresso"
            mode="outlined"
            value={year}
            error={errors.ano_ingresso}
            ref={register('ano_ingresso', {
              required: true,
            })}
            render={() => (
              <RNPickerSelect
                useNativeAndroidPickerStyle={false}
                placeholder={{
                  label: 'Selecione o ano de ingresso',
                  value: null,
                  color: '#fff',
                }}
                onValueChange={(value) =>
                  handleSelect('ano_ingresso', value, setYear)
                }
                style={S.pickerSelectStyles}
                items={dateItems}
              />
            )}
          />
        </S.ContainerInputItem>

        <Controller
          as={
            <RadioButton.Group
              onValueChange={(value) => setValue('sexo', value)}
            >
              <S.ContainerRadioButton>
                <S.ContainerTitle>
                  <S.TitleRadioGroup error={errors.sexo}>
                    Sexo:{' '}
                  </S.TitleRadioGroup>
                  {errors.sexo && (
                    <HelperText padding="none" type="error">
                      * Campo Obrigatório
                    </HelperText>
                  )}
                </S.ContainerTitle>
                <RadioButtonItem
                  label="Masculino"
                  value="masculino"
                  handlePress={() => setValue('sexo', 'masculino')}
                />

                <RadioButtonItem
                  label="Feminino"
                  value="feminino"
                  handlePress={() => setValue('sexo', 'feminino')}
                />
              </S.ContainerRadioButton>
            </RadioButton.Group>
          }
          name="sexo"
          control={control}
          rules={{ required: true }}
          defaultValue=""
        />
      </S.ContainerInput>
      <Button
        style={{ marginBottom: 5 }}
        mode="contained"
        onPress={handleSubmit(onSubmit)}
      >
        Próximo
      </Button>
    </S.Container>
  );
};

export default Step1;

import React, { useState } from 'react';
import { Button, RadioButton, HelperText } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import { useForm, Controller } from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation } from '@react-navigation/native';

import RadioButtonItem from '../../../components/RadioButton';
import ProgressBar from '../../../components/ProgressBar';
import { dateItems, courseItems } from './selectItem';

import * as S from './styles';

const Step1 = () => {
  const { register, handleSubmit, setValue, errors, control } = useForm();

  const [show, setShow] = useState(false);
  const [date, setDate] = useState();
  const [course, setCourse] = useState();
  const [year, setYear] = useState(0);
  const navigation = useNavigation();

  function formatDate(dateValue) {
    return format(dateValue, 'dd/MM/yyyy', {
      locale: ptBR,
    });
  }

  function onSubmit(data) {
    navigation.navigate('step-2', {
      ...data,
    });
  }
  const handleSelectDate = (event, selectedDate) => {
    setShow(false);

    if (selectedDate !== undefined) {
      setValue('data_nascimento', selectedDate);
      setDate(selectedDate);
    }
  };

  const showDatepicker = () => {
    setShow(true);
  };

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
          {errors.data_nascimento && (
            <HelperText padding="none" type="error">
              Campo Data de Nascimento é Obrigatório
            </HelperText>
          )}
          <S.Input
            label="Data de Nascimento"
            mode="outlined"
            value={date}
            error={errors.data_nascimento}
            ref={register('data_nascimento', {
              required: true,
            })}
            render={() => (
              <S.DateInput
                error={errors.data_nascimento1}
                onPress={showDatepicker}
              >
                <S.PlaceholderDate error={errors.data_nascimento}>
                  {date === undefined ? '' : formatDate(date)}
                </S.PlaceholderDate>
                {show && (
                  <DateTimePicker
                    maximumDate={new Date(2004, 11, 31)}
                    minimumDate={new Date(1950, 0, 1)}
                    value={new Date(2004, 11, 31)}
                    mode="date"
                    display="calendar"
                    onChange={handleSelectDate}
                  />
                )}
              </S.DateInput>
            )}
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

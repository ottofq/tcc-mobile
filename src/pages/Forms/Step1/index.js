import React, {useState} from 'react';
import {Button, RadioButton, HelperText} from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import {useForm, Controller} from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';
import {format} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import {View, Text} from 'react-native';

import RadioButtonItem from '../../../components/RadioButton';

import {
  Container,
  ContainerProgress,
  Progress,
  ContainerInputItem,
  ContainerInput,
  ContainerRadioButton,
  ContainerTitle,
  Input,
  DateInput,
  PlaceholderDate,
  TitleRadioGroup,
  pickerSelectStyles,
} from './styles';
export default function Step1({navigation}) {
  const {register, handleSubmit, setValue, errors, control} = useForm();

  const [show, setShow] = useState(false);
  const [date, setDate] = useState();
  const [course, setCourse] = useState();
  const [year, setYear] = useState(0);

  function formatDate(dateValue) {
    return format(dateValue, 'dd/MM/yyyy', {
      locale: ptBR,
    });
  }

  function onSubmit(data) {
    //data.data_nascimento = formatDate(data.data_nascimento);
    console.log(data);
    navigation.navigate('Questionário passo 2', {
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

  const dateItems = [
    {label: '2010', value: '2010'},
    {label: '2011', value: '2011'},
    {label: '2012', value: '2012'},
    {label: '2013', value: '2013'},
    {label: '2014', value: '2014'},
    {label: '2015', value: '2015'},
    {label: '2016', value: '2016'},
    {label: '2017', value: '2017'},
    {label: '2018', value: '2018'},
    {label: '2019', value: '2019'},
    {label: '2020', value: '2020'},
  ];

  const courseItems = [
    {label: 'Agronomia', value: 'Agronomia'},
    {
      label: 'Ciências Biológicas - Bacharelado',
      value: 'Ciências Biológicas - Bacharelado',
    },
    {
      label: 'Ciências Biológicas - Licenciatura',
      value: 'Ciências Biológicas - Licenciatura',
    },
    {label: 'Ciências da Computação', value: 'Ciências da Computação'},
    {label: 'Engenharia de Alimentos', value: 'Engenharia de Alimentos'},
    {label: 'Engenharia Florestal', value: 'Engenharia Florestal'},
    {
      label: 'Engenharia Industrial Madeireira',
      value: 'Engenharia Industrial Madeireira',
    },
    {label: 'Engenharia Química', value: 'Engenharia Química'},
    {label: 'Farmácia', value: 'Farmácia'},
    {label: 'Física - Licenciatura', value: 'Física - Licenciatura'},
    {label: 'Geologia', value: 'Geologia'},
    {label: 'Matemática - Licenciatura', value: 'Matemática - Licenciatura'},
    {label: 'Medicina Veterinária', value: 'Medicina Veterinária'},
    {label: 'Nutrição', value: 'Nutrição'},
    {label: 'Química – Licenciatura', value: 'Química – Licenciatura'},
    {label: 'Sistema de Informação', value: 'Sistema de Informação'},
    {label: 'Zootecnia', value: 'Zootecnia'},
  ];

  return (
    <Container>
      <ContainerInput>
        <Progress progress={0.1} />
        <ContainerInputItem>
          {errors.nome && (
            <HelperText padding="none" type="error">
              Campo Nome é Obrigatório
            </HelperText>
          )}
          <Input
            label="Nome"
            mode="outlined"
            error={errors.nome}
            ref={register('nome', {required: true})}
            onChangeText={text => setValue('nome', text)}
          />
        </ContainerInputItem>

        <ContainerInputItem>
          {errors.matricula && errors.matricula.type === 'required' ? (
            <HelperText padding="none" type="error">
              Campo Matrícula é Obrigatório
            </HelperText>
          ) : errors.matricula && errors.matricula.type === 'pattern' ? (
            <HelperText padding="none" type="error">
              Matrícula inválida. Digite os 10 números de sua matrícula
            </HelperText>
          ) : null}
          <Input
            label="Matrícula"
            mode="outlined"
            keyboardType="numeric"
            error={errors.matricula}
            ref={register('matricula', {
              required: true,
              pattern: /\d{10}/,
            })}
            onChangeText={text => setValue('matricula', text)}
          />
        </ContainerInputItem>

        <ContainerInputItem>
          {errors.data_nascimento && (
            <HelperText padding="none" type="error">
              Campo Data de Nascimento é Obrigatório
            </HelperText>
          )}
          <Input
            label="Data de Nascimento"
            mode="outlined"
            value={date}
            error={errors.data_nascimento}
            ref={register('data_nascimento', {
              required: true,
            })}
            render={() => (
              <DateInput
                error={errors.data_nascimento1}
                onPress={showDatepicker}>
                <PlaceholderDate error={errors.data_nascimento}>
                  {date === undefined ? '' : formatDate(date)}
                </PlaceholderDate>
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
              </DateInput>
            )}
          />
        </ContainerInputItem>

        {/* <ContainerInputItem>
          {errors.data_nascimento && (
            <HelperText padding="none" type="error">
              Campo Data de Nascimento é Obrigatório
            </HelperText>
          )}
          <Controller
            as={
              <DateInput
                error={errors.data_nascimento}
                onPress={showDatepicker}>
                <PlaceholderDate error={errors.data_nascimento}>
                  {date === undefined ? 'Data de Nascimento' : formatDate(date)}
                </PlaceholderDate>
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
              </DateInput>
            }
            name="data_nascimento"
            control={control}
            rules={{required: true}}
            defaultValue=""
          />
        </ContainerInputItem> */}

        <ContainerInputItem>
          {errors.curso && (
            <HelperText padding="none" type="error">
              Campo Curso é Obrigatório
            </HelperText>
          )}

          <Input
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
                onValueChange={value => handleSelect('curso', value, setCourse)}
                style={pickerSelectStyles}
                items={courseItems}
              />
            )}
          />

          {/* <PickerInput error={errors.curso}>
            <RNPickerSelect
              useNativeAndroidPickerStyle={false}
              error={errors.curso}
              placeholder={{
                label: 'Curso',
                value: null,
                color: '#7a7a7a',
              }}
              onValueChange={value => setValue('curso', value)}
              ref={register('curso', {
                required: true,
              })}
              style={
                errors.curso
                  ? {
                      inputAndroid: {
                        color: '#B00020',
                      },
                      placeholder: {
                        color: '#B00020',
                      },
                    }
                  : {
                      inputAndroid: {
                        color: '#7a7a7a',
                      },
                      placeholder: {
                        color: '#7a7a7a',
                      },
                    }
              }
              items={courseItems}
            />
          </PickerInput> */}
        </ContainerInputItem>

        <ContainerInputItem>
          {errors.ano_ingresso ? (
            <HelperText padding="none" type="error">
              Campo Ano de Ingresso é Obrigatório
            </HelperText>
          ) : null}

          <Input
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
                onValueChange={value =>
                  handleSelect('ano_ingresso', value, setYear)
                }
                style={pickerSelectStyles}
                items={dateItems}
              />
            )}
          />

          {/* <PickerInput error={errors.ano_ingresso}>
            <RNPickerSelect
              useNativeAndroidPickerStyle={false}
              error={errors.ano_ingresso}
              placeholder={{
                label: 'Ano de Ingresso',
                value: null,
                color: '#7a7a7a',
              }}
              onValueChange={value => setValue('ano_ingresso', value)}
              ref={register('ano_ingresso', {
                required: true,
              })}
              style={
                errors.ano_ingresso
                  ? {
                      inputAndroid: {
                        color: '#B00020',
                      },
                      placeholder: {
                        color: '#B00020',
                      },
                    }
                  : {
                      inputAndroid: {
                        color: '#7a7a7a',
                      },
                      placeholder: {
                        color: '#7a7a7a',
                      },
                    }
              }
              items={dateItems}
            />
          </PickerInput> */}
        </ContainerInputItem>

        <Controller
          as={
            <RadioButton.Group onValueChange={value => setValue('sexo', value)}>
              <ContainerRadioButton>
                <ContainerTitle>
                  <TitleRadioGroup error={errors.sexo}>Sexo: </TitleRadioGroup>
                  {errors.sexo && (
                    <HelperText padding="none" type="error">
                      * Campo Obrigatório
                    </HelperText>
                  )}
                </ContainerTitle>
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
              </ContainerRadioButton>
            </RadioButton.Group>
          }
          name="sexo"
          control={control}
          rules={{required: true}}
          defaultValue=""
        />
      </ContainerInput>
      <Button
        style={{marginBottom: 5}}
        mode="contained"
        onPress={handleSubmit(onSubmit)}>
        Próximo
      </Button>
    </Container>
  );
}

import React, {useState} from 'react';
import {Button, RadioButton, HelperText} from 'react-native-paper';
import {useForm, Controller} from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';
import {format} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import RadioButtonItem from '../../../components/RadioButton';

import {
  Container,
  ContainerInputItem,
  ContainerInput,
  ContainerRadioButton,
  ContainerTitle,
  Input,
  DateInput,
  PlaceholderDate,
  TitleRadioGroup,
} from './styles';
export default function Step1({navigation}) {
  const {register, handleSubmit, setValue, errors, control} = useForm();

  const [date, setDate] = useState();
  const [show, setShow] = useState(false);

  function formatDate(dateValue) {
    return format(dateValue, 'dd/MM/yyyy', {
      locale: ptBR,
    });
  }

  function onSubmit(data) {
    data.data_nascimento = formatDate(data.data_nascimento);
    console.log(data);
    navigation.navigate('Questionário passo 2', {
      ...data,
    });
  }
  const onChange = (event, selectedDate) => {
    setShow(false);

    if (selectedDate !== undefined) {
      setDate(selectedDate);
      setValue('data_nascimento', selectedDate);
    }
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <Container>
      <ContainerInput>
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
              O Campo Matrícula é Obrigatório
            </HelperText>
          ) : errors.matricula && errors.matricula.type === 'pattern' ? (
            <HelperText padding="none" type="error">
              Matrícula inválida
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
                    display="default"
                    onChange={onChange}
                  />
                )}
              </DateInput>
            }
            name="data_nascimento"
            control={control}
            rules={{required: true}}
            defaultValue=""
          />
        </ContainerInputItem>

        <ContainerInputItem>
          {errors.curso && (
            <HelperText padding="none" type="error">
              Campo Curso é Obrigatório
            </HelperText>
          )}
          <Input
            label="Curso"
            mode="outlined"
            error={errors.curso}
            ref={register('curso', {required: true})}
            onChangeText={text => setValue('curso', text)}
          />
        </ContainerInputItem>

        <ContainerInputItem>
          {errors.ano_ingresso && errors.ano_ingresso.type === 'required' ? (
            <HelperText padding="none" type="error">
              Campo Ano de Ingresso é Obrigatório
            </HelperText>
          ) : errors.ano_ingresso && errors.ano_ingresso.type === 'pattern' ? (
            <HelperText padding="none" type="error">
              Ano de Ingresso inválido
            </HelperText>
          ) : null}
          <Input
            label="Ano de Ingresso"
            mode="outlined"
            error={errors.ano_ingresso}
            keyboardType="number-pad"
            ref={register('ano_ingresso', {
              required: true,
              pattern: /^20((1[0-9])|(20))/,
            })}
            onChangeText={text => setValue('ano_ingresso', text)}
          />
        </ContainerInputItem>
      </ContainerInput>

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

      <Button mode="contained" onPress={handleSubmit(onSubmit)}>
        Próximo
      </Button>
    </Container>
  );
}

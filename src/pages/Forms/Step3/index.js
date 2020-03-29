import React, {useState, useEffect} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {Button, RadioButton, HelperText} from 'react-native-paper';
import {Keyboard, KeyboardAvoidingView} from 'react-native';

import RadioButtonItem from '../../../components/RadioButton';
import CheckBoxItem from '../../../components/Checkbox';

import {
  Container,
  TitleRadioGroup,
  ContainerRadioButton,
  ContainerTitle,
  ContainerButton,
  Input,
} from './styles';

export default function Step3({navigation, route}) {
  const {register, handleSubmit, setValue, control, errors} = useForm();
  const [gluten, setGluten] = useState(false);
  const [lactose, setLactose] = useState(false);
  const [proteinaLeite, setProteinaLeite] = useState(false);
  const [alergia, setAlergia] = useState(false);
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    setValue('alergia', true);
    setValue('alergia_gluten', false);
    setValue('intolerancia_lactose', false);
    setValue('proteina_leite_vaca', false);
    setValue('outras_alergias', false);
  }, [setValue]);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', function() {
      console.log('teclado aberto');
      setKeyboardVisible(true);
    });
    Keyboard.addListener('keyboardDidHide', function() {
      console.log('teclado fechado');
      setKeyboardVisible(false);
    });

    return () => {
      Keyboard.removeAllListeners('keyboardDidShow');
      Keyboard.removeAllListeners('keyboardDidHide');
      setKeyboardVisible(false);
      console.log('remove listener');
    };
  }, []);

  const params = route.params;

  function handleButtonNext(data) {
    const obj = {...params, ...data};
    console.log(obj);
    navigation.navigate('Questionário passo 4', {
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
    setValue('alergia', false);
    setValue('alergia_gluten', false);
    setValue('intolerancia_lactose', false);
    setValue('proteina_leite_vaca', false);
    setValue('outras_alergias', false);
  }

  function handleButtonPrev() {
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <Container>
        <Controller
          as={
            <RadioButton.Group
              onValueChange={value => setValue('peso_ideal', value)}>
              <ContainerRadioButton>
                <ContainerTitle>
                  <TitleRadioGroup error={errors.peso_ideal}>
                    Você se considera dentro do peso ideal para a sua idade e
                    sexo?{' '}
                    {errors.peso_ideal && (
                      <HelperText padding="none" type="error">
                        * Campo Obrigatório
                      </HelperText>
                    )}
                  </TitleRadioGroup>
                </ContainerTitle>

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
              </ContainerRadioButton>
            </RadioButton.Group>
          }
          name="peso_ideal"
          control={control}
          rules={{required: true}}
          defaultValue=""
        />

        <TitleRadioGroup>
          Você possui algum tipo de alergia ou intolerância alimentar?
        </TitleRadioGroup>

        <CheckBoxItem
          label="Alergia ao Gluten"
          status={
            alergia
              ? 'indeterminate'
              : 'unchecked' && gluten
              ? 'checked'
              : 'unchecked'
          }
          onPress={() => handlerCheckbox('alergia_gluten', gluten, setGluten)}
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
          onPress={() =>
            handlerCheckbox('intolerancia_lactose', lactose, setLactose)
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
          onPress={() =>
            handlerCheckbox(
              'proteina_leite_vaca',
              proteinaLeite,
              setProteinaLeite,
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
          onPress={() => handlerCheckboxAlergia()}
        />

        <Input
          disabled={alergia}
          keyboardShow={keyboardVisible}
          label="Outro"
          mode="outlined"
          ref={register('outras_alergias')}
          onChangeText={text => setValue('outras_alergias', text)}
        />

        <Controller
          as={
            <RadioButton.Group
              onValueChange={value => setValue('vegano_vegetariano', value)}>
              <ContainerRadioButton>
                <ContainerTitle>
                  <TitleRadioGroup error={errors.vegano_vegetariano}>
                    Você é vegetariano ou vegano?
                  </TitleRadioGroup>
                  {errors.vegano_vegetariano && (
                    <HelperText padding="none" type="error">
                      * Campo Obrigatório
                    </HelperText>
                  )}
                </ContainerTitle>

                <RadioButtonItem
                  label="Não sou vegano ou vegetariano"
                  value="nao sou vegano"
                  handlePress={() =>
                    setValue('vegano_vegetariano', 'nao sou vegano')
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
                  value="vegetariano restrito"
                  handlePress={() =>
                    setValue('vegano_vegetariano', 'vegetariano restrito')
                  }
                />

                <RadioButtonItem
                  label="Vegano"
                  value="vegano"
                  handlePress={() => setValue('vegano_vegetariano', 'vegano')}
                />
              </ContainerRadioButton>
            </RadioButton.Group>
          }
          name="vegano_vegetariano"
          control={control}
          rules={{required: true}}
          defaultValue=""
        />

        <ContainerButton>
          <Button mode="contained" onPress={handleButtonPrev}>
            Voltar
          </Button>
          <Button mode="contained" onPress={handleSubmit(handleButtonNext)}>
            Próximo
          </Button>
        </ContainerButton>
      </Container>
    </KeyboardAvoidingView>
  );
}

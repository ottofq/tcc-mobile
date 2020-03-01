import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useForm, Controller} from 'react-hook-form';
import {Button, RadioButton} from 'react-native-paper';

import {
  Container,
  TitleRadioGroup,
  ContainerRadioButton,
  ContainerRadioButtonItem,
  ContainerButton,
  ContainerCheckbox,
  Input,
  styles,
} from './styles';

export default function Step3({navigation, route}) {
  const {register, handleSubmit, setValue, control, errors} = useForm();
  const [gluten, setGluten] = useState(false);
  const [lactose, setLactose] = useState(false);
  const [proteinaLeite, setProteinaLeite] = useState(false);
  const [alergia, setAlergia] = useState(false);

  useEffect(() => {
    setValue('alergia', true);
    setValue('alergia_gluten', false);
    setValue('intolerancia_lactose', false);
    setValue('proteina_leite_vaca', false);
    setValue('outras_alergias', false);
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
    <Container>
      <TitleRadioGroup>
        Você se considera dentro do peso ideal para a sua idade e sexo?
      </TitleRadioGroup>
      <ContainerRadioButton>
        <Controller
          as={
            <RadioButton.Group
              onValueChange={value => setValue('peso_ideal', value)}>
              <ContainerRadioButtonItem>
                <RadioButton.Item
                  style={styles.radioItem}
                  label="Sim"
                  value="sim"
                />
              </ContainerRadioButtonItem>
              <ContainerRadioButtonItem>
                <RadioButton.Item
                  style={styles.radioItem}
                  label="Não"
                  value="nao"
                />
              </ContainerRadioButtonItem>
            </RadioButton.Group>
          }
          name="peso_ideal"
          control={control}
          rules={{required: true}}
          defaultValue=""
        />
      </ContainerRadioButton>

      <TitleRadioGroup>
        Você possui algum tipo de alergia ou intolerância alimentar?
      </TitleRadioGroup>
      <ContainerCheckbox
        onStartShouldSetResponder={() =>
          handlerCheckbox('alergia_gluten', gluten, setGluten)
        }>
        <CheckBox
          disabled={alergia ? true : false}
          ref={register({name: 'alergia_gluten'})}
          value={gluten ? true : false}
          onValueChange={() =>
            handlerCheckbox('alergia_gluten', gluten, setGluten)
          }
        />
        <Text>Alergia ao Gluten</Text>
      </ContainerCheckbox>
      <ContainerCheckbox
        onStartShouldSetResponder={() =>
          handlerCheckbox('intolerancia_lactose', lactose, setLactose)
        }>
        <CheckBox
          disabled={alergia ? true : false}
          ref={register({name: 'intolerancia_lactose'})}
          value={lactose ? true : false}
          onValueChange={() =>
            handlerCheckbox('intolerancia_lactose', lactose, setLactose)
          }
        />
        <Text>Intolerância a lactose</Text>
      </ContainerCheckbox>

      <ContainerCheckbox
        onStartShouldSetResponder={() =>
          handlerCheckbox(
            'proteina_leite_vaca',
            proteinaLeite,
            setProteinaLeite,
          )
        }>
        <CheckBox
          disabled={alergia ? true : false}
          ref={register({name: 'proteina_leite_vaca'})}
          value={proteinaLeite ? true : false}
          onValueChange={() =>
            handlerCheckbox(
              'proteina_leite_vaca',
              proteinaLeite,
              setProteinaLeite,
            )
          }
        />
        <Text>Alergia à proteína do leite de vaca</Text>
      </ContainerCheckbox>
      <ContainerCheckbox
        onStartShouldSetResponder={() => handlerCheckboxAlergia()}>
        <CheckBox
          disabled={gluten || lactose || proteinaLeite}
          ref={register({name: 'alergia'})}
          value={alergia ? true : false}
        />
        <Text>Não possuo alergias</Text>
      </ContainerCheckbox>
      <Input
        disabled={alergia}
        label="Outro"
        type="outlined"
        ref={register('outras_alergias')}
        onChangeText={text => setValue('outras_alergias', text)}
      />

      <TitleRadioGroup>Você é vegetariano ou vegano?</TitleRadioGroup>
      <ContainerRadioButton>
        <Controller
          as={
            <RadioButton.Group
              onValueChange={value => setValue('vegano_vegetariano', value)}>
              <ContainerRadioButtonItem>
                <RadioButton.Item
                  style={styles.radioItem}
                  label="Não sou vegano ou vegetariano"
                  value="nao sou vegano"
                />
              </ContainerRadioButtonItem>
              <ContainerRadioButtonItem>
                <RadioButton.Item
                  style={styles.radioItem}
                  label="Ovolactovegetariano"
                  value="ovolactovegetariano"
                />
              </ContainerRadioButtonItem>
              <ContainerRadioButtonItem>
                <RadioButton.Item
                  style={styles.radioItem}
                  label="Vegetariano restrito – alimentação"
                  value="vegetariano restrito"
                />
              </ContainerRadioButtonItem>
              <ContainerRadioButtonItem>
                <RadioButton.Item
                  style={styles.radioItem}
                  label="Vegano"
                  value="vegano"
                />
              </ContainerRadioButtonItem>
            </RadioButton.Group>
          }
          name="vegano_vegetariano"
          control={control}
          rules={{required: true}}
          defaultValue=""
        />
      </ContainerRadioButton>

      <ContainerButton>
        <Button mode="contained" onPress={handleButtonPrev}>
          Voltar
        </Button>
        <Button mode="contained" onPress={handleSubmit(handleButtonNext)}>
          Próximo
        </Button>
      </ContainerButton>
    </Container>
  );
}

import React from 'react';
import {Text} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {Button, RadioButton} from 'react-native-paper';

import {
  Container,
  TitleRadioGroup,
  ContainerRadioButton,
  ContainerRadioButtonItem,
  ContainerButton,
} from './styles';

export default function Step2({route, navigation}) {
  const {register, handleSubmit, setValue, control, errors} = useForm();
  const {nome} = route.params;

  function handleButtonNext(data) {
    const obj = {nome, ...data};
    console.log(obj);
    navigation.navigate('Questionário passo 3', {
      data: obj,
    });
  }
  function handleButtonPrev() {
    navigation.goBack();
  }

  return (
    <Container>
      <TitleRadioGroup>
        Com qual frequência você realiza suas refeições no RU.
      </TitleRadioGroup>
      <ContainerRadioButton>
        <Controller
          as={
            <RadioButton.Group onValueChange={value => setValue('sexo', value)}>
              <ContainerRadioButtonItem>
                <RadioButton
                  label="Todos os dias"
                  color="#004B82"
                  value="Todos os dias"
                />
                <Text>Todos os Dias</Text>
              </ContainerRadioButtonItem>
              <ContainerRadioButtonItem>
                <RadioButton
                  color="#004B82"
                  value="Pelo menos 3 vezes na semana"
                />
                <Text>Pelo menos 3 vezes na semana</Text>
              </ContainerRadioButtonItem>
              <ContainerRadioButtonItem>
                <RadioButton
                  color="#004B82"
                  value="Pelo menos 1 vez na semana"
                />
                <Text>Pelo menos 1 vez na semana </Text>
              </ContainerRadioButtonItem>
              <ContainerRadioButtonItem>
                <RadioButton color="#004B82" value="Raramente" />
                <Text>Raramente </Text>
              </ContainerRadioButtonItem>
            </RadioButton.Group>
          }
          name="sexo"
          control={control}
          onChange={value => setValue('sexo', value)}
          rules={{required: true}}
          defaultValue=""
        />
      </ContainerRadioButton>

      <TitleRadioGroup>
        Qual tipo de refeição você costuma realizar no RU?
      </TitleRadioGroup>
      <ContainerRadioButton>
        <Controller
          as={
            <RadioButton.Group onValueChange={value => setValue('sexo', value)}>
              <ContainerRadioButtonItem>
                <RadioButton color="#004B82" value="masculino" />
                <Text>Almoço</Text>
              </ContainerRadioButtonItem>
              <ContainerRadioButtonItem>
                <RadioButton color="#004B82" value="feminino" />
                <Text>Jantar</Text>
              </ContainerRadioButtonItem>
              <ContainerRadioButtonItem>
                <RadioButton color="#004B82" value="feminino" />
                <Text>Almoço e Jantar</Text>
              </ContainerRadioButtonItem>
            </RadioButton.Group>
          }
          name="sexo"
          control={control}
          onChange={value => setValue('sexo', value)}
          rules={{required: true}}
          defaultValue=""
        />
      </ContainerRadioButton>
      <TitleRadioGroup>
        Como você se considera de acordo com o seu nível de atividade física?
      </TitleRadioGroup>
      <ContainerRadioButton>
        <Controller
          as={
            <RadioButton.Group onValueChange={value => setValue('sexo', value)}>
              <ContainerRadioButtonItem>
                <RadioButton color="#004B82" value="masculino" />
                <Text>Sedentário</Text>
              </ContainerRadioButtonItem>
              <ContainerRadioButtonItem>
                <RadioButton color="#004B82" value="feminino" />
                <Text>Leve</Text>
              </ContainerRadioButtonItem>
              <ContainerRadioButtonItem>
                <RadioButton color="#004B82" value="feminino" />
                <Text>Moderado</Text>
              </ContainerRadioButtonItem>
              <ContainerRadioButtonItem>
                <RadioButton color="#004B82" value="feminino" />
                <Text>Ativo</Text>
              </ContainerRadioButtonItem>
            </RadioButton.Group>
          }
          name="sexo"
          control={control}
          onChange={value => setValue('sexo', value)}
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

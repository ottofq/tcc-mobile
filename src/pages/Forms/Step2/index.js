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
  styles,
} from './styles';

export default function Step2({route, navigation}) {
  const {register, handleSubmit, setValue, control, errors} = useForm();
  const params = route.params;

  function handleButtonNext(data) {
    const obj = {...params, ...data};
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
            <RadioButton.Group
              onValueChange={value => setValue('frequencia_ru', value)}>
              <ContainerRadioButtonItem>
                <RadioButton.Item
                  label="Todos os dias"
                  value="Todos os dias"
                  style={styles.radioItem}
                />
              </ContainerRadioButtonItem>
              <ContainerRadioButtonItem>
                <RadioButton.Item
                  label="Pelo menos 3 vezes na semana"
                  value="Pelo menos 3 vezes na semana"
                  style={styles.radioItem}
                />
              </ContainerRadioButtonItem>
              <ContainerRadioButtonItem>
                <RadioButton.Item
                  label="Pelo menos 1 vez na semana"
                  value="Pelo menos 1 vez na semana"
                  style={styles.radioItem}
                />
              </ContainerRadioButtonItem>
              <ContainerRadioButtonItem>
                <RadioButton.Item
                  label="Raramente"
                  value="Raramente"
                  style={styles.radioItem}
                />
              </ContainerRadioButtonItem>
            </RadioButton.Group>
          }
          name="frequencia_ru"
          control={control}
          onChange={value => setValue('frequencia_ru', value)}
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
            <RadioButton.Group
              onValueChange={value => setValue('tipo_refeicao', value)}>
              <ContainerRadioButtonItem>
                <RadioButton.Item
                  label="Almoço"
                  value="almoco"
                  style={styles.radioItem}
                />
              </ContainerRadioButtonItem>
              <ContainerRadioButtonItem>
                <RadioButton.Item
                  label="Jantar"
                  value="jantar"
                  style={styles.radioItem}
                />
              </ContainerRadioButtonItem>
              <ContainerRadioButtonItem>
                <RadioButton.Item
                  label="Almoço e Jantar"
                  value="almoco e jantar"
                  style={styles.radioItem}
                />
              </ContainerRadioButtonItem>
            </RadioButton.Group>
          }
          name="tipo_refeicao"
          control={control}
          onChange={value => setValue('tipo_refeicao', value)}
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
            <RadioButton.Group
              onValueChange={value => setValue('atividade_fisica', value)}>
              <ContainerRadioButtonItem>
                <RadioButton.Item
                  label="Sedentário"
                  value="sendetario"
                  style={styles.radioItem}
                />
              </ContainerRadioButtonItem>
              <ContainerRadioButtonItem>
                <RadioButton.Item
                  label="Leve"
                  value="leve"
                  style={styles.radioItem}
                />
              </ContainerRadioButtonItem>
              <ContainerRadioButtonItem>
                <RadioButton.Item
                  label="Moderado"
                  value="moderado"
                  style={styles.radioItem}
                />
              </ContainerRadioButtonItem>
              <ContainerRadioButtonItem>
                <RadioButton.Item
                  label="Ativo"
                  value="ativo"
                  style={styles.radioItem}
                />
              </ContainerRadioButtonItem>
            </RadioButton.Group>
          }
          name="atividade_fisica"
          control={control}
          onChange={value => setValue('atividade_fisica', value)}
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

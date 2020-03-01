import React from 'react';
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

export default function Step4({navigation, route}) {
  const {handleSubmit, setValue, control, errors} = useForm();

  const params = route.params;

  function handleButtonNext(data) {
    const obj = {...params, ...data};
    console.log(obj);
    navigation.navigate('Questionário passo 5', {
      data: obj,
    });
  }

  function handleButtonPrev() {
    navigation.goBack();
  }

  return (
    <Container>
      <TitleRadioGroup>
        Costuma adicionar sal nos alimentos prontos e saladas (você faz uso do
        saleiro à mesa)?
      </TitleRadioGroup>
      <ContainerRadioButton>
        <Controller
          as={
            <RadioButton.Group
              onValueChange={value => setValue('adiciona_sal', value)}>
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
          name="adiciona_sal"
          control={control}
          rules={{required: true}}
          defaultValue=""
        />
      </ContainerRadioButton>
      <TitleRadioGroup>
        Você utiliza o óleo composto que fica no balcão de distribuição de
        refeições?
      </TitleRadioGroup>

      <ContainerRadioButton>
        <Controller
          as={
            <RadioButton.Group
              onValueChange={value => setValue('utiliza_oleo_composto', value)}>
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
          name="utiliza_oleo_composto"
          control={control}
          rules={{required: true}}
          defaultValue=""
        />
      </ContainerRadioButton>
      <TitleRadioGroup>Você consome bebidas alcoólicas?</TitleRadioGroup>

      <ContainerRadioButton>
        <Controller
          as={
            <RadioButton.Group
              onValueChange={value =>
                setValue('consome_bebida_alcoolica', value)
              }>
              <ContainerRadioButtonItem>
                <RadioButton.Item
                  style={styles.radioItem}
                  label="Sim, Diariamente"
                  value="diariamente"
                />
              </ContainerRadioButtonItem>
              <ContainerRadioButtonItem>
                <RadioButton.Item
                  style={styles.radioItem}
                  label="Sim, de 3-6 vezes na semana"
                  value="3-6 vezes na semana"
                />
              </ContainerRadioButtonItem>
              <ContainerRadioButtonItem>
                <RadioButton.Item
                  style={styles.radioItem}
                  label="Sim, de 1-2 vezes na semana "
                  value="1-2 vezes na semana"
                />
              </ContainerRadioButtonItem>
              <ContainerRadioButtonItem>
                <RadioButton.Item
                  style={styles.radioItem}
                  label="Sim, Raramente"
                  value="raramente"
                />
              </ContainerRadioButtonItem>
              <ContainerRadioButtonItem>
                <RadioButton.Item
                  style={styles.radioItem}
                  label="Não Consumo"
                  value="nao"
                />
              </ContainerRadioButtonItem>
            </RadioButton.Group>
          }
          name="consome_bebida_alcoolica"
          control={control}
          rules={{required: true}}
          defaultValue=""
        />
      </ContainerRadioButton>
      <TitleRadioGroup>Você é tabagista?</TitleRadioGroup>

      <ContainerRadioButton>
        <Controller
          as={
            <RadioButton.Group
              onValueChange={value => setValue('tabagista', value)}>
              <ContainerRadioButtonItem>
                <RadioButton.Item
                  style={styles.radioItem}
                  label="Sim"
                  value="true"
                />
              </ContainerRadioButtonItem>
              <ContainerRadioButtonItem>
                <RadioButton.Item
                  style={styles.radioItem}
                  label="Não"
                  value="false"
                />
              </ContainerRadioButtonItem>
            </RadioButton.Group>
          }
          name="tabagista"
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

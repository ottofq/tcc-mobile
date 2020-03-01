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

export default function Step7({navigation, route}) {
  const {handleSubmit, setValue, control, errors} = useForm();

  const params = route.params;

  function handleButtonNext(data) {
    const obj = {...params, ...data};
    console.log(obj);
    navigation.navigate('Questionário passo 8', {
      data: obj,
    });
  }

  function handleButtonPrev() {
    navigation.goBack();
  }

  return (
    <Container>
      <TitleRadioGroup>
        Como você avalia a refeição servida no RU, quanto ao aroma das
        preparações
      </TitleRadioGroup>

      <ContainerRadioButton>
        <Controller
          as={
            <RadioButton.Group
              onValueChange={value =>
                setValue('avaliacao_aroma_refeicao', value)
              }>
              <ContainerRadioButtonItem>
                <RadioButton.Item
                  style={styles.radioItem}
                  label="Muito Ruim"
                  value="muito ruim"
                />
              </ContainerRadioButtonItem>
              <ContainerRadioButtonItem>
                <RadioButton.Item
                  style={styles.radioItem}
                  label="Ruim"
                  value="ruim"
                />
              </ContainerRadioButtonItem>
              <ContainerRadioButtonItem>
                <RadioButton.Item
                  style={styles.radioItem}
                  label="Regular"
                  value="regular"
                />
              </ContainerRadioButtonItem>
              <ContainerRadioButtonItem>
                <RadioButton.Item
                  style={styles.radioItem}
                  label="Bom"
                  value="bom"
                />
              </ContainerRadioButtonItem>
              <ContainerRadioButtonItem>
                <RadioButton.Item
                  style={styles.radioItem}
                  label="Muito Bom"
                  value="muito bom"
                />
              </ContainerRadioButtonItem>
            </RadioButton.Group>
          }
          name="avaliacao_aroma_refeicao"
          control={control}
          rules={{required: true}}
          defaultValue=""
        />
      </ContainerRadioButton>

      <TitleRadioGroup>
        Como você avalia a refeição servida no RU, quanto a coloração do
        cardápio
      </TitleRadioGroup>

      <ContainerRadioButton>
        <Controller
          as={
            <RadioButton.Group
              onValueChange={value =>
                setValue('avaliacao_coloracao_cardapio', value)
              }>
              <ContainerRadioButtonItem>
                <RadioButton.Item
                  style={styles.radioItem}
                  label="Muito Ruim"
                  value="muito ruim"
                />
              </ContainerRadioButtonItem>
              <ContainerRadioButtonItem>
                <RadioButton.Item
                  style={styles.radioItem}
                  label="Ruim"
                  value="ruim"
                />
              </ContainerRadioButtonItem>
              <ContainerRadioButtonItem>
                <RadioButton.Item
                  style={styles.radioItem}
                  label="Regular"
                  value="regular"
                />
              </ContainerRadioButtonItem>
              <ContainerRadioButtonItem>
                <RadioButton.Item
                  style={styles.radioItem}
                  label="Bom"
                  value="bom"
                />
              </ContainerRadioButtonItem>
              <ContainerRadioButtonItem>
                <RadioButton.Item
                  style={styles.radioItem}
                  label="Muito Bom"
                  value="muito bom"
                />
              </ContainerRadioButtonItem>
            </RadioButton.Group>
          }
          name="avaliacao_coloracao_cardapio"
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

import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {Button, RadioButton, HelperText} from 'react-native-paper';
import {merge} from 'lodash';

import RadioButtonItem from '../../../components/RadioButton';

import {
  Container,
  Progress,
  TitleRadioGroup,
  ContainerRadioButton,
  ContainerTitle,
  ContainerButton,
} from './styles';

export default function Step7({navigation, route}) {
  const {handleSubmit, setValue, control, errors} = useForm();

  const params = route.params;

  function handleButtonNext(data) {
    const obj = merge(params, data);
    console.log(obj);
    navigation.navigate('Questionário passo 8', {
      ...obj,
    });
  }

  function handleButtonPrev() {
    navigation.goBack();
  }

  return (
    <Container>
      <Progress progress={0.7} />
      <Controller
        as={
          <RadioButton.Group
            onValueChange={value => setValue('avaliacao_RU.aroma', value)}>
            <ContainerRadioButton>
              <ContainerTitle>
                <TitleRadioGroup error={errors?.avaliacao_RU?.aroma}>
                  Como você avalia a refeição servida no RU, quanto ao aroma das
                  preparações
                </TitleRadioGroup>
                {errors?.avaliacao_RU?.aroma && (
                  <HelperText padding="none" type="error">
                    * Campo Obrigatório
                  </HelperText>
                )}
              </ContainerTitle>

              <RadioButtonItem
                label="Muito ruim"
                value="Muito ruim"
                handlePress={() => setValue('avaliacao_RU.aroma', 'Muito ruim')}
              />

              <RadioButtonItem
                label="Ruim"
                value="Ruim"
                handlePress={() => setValue('avaliacao_RU.aroma', 'Ruim')}
              />

              <RadioButtonItem
                label="Regular"
                value="Regular"
                handlePress={() => setValue('avaliacao_RU.aroma', 'Regular')}
              />

              <RadioButtonItem
                label="Bom"
                value="Bom"
                handlePress={() => setValue('avaliacao_RU.aroma', 'Bom')}
              />

              <RadioButtonItem
                label="Muito bom"
                value="Muito bom"
                handlePress={() => setValue('avaliacao_RU.aroma', 'Muito bom')}
              />
            </ContainerRadioButton>
          </RadioButton.Group>
        }
        name="avaliacao_RU.aroma"
        control={control}
        rules={{required: true}}
        defaultValue=""
      />

      <Controller
        as={
          <RadioButton.Group
            onValueChange={value =>
              setValue('avaliacao_RU.coloracao_cardapio', value)
            }>
            <ContainerRadioButton>
              <ContainerTitle>
                <TitleRadioGroup
                  error={errors?.avaliacao_RU?.coloracao_cardapio}>
                  Como você avalia a refeição servida no RU, quanto a coloração
                  do cardápio
                </TitleRadioGroup>
                {errors?.avaliacao_RU?.coloracao_cardapio && (
                  <HelperText padding="none" type="error">
                    * Campo Obrigatório
                  </HelperText>
                )}
              </ContainerTitle>
              <RadioButtonItem
                label="Muito ruim"
                value="Muito ruim"
                handlePress={() =>
                  setValue('avaliacao_RU.coloracao_cardapio', 'Muito ruim')
                }
              />

              <RadioButtonItem
                label="Ruim"
                value="Ruim"
                handlePress={() =>
                  setValue('avaliacao_RU.coloracao_cardapio', 'Ruim')
                }
              />

              <RadioButtonItem
                label="Regular"
                value="Regular"
                handlePress={() =>
                  setValue('avaliacao_RU.coloracao_cardapio', 'Regular')
                }
              />

              <RadioButtonItem
                label="Bom"
                value="Bom"
                handlePress={() =>
                  setValue('avaliacao_RU.coloracao_cardapio', 'Bom')
                }
              />

              <RadioButtonItem
                label="Muito bom"
                value="Muito bom"
                handlePress={() =>
                  setValue('avaliacao_RU.coloracao_cardapio', 'Muito bom')
                }
              />
            </ContainerRadioButton>
          </RadioButton.Group>
        }
        name="avaliacao_RU.coloracao_cardapio"
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
  );
}

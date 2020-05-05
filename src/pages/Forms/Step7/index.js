import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {Button, RadioButton, HelperText} from 'react-native-paper';
import {merge} from 'lodash';

import RadioButtonItem from '../../../components/RadioButton';

import {
  Container,
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
                label="Muito Ruim"
                value="muito ruim"
                handlePress={() => setValue('avaliacao_RU.aroma', 'muito ruim')}
              />

              <RadioButtonItem
                label="Ruim"
                value="ruim"
                handlePress={() => setValue('avaliacao_RU.aroma', 'ruim')}
              />

              <RadioButtonItem
                label="Regular"
                value="regular"
                handlePress={() => setValue('avaliacao_RU.aroma', 'regular')}
              />

              <RadioButtonItem
                label="Bom"
                value="bom"
                handlePress={() => setValue('avaliacao_RU.aroma', 'bom')}
              />

              <RadioButtonItem
                label="Muito Bom"
                value="muito bom"
                handlePress={() => setValue('avaliacao_RU.aroma', 'muito bom')}
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
                label="Muito Ruim"
                value="muito ruim"
                handlePress={() =>
                  setValue('avaliacao_RU.coloracao_cardapio', 'muito ruim')
                }
              />

              <RadioButtonItem
                label="Ruim"
                value="ruim"
                handlePress={() =>
                  setValue('avaliacao_RU.coloracao_cardapio', 'ruim')
                }
              />

              <RadioButtonItem
                label="Regular"
                value="regular"
                handlePress={() =>
                  setValue('avaliacao_RU.coloracao_cardapio', 'regular')
                }
              />

              <RadioButtonItem
                label="Bom"
                value="bom"
                handlePress={() =>
                  setValue('avaliacao_RU.coloracao_cardapio', 'bom')
                }
              />

              <RadioButtonItem
                label="Muito Bom"
                value="muito bom"
                handlePress={() =>
                  setValue('avaliacao_RU.coloracao_cardapio', 'muito bom')
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

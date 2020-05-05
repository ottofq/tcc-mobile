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

export default function Step8({navigation, route}) {
  const {handleSubmit, setValue, control, errors} = useForm();

  const params = route.params;

  function handleButtonNext(data) {
    const obj = merge(params, data);
    console.log(params);
    navigation.navigate('Questionário passo 9', {
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
            onValueChange={value =>
              setValue('avaliacao_RU.textura_preparacao', value)
            }>
            <ContainerRadioButton>
              <ContainerTitle>
                <TitleRadioGroup
                  error={errors?.avaliacao_RU?.textura_preparacao}>
                  Como você avalia a refeição servida no RU, quanto a textura
                  das preparações
                </TitleRadioGroup>
                {errors?.avaliacao_RU?.textura_preparacao && (
                  <HelperText padding="none" type="error">
                    * Campo Obrigatório
                  </HelperText>
                )}
              </ContainerTitle>
              <RadioButtonItem
                label="Muito Ruim"
                value="muito ruim"
                handlePress={() =>
                  setValue('avaliacao_RU.textura_preparacao', 'muito ruim')
                }
              />

              <RadioButtonItem
                label="Ruim"
                value="ruim"
                handlePress={() =>
                  setValue('avaliacao_RU.textura_preparacao', 'ruim')
                }
              />

              <RadioButtonItem
                label="Regular"
                value="regular"
                handlePress={() =>
                  setValue('avaliacao_RU.textura_preparacao', 'regular')
                }
              />

              <RadioButtonItem
                label="Bom"
                value="bom"
                handlePress={() =>
                  setValue('avaliacao_RU.textura_preparacao', 'bom')
                }
              />

              <RadioButtonItem
                label="Muito Bom"
                value="muito bom"
                handlePress={() =>
                  setValue('avaliacao_RU.textura_preparacao', 'muito bom')
                }
              />
            </ContainerRadioButton>
          </RadioButton.Group>
        }
        name="avaliacao_RU.textura_preparacao"
        control={control}
        rules={{required: true}}
        defaultValue=""
      />

      <Controller
        as={
          <RadioButton.Group
            onValueChange={value =>
              setValue('avaliacao_RU.sabor_preparacao', value)
            }>
            <ContainerRadioButton>
              <ContainerTitle>
                <TitleRadioGroup error={errors?.avaliacao_RU?.sabor_preparacao}>
                  Como você avalia a refeição servida no RU, quanto ao sabor das
                  preparações
                </TitleRadioGroup>
                {errors?.avaliacao_RU?.sabor_preparacao && (
                  <HelperText padding="none" type="error">
                    * Campo Obrigatório
                  </HelperText>
                )}
              </ContainerTitle>
              <RadioButtonItem
                label="Muito Ruim"
                value="muito ruim"
                handlePress={() =>
                  setValue('avaliacao_RU.sabor_preparacao', 'muito ruim')
                }
              />

              <RadioButtonItem
                label="Ruim"
                value="ruim"
                handlePress={() =>
                  setValue('avaliacao_RU.sabor_preparacao', 'ruim')
                }
              />

              <RadioButtonItem
                label="Regular"
                value="regular"
                handlePress={() =>
                  setValue('avaliacao_RU.sabor_preparacao', 'regular')
                }
              />

              <RadioButtonItem
                label="Bom"
                value="bom"
                handlePress={() =>
                  setValue('avaliacao_RU.sabor_preparacao', 'bom')
                }
              />

              <RadioButtonItem
                label="Muito Bom"
                value="muito bom"
                handlePress={() =>
                  setValue('avaliacao_RU.sabor_preparacao', 'muito bom')
                }
              />
            </ContainerRadioButton>
          </RadioButton.Group>
        }
        name="avaliacao_RU.sabor_preparacao"
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

import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {Button, RadioButton, HelperText} from 'react-native-paper';

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
    const obj = {...params, ...data};
    console.log(obj);
    navigation.navigate('Questionário passo 9', {
      data: obj,
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
              setValue('avaliacao_textura_preparacao', value)
            }>
            <ContainerRadioButton>
              <ContainerTitle>
                <TitleRadioGroup error={errors.avaliacao_textura_preparacao}>
                  Como você avalia a refeição servida no RU, quanto a textura
                  das preparações
                </TitleRadioGroup>
                {errors.avaliacao_textura_preparacao && (
                  <HelperText padding="none" type="error">
                    * Campo Obrigatório
                  </HelperText>
                )}
              </ContainerTitle>
              <RadioButtonItem
                label="Muito Ruim"
                value="muito ruim"
                handlePress={() =>
                  setValue('avaliacao_textura_preparacao', 'muito ruim')
                }
              />

              <RadioButtonItem
                label="Ruim"
                value="ruim"
                handlePress={() =>
                  setValue('avaliacao_textura_preparacao', 'ruim')
                }
              />

              <RadioButtonItem
                label="Regular"
                value="regular"
                handlePress={() =>
                  setValue('avaliacao_textura_preparacao', 'regular')
                }
              />

              <RadioButtonItem
                label="Bom"
                value="bom"
                handlePress={() =>
                  setValue('avaliacao_textura_preparacao', 'bom')
                }
              />

              <RadioButtonItem
                label="Muito Bom"
                value="muito bom"
                handlePress={() =>
                  setValue('avaliacao_textura_preparacao', 'muito bom')
                }
              />
            </ContainerRadioButton>
          </RadioButton.Group>
        }
        name="avaliacao_textura_preparacao"
        control={control}
        rules={{required: true}}
        defaultValue=""
      />

      <Controller
        as={
          <RadioButton.Group
            onValueChange={value =>
              setValue('avaliacao_sabor_preparacao', value)
            }>
            <ContainerRadioButton>
              <ContainerTitle>
                <TitleRadioGroup error={errors.avaliacao_sabor_preparacao}>
                  Como você avalia a refeição servida no RU, quanto ao sabor das
                  preparações
                </TitleRadioGroup>
                {errors.avaliacao_sabor_preparacao && (
                  <HelperText padding="none" type="error">
                    * Campo Obrigatório
                  </HelperText>
                )}
              </ContainerTitle>
              <RadioButtonItem
                label="Muito Ruim"
                value="muito ruim"
                handlePress={() =>
                  setValue('avaliacao_sabor_preparacao', 'muito ruim')
                }
              />

              <RadioButtonItem
                label="Ruim"
                value="ruim"
                handlePress={() =>
                  setValue('avaliacao_sabor_preparacao', 'ruim')
                }
              />

              <RadioButtonItem
                label="Regular"
                value="regular"
                handlePress={() =>
                  setValue('avaliacao_sabor_preparacao', 'regular')
                }
              />

              <RadioButtonItem
                label="Bom"
                value="bom"
                handlePress={() =>
                  setValue('avaliacao_sabor_preparacao', 'bom')
                }
              />

              <RadioButtonItem
                label="Muito Bom"
                value="muito bom"
                handlePress={() =>
                  setValue('avaliacao_sabor_preparacao', 'muito bom')
                }
              />
            </ContainerRadioButton>
          </RadioButton.Group>
        }
        name="avaliacao_sabor_preparacao"
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

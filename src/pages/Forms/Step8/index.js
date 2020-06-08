import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {Button, RadioButton, HelperText} from 'react-native-paper';
import {merge} from 'lodash';

import RadioButtonItem from '../../../components/RadioButton';
import ProgressBar from '../../../components/ProgressBar';

import {
  Container,
  Progress,
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
      <ProgressBar progress={0.8} />
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
                label="Muito ruim"
                value="Muito ruim"
                handlePress={() =>
                  setValue('avaliacao_RU.textura_preparacao', 'Muito ruim')
                }
              />

              <RadioButtonItem
                label="Ruim"
                value="Ruim"
                handlePress={() =>
                  setValue('avaliacao_RU.textura_preparacao', 'Ruim')
                }
              />

              <RadioButtonItem
                label="Regular"
                value="Regular"
                handlePress={() =>
                  setValue('avaliacao_RU.textura_preparacao', 'Regular')
                }
              />

              <RadioButtonItem
                label="Bom"
                value="Bom"
                handlePress={() =>
                  setValue('avaliacao_RU.textura_preparacao', 'Bom')
                }
              />

              <RadioButtonItem
                label="Muito bom"
                value="Muito bom"
                handlePress={() =>
                  setValue('avaliacao_RU.textura_preparacao', 'Muito bom')
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
                label="Muito ruim"
                value="Muito ruim"
                handlePress={() =>
                  setValue('avaliacao_RU.sabor_preparacao', 'Muito ruim')
                }
              />

              <RadioButtonItem
                label="Ruim"
                value="Ruim"
                handlePress={() =>
                  setValue('avaliacao_RU.sabor_preparacao', 'Ruim')
                }
              />

              <RadioButtonItem
                label="Regular"
                value="Regular"
                handlePress={() =>
                  setValue('avaliacao_RU.sabor_preparacao', 'Regular')
                }
              />

              <RadioButtonItem
                label="Bom"
                value="Bom"
                handlePress={() =>
                  setValue('avaliacao_RU.sabor_preparacao', 'Bom')
                }
              />

              <RadioButtonItem
                label="Muito bom"
                value="Muito bom"
                handlePress={() =>
                  setValue('avaliacao_RU.sabor_preparacao', 'Muito bom')
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

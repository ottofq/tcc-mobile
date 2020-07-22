import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, RadioButton, HelperText } from 'react-native-paper';
import { merge } from 'lodash';
import { useNavigation, useRoute } from '@react-navigation/native';

import RadioButtonItem from '../../../components/RadioButton';
import ProgressBar from '../../../components/ProgressBar';

import * as S from './styles';

const Step8 = () => {
  const { handleSubmit, setValue, control, errors } = useForm();
  const navigation = useNavigation();
  const { params } = useRoute();

  function handleButtonNext(data) {
    const obj = merge(params, data);
    navigation.navigate('step-9', {
      ...obj,
    });
  }

  function handleButtonPrev() {
    navigation.goBack();
  }

  return (
    <S.Container>
      <ProgressBar progress={0.8} />
      <Controller
        as={
          <RadioButton.Group
            onValueChange={(value) =>
              setValue('avaliacao_RU.textura_preparacao', value)
            }
          >
            <S.ContainerRadioButton>
              <S.ContainerTitle>
                <S.TitleRadioGroup
                  error={errors?.avaliacao_RU?.textura_preparacao}
                >
                  Como você avalia a refeição servida no RU, quanto a textura
                  das preparações
                </S.TitleRadioGroup>
                {errors?.avaliacao_RU?.textura_preparacao && (
                  <HelperText padding="none" type="error">
                    * Campo Obrigatório
                  </HelperText>
                )}
              </S.ContainerTitle>
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
            </S.ContainerRadioButton>
          </RadioButton.Group>
        }
        name="avaliacao_RU.textura_preparacao"
        control={control}
        rules={{ required: true }}
        defaultValue=""
      />

      <Controller
        as={
          <RadioButton.Group
            onValueChange={(value) =>
              setValue('avaliacao_RU.sabor_preparacao', value)
            }
          >
            <S.ContainerRadioButton>
              <S.ContainerTitle>
                <S.TitleRadioGroup
                  error={errors?.avaliacao_RU?.sabor_preparacao}
                >
                  Como você avalia a refeição servida no RU, quanto ao sabor das
                  preparações
                </S.TitleRadioGroup>
                {errors?.avaliacao_RU?.sabor_preparacao && (
                  <HelperText padding="none" type="error">
                    * Campo Obrigatório
                  </HelperText>
                )}
              </S.ContainerTitle>
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
            </S.ContainerRadioButton>
          </RadioButton.Group>
        }
        name="avaliacao_RU.sabor_preparacao"
        control={control}
        rules={{ required: true }}
        defaultValue=""
      />

      <S.ContainerButton>
        <Button mode="contained" onPress={handleButtonPrev}>
          Voltar
        </Button>
        <Button mode="contained" onPress={handleSubmit(handleButtonNext)}>
          Próximo
        </Button>
      </S.ContainerButton>
    </S.Container>
  );
};

export default Step8;

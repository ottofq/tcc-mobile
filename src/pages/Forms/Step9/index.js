/* eslint-disable camelcase */
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, RadioButton, HelperText } from 'react-native-paper';
import { KeyboardAvoidingView, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import CheckBoxItem from '../../../components/Checkbox';
import RadioButtonItem from '../../../components/RadioButton';
import ProgressBar from '../../../components/ProgressBar';

import * as S from './styles';

const Step9 = () => {
  const { handleSubmit, setValue, errors, control } = useForm();

  const navigation = useNavigation();
  const { params } = useRoute();

  function handleButtonNext(data) {
    const obj = { ...params, ...data };

    navigation.navigate('done', {
      ...obj,
    });
  }

  function handleButtonPrev() {
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <S.Container>
        <View>
          <ProgressBar progress={0.9} />
          <Controller
            render={({ onChange, value }) => (
              <RadioButton.Group onValueChange={(text) => onChange(text)}>
                <S.ContainerRadioButton>
                  <S.ContainerTitle>
                    <S.TitleRadioGroup
                      error={errors?.avaliacao_RU?.avaliacao_geral}
                    >
                      De modo geral, como você avalia o cardápio do RU?{' '}
                      {errors?.avaliacao_RU?.avaliacao_geral && (
                        <HelperText padding="none" type="error">
                          * Campo Obrigatório
                        </HelperText>
                      )}
                    </S.TitleRadioGroup>
                  </S.ContainerTitle>
                  <RadioButtonItem
                    label="Muito ruim"
                    value="Muito ruim"
                    status={value === 'Muito ruim' ? 'checked' : 'unchecked'}
                    handlePress={() =>
                      setValue('avaliacao_RU.avaliacao_geral', 'Muito ruim')
                    }
                  />

                  <RadioButtonItem
                    label="Ruim"
                    value="Ruim"
                    status={value === 'Ruim' ? 'checked' : 'unchecked'}
                    handlePress={() =>
                      setValue('avaliacao_RU.avaliacao_geral', 'Ruim')
                    }
                  />

                  <RadioButtonItem
                    label="Regular"
                    value="Regular"
                    status={value === 'Regular' ? 'checked' : 'unchecked'}
                    handlePress={() =>
                      setValue('avaliacao_RU.avaliacao_geral', 'Regular')
                    }
                  />

                  <RadioButtonItem
                    label="Bom"
                    value="Bom"
                    status={value === 'Bom' ? 'checked' : 'unchecked'}
                    handlePress={() =>
                      setValue('avaliacao_RU.avaliacao_geral', 'Bom')
                    }
                  />

                  <RadioButtonItem
                    label="Muito bom"
                    value="Muito bom"
                    status={value === 'Muito bom' ? 'checked' : 'unchecked'}
                    handlePress={() =>
                      setValue('avaliacao_RU.avaliacao_geral', 'Muito bom')
                    }
                  />
                </S.ContainerRadioButton>
              </RadioButton.Group>
            )}
            name="avaliacao_RU.avaliacao_geral"
            control={control}
            rules={{ required: true }}
            defaultValue=""
          />

          <S.ContainerCheckbox>
            <S.TitleCheckboxGroup>
              O que você acha que deveria ser melhorado no RU?
            </S.TitleCheckboxGroup>

            <Controller
              render={({ value }) => (
                <CheckBoxItem
                  label="Cardápio"
                  status={value ? 'checked' : 'unchecked'}
                  onPress={() => setValue('melhorias_RU.cardapio', !value)}
                />
              )}
              name="melhorias_RU.cardapio"
              control={control}
              defaultValue={false}
            />

            <Controller
              render={({ value }) => (
                <CheckBoxItem
                  label="Sabor das preparações"
                  status={value ? 'checked' : 'unchecked'}
                  onPress={() =>
                    setValue('melhorias_RU.melhoria_sabor_preparacao', !value)
                  }
                />
              )}
              name="melhorias_RU.melhoria_sabor_preparacao"
              control={control}
              defaultValue={false}
            />

            <Controller
              render={({ value }) => (
                <CheckBoxItem
                  label="Mais opções veganas"
                  status={value ? 'checked' : 'unchecked'}
                  onPress={() =>
                    setValue('melhorias_RU.opcao_vegetariana', !value)
                  }
                />
              )}
              name="melhorias_RU.opcao_vegetariana"
              control={control}
              defaultValue={false}
            />

            <Controller
              render={({ value }) => (
                <CheckBoxItem
                  label="Estrutura física"
                  status={value ? 'checked' : 'unchecked'}
                  onPress={() =>
                    setValue('melhorias_RU.estrutura_fisica', !value)
                  }
                />
              )}
              name="melhorias_RU.estrutura_fisica"
              control={control}
              defaultValue={false}
            />

            <Controller
              render={({ value }) => (
                <CheckBoxItem
                  label="Tempo de espera na fila"
                  status={value ? 'checked' : 'unchecked'}
                  onPress={() => setValue('melhorias_RU.tempo_fila', !value)}
                />
              )}
              name="melhorias_RU.tempo_fila"
              control={control}
              defaultValue={false}
            />

            <Controller
              render={({ value }) => (
                <CheckBoxItem
                  label="Preço do ticket"
                  status={value ? 'checked' : 'unchecked'}
                  onPress={() => setValue('melhorias_RU.preco_ticket', !value)}
                />
              )}
              name="melhorias_RU.preco_ticket"
              control={control}
              defaultValue={false}
            />
          </S.ContainerCheckbox>

          <Controller
            render={({ onChange }) => (
              <S.Input
                label="Outras"
                mode="outlined"
                onChangeText={(text) => onChange(text)}
              />
            )}
            name="melhorias_RU.melhoria_outros"
            control={control}
            defaultValue=""
          />
        </View>

        <S.ContainerButton>
          <Button mode="contained" onPress={handleButtonPrev}>
            Voltar
          </Button>
          <Button mode="contained" onPress={handleSubmit(handleButtonNext)}>
            Próximo
          </Button>
        </S.ContainerButton>
      </S.Container>
    </KeyboardAvoidingView>
  );
};

export default Step9;

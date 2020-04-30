import React, {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {Button} from 'react-native-paper';
import {KeyboardAvoidingView} from 'react-native';

import CheckBoxItem from '../../../components/Checkbox';

import {
  Container,
  ContainerCheckbox,
  TitleCheckboxGroup,
  ContainerButton,
  Input,
  TitleInput,
} from './styles';

export default function Step6({navigation, route}) {
  const {register, handleSubmit, setValue} = useForm();
  const [doencaCardiovascular, setDoencaCardiovascular] = useState(false);
  const [hipertensaoArterial, setHipertensaoArterial] = useState(false);
  const [obesidade, setObesidade] = useState(false);
  const [dislipidemias, setDislipidemias] = useState(false);
  const [diabetes, setDiabetes] = useState(false);
  const [doencaArterialCoronariana, setDoencaArterialCoronariana] = useState(
    false,
  );
  const [doenca, setDoenca] = useState(false);

  useEffect(() => {
    setValue('fam_doenca_cardiovascular', true);
    setValue('fam_hipertensao_arterial', false);
    setValue('fam_obesidade', false);
    setValue('fam_dislipidemias', false);
    setValue('fam_diabetes', false);
    setValue('fam_doenca_arterial_coronariana', false);
    setValue('fam_outras_doencas', false);
  }, [setValue]);

  const params = route.params;

  function handleButtonNext(data) {
    const obj = {...params, ...data};
    console.log(obj);
    navigation.navigate('Questionário passo 7', {
      ...obj,
    });
  }
  function handlerCheckbox(field, state, setState) {
    if (!doenca) {
      setState(!state);
      setValue(field, !state);
    }
  }

  function handlerCheckboxDoenca() {
    setDoenca(!doenca);
    setValue('fam_doenca_cardiovascular', true);
    setValue('fam_hipertensao_arterial', false);
    setValue('fam_obesidade', false);
    setValue('fam_dislipidemias', false);
    setValue('fam_diabetes', false);
    setValue('fam_doenca_arterial_coronariana', false);
    setValue('fam_outras_doencas', false);
  }

  function handleButtonPrev() {
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <Container>
        <ContainerCheckbox>
          <TitleCheckboxGroup>
            Há histórico de presença, de alguma das patologias abaixo, na sua
            família? Se sim, quais?
          </TitleCheckboxGroup>
          <CheckBoxItem
            label="Doença cardiovascular"
            status={
              doenca
                ? 'indeterminate'
                : 'unchecked' && doencaCardiovascular
                ? 'checked'
                : 'unchecked'
            }
            onPress={() =>
              handlerCheckbox(
                'fam_doenca_cardiovascular',
                doencaCardiovascular,
                setDoencaCardiovascular,
              )
            }
          />

          <CheckBoxItem
            label="Hipertensão arterial"
            status={
              doenca
                ? 'indeterminate'
                : 'unchecked' && hipertensaoArterial
                ? 'checked'
                : 'unchecked'
            }
            onPress={() =>
              handlerCheckbox(
                'fam_hipertensao_arterial',
                hipertensaoArterial,
                setHipertensaoArterial,
              )
            }
          />

          <CheckBoxItem
            label="Obesidade"
            status={
              doenca
                ? 'indeterminate'
                : 'unchecked' && obesidade
                ? 'checked'
                : 'unchecked'
            }
            onPress={() =>
              handlerCheckbox('fam_obesidade', obesidade, setObesidade)
            }
          />

          <CheckBoxItem
            label="Dislipidemias"
            status={
              doenca
                ? 'indeterminate'
                : 'unchecked' && dislipidemias
                ? 'checked'
                : 'unchecked'
            }
            onPress={() =>
              handlerCheckbox(
                'fam_dislipidemias',
                dislipidemias,
                setDislipidemias,
              )
            }
          />

          <CheckBoxItem
            label="Diabetes"
            status={
              doenca
                ? 'indeterminate'
                : 'unchecked' && diabetes
                ? 'checked'
                : 'unchecked'
            }
            onPress={() =>
              handlerCheckbox('fam_diabetes', diabetes, setDiabetes)
            }
          />

          <CheckBoxItem
            label="Doença Arterial Coronariana"
            status={
              doenca
                ? 'indeterminate'
                : 'unchecked' && doencaArterialCoronariana
                ? 'checked'
                : 'unchecked'
            }
            onPress={() =>
              handlerCheckbox(
                'fam_doenca_arterial_coronariana',
                doencaArterialCoronariana,
                setDoencaArterialCoronariana,
              )
            }
          />

          <CheckBoxItem
            label="Não possuo doenças"
            status={
              doencaCardiovascular ||
              hipertensaoArterial ||
              obesidade ||
              dislipidemias ||
              doencaArterialCoronariana ||
              diabetes
                ? 'indeterminate'
                : 'unchecked' && doenca
                ? 'checked'
                : 'unchecked'
            }
            onPress={() => handlerCheckboxDoenca()}
          />
        </ContainerCheckbox>
        <Input
          disabled={doenca}
          label="Outras Doenças"
          mode="outlined"
          ref={register('fam_outras_doencas')}
          onChangeText={text => setValue('fam_outras_doencas', text)}
        />

        <TitleInput>
          Faz uso contínuo de algum medicamento? Se sim qual?
        </TitleInput>
        <Input
          label="Medicamentos"
          mode="outlined"
          ref={register('medicamentos')}
          onChangeText={text => setValue('medicamentos', text)}
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
    </KeyboardAvoidingView>
  );
}

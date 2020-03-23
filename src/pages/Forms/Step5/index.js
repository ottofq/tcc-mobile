import React, {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {Button} from 'react-native-paper';

import CheckBoxItem from '../../../components/Checkbox';

import {Container, TitleCheckboxGroup, ContainerButton, Input} from './styles';

export default function Step5({navigation, route}) {
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
    setValue('doenca_cardiovascular', true);
    setValue('hipertensao_arterial', false);
    setValue('obesidade', false);
    setValue('dislipidemias', false);
    setValue('diabetes', false);
    setValue('doenca_arterial_coronariana', false);
    setValue('outras_doencas', false);
  }, []);

  const params = route.params;

  function handleButtonNext(data) {
    const obj = {...params, ...data};
    console.log(obj);
    navigation.navigate('Questionário passo 6', {
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
    setValue('doenca_cardiovascular', true);
    setValue('hipertensao_arterial', false);
    setValue('obesidade', false);
    setValue('dislipidemias', false);
    setValue('diabetes', false);
    setValue('doenca_arterial_coronariana', false);
    setValue('outras_doencas', false);
  }

  function handleButtonPrev() {
    navigation.goBack();
  }

  return (
    <Container>
      <TitleCheckboxGroup>
        Você apresenta ou já apresentou alguma das patologias abaixo? Se sim,
        quais?
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
            'doenca_cardiovascular',
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
            'hipertensao_arterial',
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
        onPress={() => handlerCheckbox('obesidade', obesidade, setObesidade)}
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
          handlerCheckbox('dislipidemias', dislipidemias, setDislipidemias)
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
        onPress={() => handlerCheckbox('diabetes', diabetes, setDiabetes)}
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
            'doenca_arterial_coronariana',
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
      <Input
        disabled={doenca}
        label="Outras Doenças"
        mode="outlined"
        ref={register('outras_doencas')}
        onChangeText={text => setValue('outras_doencas', text)}
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

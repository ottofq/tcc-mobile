import React, {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {Button} from 'react-native-paper';

import CheckBoxItem from '../../../components/Checkbox';
import ProgressBar from '../../../components/ProgressBar';

import {
  Container,
  ContainerCheckbox,
  TitleCheckboxGroup,
  ContainerButton,
  Input,
} from './styles';

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
    setValue('patologias.doenca_cardiovascular', true);
    setValue('patologias.hipertensao_arterial', false);
    setValue('patologias.obesidade', false);
    setValue('patologias.dislipidemias', false);
    setValue('patologias.diabetes', false);
    setValue('patologias.doenca_arterial_coronariana', false);
    setValue('patologias.outras_patologias', false);
  }, [setValue]);

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
    setValue('patologias.doenca_cardiovascular', true);
    setValue('patologias.hipertensao_arterial', false);
    setValue('patologias.obesidade', false);
    setValue('patologias.dislipidemias', false);
    setValue('patologias.diabetes', false);
    setValue('patologias.doenca_arterial_coronariana', false);
    setValue('patologias.outras_patologias', false);
  }

  function handleButtonPrev() {
    navigation.goBack();
  }

  return (
    <Container>
      <ProgressBar progress={0.5} />
      <ContainerCheckbox>
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
          ref={register('patologias.doenca_cardiovascular')}
          onPress={() =>
            handlerCheckbox(
              'patologias.doenca_cardiovascular',
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
          ref={register('patologias.hipertensao_arterial')}
          onPress={() =>
            handlerCheckbox(
              'patologias.hipertensao_arterial',
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
          ref={register('patologias.obesidade')}
          onPress={() =>
            handlerCheckbox('patologias.obesidade', obesidade, setObesidade)
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
          ref={register('patologias.dislipidemias')}
          onPress={() =>
            handlerCheckbox(
              'patologias.dislipidemias',
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
          ref={register('patologias.diabetes')}
          onPress={() =>
            handlerCheckbox('patologias.diabetes', diabetes, setDiabetes)
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
          ref={register('patologias.doenca_arterial_coronariana')}
          onPress={() =>
            handlerCheckbox(
              'patologias.doenca_arterial_coronariana',
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
        ref={register('patologias.outras_patologias')}
        onChangeText={text => setValue('patologias.outras_patologias', text)}
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

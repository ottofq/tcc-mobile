import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useForm, Controller} from 'react-hook-form';
import {Button, RadioButton} from 'react-native-paper';

import {
  Container,
  TitleCheckboxGroup,
  ContainerButton,
  ContainerCheckbox,
  Input,
  TitleCheckbox,
} from './styles';

export default function Step5({navigation, route}) {
  const {register, handleSubmit, setValue, control, errors} = useForm();
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

  function handlerCheckboxAlergia() {
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
      <ContainerCheckbox
        onStartShouldSetResponder={() =>
          handlerCheckbox(
            'doenca_cardiovascular',
            doencaCardiovascular,
            setDoencaCardiovascular,
          )
        }>
        <CheckBox
          disabled={doenca ? true : false}
          ref={register({name: 'doenca_cardiovascular'})}
          value={doencaCardiovascular ? true : false}
          onValueChange={() =>
            handlerCheckbox(
              'doenca_cardiovascular',
              doencaCardiovascular,
              setDoencaCardiovascular,
            )
          }
        />
        <TitleCheckbox>Doença cardiovascular</TitleCheckbox>
      </ContainerCheckbox>
      <ContainerCheckbox
        onStartShouldSetResponder={() =>
          handlerCheckbox(
            'hipertensao_arterial',
            hipertensaoArterial,
            setHipertensaoArterial,
          )
        }>
        <CheckBox
          disabled={doenca ? true : false}
          ref={register({name: 'hipertensao_arterial'})}
          value={hipertensaoArterial ? true : false}
          onValueChange={() =>
            handlerCheckbox(
              'hipertensao_arterial',
              hipertensaoArterial,
              setHipertensaoArterial,
            )
          }
        />
        <TitleCheckbox>Hipertensão arterial</TitleCheckbox>
      </ContainerCheckbox>

      <ContainerCheckbox
        onStartShouldSetResponder={() =>
          handlerCheckbox('obesidade', obesidade, setObesidade)
        }>
        <CheckBox
          disabled={doenca ? true : false}
          ref={register({name: 'obesidade'})}
          value={obesidade ? true : false}
          onValueChange={() =>
            handlerCheckbox('obesidade', obesidade, setObesidade)
          }
        />
        <TitleCheckbox>Obesidade</TitleCheckbox>
      </ContainerCheckbox>

      <ContainerCheckbox
        onStartShouldSetResponder={() =>
          handlerCheckbox('dislipidemias', dislipidemias, setDislipidemias)
        }>
        <CheckBox
          disabled={doenca ? true : false}
          ref={register({name: 'dislipidemias'})}
          value={dislipidemias ? true : false}
          onValueChange={() =>
            handlerCheckbox('dislipidemias', dislipidemias, setDislipidemias)
          }
        />
        <TitleCheckbox>Dislipidemias</TitleCheckbox>
      </ContainerCheckbox>
      <ContainerCheckbox
        onStartShouldSetResponder={() =>
          handlerCheckbox(
            'doenca_arterial_coronariana',
            doencaArterialCoronariana,
            setDoencaArterialCoronariana,
          )
        }>
        <CheckBox
          disabled={doenca ? true : false}
          ref={register({name: 'doenca_arterial_coronariana'})}
          value={doencaArterialCoronariana ? true : false}
          onValueChange={() =>
            handlerCheckbox(
              'doenca_arterial_coronariana',
              doencaArterialCoronariana,
              setDoencaArterialCoronariana,
            )
          }
        />
        <TitleCheckbox>Diabetes</TitleCheckbox>
      </ContainerCheckbox>

      <ContainerCheckbox
        onStartShouldSetResponder={() =>
          handlerCheckbox('diabetes', diabetes, setDiabetes)
        }>
        <CheckBox
          disabled={doenca ? true : false}
          ref={register({name: 'diabetes'})}
          value={diabetes ? true : false}
          onValueChange={() =>
            handlerCheckbox('diabetes', diabetes, setDiabetes)
          }
        />
        <TitleCheckbox>Diabetes</TitleCheckbox>
      </ContainerCheckbox>

      <ContainerCheckbox
        onStartShouldSetResponder={() => handlerCheckboxAlergia()}>
        <CheckBox
          disabled={
            doencaCardiovascular ||
            hipertensaoArterial ||
            obesidade ||
            dislipidemias ||
            doencaArterialCoronariana
          }
          ref={register({name: 'doencas'})}
          value={doenca ? true : false}
        />
        <TitleCheckbox>Não possuo doenças</TitleCheckbox>
      </ContainerCheckbox>
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

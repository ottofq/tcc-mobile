import React, {useState, useEffect} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {useForm} from 'react-hook-form';
import {Button} from 'react-native-paper';

import {
  Container,
  TitleCheckboxGroup,
  ContainerButton,
  ContainerCheckbox,
  Input,
  TitleCheckbox,
  TitleInput,
} from './styles';

export default function Step6({navigation, route}) {
  const {register, handleSubmit, setValue, errors} = useForm();
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
  }, []);

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

  function handlerCheckboxAlergia() {
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
    <Container>
      <TitleCheckboxGroup>
        Há histórico de presença, de alguma das patologias abaixo, na sua
        família? Se sim, quais?
      </TitleCheckboxGroup>
      <ContainerCheckbox
        onStartShouldSetResponder={() =>
          handlerCheckbox(
            'fam_doenca_cardiovascular',
            doencaCardiovascular,
            setDoencaCardiovascular,
          )
        }>
        <CheckBox
          disabled={doenca ? true : false}
          ref={register({name: 'fam_doenca_cardiovascular'})}
          value={doencaCardiovascular ? true : false}
          onValueChange={() =>
            handlerCheckbox(
              'fam_doenca_cardiovascular',
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
            'fam_hipertensao_arterial',
            hipertensaoArterial,
            setHipertensaoArterial,
          )
        }>
        <CheckBox
          disabled={doenca ? true : false}
          ref={register({name: 'fam_hipertensao_arterial'})}
          value={hipertensaoArterial ? true : false}
          onValueChange={() =>
            handlerCheckbox(
              'fam_hipertensao_arterial',
              hipertensaoArterial,
              setHipertensaoArterial,
            )
          }
        />
        <TitleCheckbox>Hipertensão arterial</TitleCheckbox>
      </ContainerCheckbox>

      <ContainerCheckbox
        onStartShouldSetResponder={() =>
          handlerCheckbox('fam_obesidade', obesidade, setObesidade)
        }>
        <CheckBox
          disabled={doenca ? true : false}
          ref={register({name: 'fam_obesidade'})}
          value={obesidade ? true : false}
          onValueChange={() =>
            handlerCheckbox('fam_obesidade', obesidade, setObesidade)
          }
        />
        <TitleCheckbox>Obesidade</TitleCheckbox>
      </ContainerCheckbox>

      <ContainerCheckbox
        onStartShouldSetResponder={() =>
          handlerCheckbox('fam_dislipidemias', dislipidemias, setDislipidemias)
        }>
        <CheckBox
          disabled={doenca ? true : false}
          ref={register({name: 'fam_dislipidemias'})}
          value={dislipidemias ? true : false}
          onValueChange={() =>
            handlerCheckbox(
              'fam_dislipidemias',
              dislipidemias,
              setDislipidemias,
            )
          }
        />
        <TitleCheckbox>Dislipidemias</TitleCheckbox>
      </ContainerCheckbox>
      <ContainerCheckbox
        onStartShouldSetResponder={() =>
          handlerCheckbox(
            'fam_doenca_arterial_coronariana',
            doencaArterialCoronariana,
            setDoencaArterialCoronariana,
          )
        }>
        <CheckBox
          disabled={doenca ? true : false}
          ref={register({name: 'fam_doenca_arterial_coronariana'})}
          value={doencaArterialCoronariana ? true : false}
          onValueChange={() =>
            handlerCheckbox(
              'fam_doenca_arterial_coronariana',
              doencaArterialCoronariana,
              setDoencaArterialCoronariana,
            )
          }
        />
        <TitleCheckbox>Diabetes</TitleCheckbox>
      </ContainerCheckbox>

      <ContainerCheckbox
        onStartShouldSetResponder={() =>
          handlerCheckbox('fam_diabetes', diabetes, setDiabetes)
        }>
        <CheckBox
          disabled={doenca ? true : false}
          ref={register({name: 'fam_diabetes'})}
          value={diabetes ? true : false}
          onValueChange={() =>
            handlerCheckbox('fam_diabetes', diabetes, setDiabetes)
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
          ref={register({name: 'fam_doencas'})}
          value={doenca ? true : false}
        />
        <TitleCheckbox>Não há histórico de doenças</TitleCheckbox>
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
  );
}

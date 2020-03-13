import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Table, Row, Rows} from 'react-native-table-component';
import {View} from 'react-native';

import {
  ButtonLeft,
  Title,
  Container,
  TitleInfo,
  InfoDescription,
  styles,
} from './styles';

const Stack = createStackNavigator();

function Info() {
  const tableHead = [
    'Categoria de usuário',
    'Valor pago R$',
    'Identificação para compra de ticket',
    'Identificação para acessar o restaurante',
  ];
  const tableData = [
    [
      'Estudantes 100%',
      'Isento',
      'Cartão do Benefício + Doc Oficial c/ foto',
      'Cartão do Benefício + Doc Oficial c/ foto + ticket do RU',
    ],
    [
      'Estudantes',
      'R$ 5,00',
      'Carteira de Estudante + Doc Oficial c/ foto',
      'Carteira de Estudante + Doc Oficial c/ foto + ticket do RU',
    ],
    [
      'Servidores da UFES',
      'R$ 9,50',
      'Identidade funcional ou Contracheque do último mês + Doc Oficial c/ foto',
      'Identidade funcional ou Contracheque do último mês + Doc Oficial c/ foto + ticket do RU',
    ],
    [
      'Usuários especiais',
      'R$ 9,50',
      'Contracheque do último mês + Doc Oficial c/ foto',
      'Contracheque do último mês + Doc Oficial c/ foto + ticket do RU',
    ],
    ['Visitante', 'R$ 9,50', '-', 'Ticket do RU'],
  ];

  return (
    <Container>
      <Title>Horário de funcionamento</Title>
      <TitleInfo>Dias de atendimento:</TitleInfo>
      <InfoDescription>
        De 2ª a 6ª feira, exceto feriados, paralisações e recessos acadêmicos.
      </InfoDescription>

      <TitleInfo>Horários:</TitleInfo>

      <InfoDescription>
        {`Almoço: 11h00min às 13h30min - (Alegre) 
                                11h30min às 13h00min - (Jerônimo Monteiro)
Jantar: 17h30min às 19h00min - (Alegre)
        `}
      </InfoDescription>

      <Title>Valores e Identificação para Acesso</Title>

      <View style={styles.container}>
        <Table borderStyle={styles.borderTable}>
          <Row
            data={tableHead}
            style={styles.head}
            textStyle={styles.titleHead}
          />
          <Rows data={tableData} textStyle={styles.textRow} />
        </Table>
      </View>
    </Container>
  );
}

export default function InfoNavigator({navigation}) {
  function handleButton() {
    navigation.openDrawer();
  }

  return (
    <Stack.Navigator initialRouteName="Cardapio RU - CCA UFES">
      <Stack.Screen
        options={{
          headerLeft: () => (
            <ButtonLeft onPress={handleButton}>
              <Icon name="menu" size={36} color="#fff" />
            </ButtonLeft>
          ),
          headerTitleAlign: 'center',
          headerTitle: 'Informações Gerais',
          headerTitleStyle: {
            fontSize: 24,
            color: '#fff',
            fontFamily: 'PTSans-Bold',
          },
          headerStyle: {backgroundColor: '#004B82'},
        }}
        name="Info"
        component={Info}
      />
    </Stack.Navigator>
  );
}

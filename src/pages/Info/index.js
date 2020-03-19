import React from 'react';
import {Table, Row, Rows} from 'react-native-table-component';
import {View} from 'react-native';

import Header from '../../components/Header';

import {Title, Container, TitleInfo, InfoDescription, styles} from './styles';

export default function Info({navigation}) {
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
      <Header
        handleMenu={() => navigation.openDrawer()}
        title="INFORMAÇÕES GERAIS"
      />
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

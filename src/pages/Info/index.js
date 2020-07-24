import React from 'react';
import { Table, Row, Rows } from 'react-native-table-component';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';

import * as S from './styles';

const Info = () => {
  const navigation = useNavigation();

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
    <View style={{ flex: 1 }}>
      <Header
        handleMenu={() => navigation.openDrawer()}
        title="INFORMAÇÕES GERAIS"
      />
      <S.Container>
        <S.Title>Horário de funcionamento</S.Title>
        <S.Title>Dias de atendimento:</S.Title>
        <S.Description>
          De 2ª a 6ª feira, exceto feriados, paralisações e recessos acadêmicos.
        </S.Description>

        <S.Title>Horários:</S.Title>

        <S.Description>
          {`Almoço: 11h00min às 13h30min - (Alegre) 
                                11h30min às 13h00min - (Jerônimo Monteiro)
Jantar: 17h30min às 19h00min - (Alegre)
        `}
        </S.Description>

        <S.Title>Valores e Identificação para Acesso</S.Title>

        <View style={S.styles.container}>
          <Table borderStyle={S.styles.borderTable}>
            <Row
              data={tableHead}
              style={S.styles.head}
              textStyle={S.styles.titleHead}
            />
            <Rows data={tableData} textStyle={S.styles.textRow} />
          </Table>
        </View>
      </S.Container>
    </View>
  );
};

export default Info;

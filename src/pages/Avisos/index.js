import React from 'react';
import {Container, InfoCard, Title, InfoContent} from './styles';

export default function Avisos() {
  return (
    <Container>
      <InfoCard>
        <Title>
          12/04/2020 - FUNCIONAMENTO DO RU NO FIM DE 2019 E INÍCIO DE 2020
        </Title>
        <InfoContent>
          {`
Informamos a toda comunidade acadêmica a programação de funcionamento dos Restaurantes Universitários de Alegre e Jerônimo Monteiro:

Atendimento até o dia 23/12, data do término do semestre 2019/02, nesse dia será servido apenas almoço das 11h00min às 13h30min;
Recesso de 24/12 a 03/01/2020;
Jerônimo Monteiro retomará o atendimento aos comensais no dia 06/01/2020 até 07/02/2020, no horário das 11h30min às 12h30min, devido ao horário especial (Resolução 36/2019);
Alegre retomará o atendimento somente a partir do dia 07/01/2020 até 07/02/2020 (feriado municipal em 06/01), com o horário de atendimento das 11h00min às 12h30min, devido ao horário especial (Resolução 36/2019);
No período de 10/02/2020 a 27/02/2020 haverá férias coletivas da Equipe Terceirizada dos Restaurantes Universitários;
As atividades referentes ao primeiro semestre de 2020 serão retomas a partir do dia 02/03.
`}
        </InfoContent>
      </InfoCard>
      <InfoCard>
        <Title>
          12/04/2020 - SERVIÇOS DE DEDETIZAÇÃO NOS RESTAURANTES UNIVERSITÁRIOS
          DE ALEGRE E JERÔNIMO MONTEIRO
        </Title>
        <InfoContent>
          {`
O Setor de Nutrição do RU de Alegre informa a toda comunidade acadêmica que no dia 20/12/2019,  sexta-feira,  os Restaurantes Universitários de Alegre e Jerônimo Monteiro passarão por serviços de dedetização. As atividades administrativas serão exercidas até as 16h00min, portanto, nesse dia não será servido o jantar em Alegre.
         `}
        </InfoContent>
      </InfoCard>
      <InfoCard>
        <Title>
          12/04/2020 - HORÁRIO DE FUNCIONAMENTO DOS RESTAURANTES DA UFES DURANTE
          O RECESSO DE FINAL DE ANO 2019/2020
        </Title>
        <InfoContent>
          {`
Informamos a toda comunidade acadêmica que os Restaurantes Universitários de Alegre e Jerônimo Monteiro atenderão aos comensais até o dia 23/12, data do término do semestre 2019/02, nesse dia será servido apenas almoço das 11h00min às 13h30min.
Após, os Restaurantes entrarão em recesso de 24/12 a 03/01/2020. Para atendimento aos comensais no Semestre Letivo Extraordinário 2019/03, o restaurante de Jerônimo Monteiro retomará o atendimento aos comensais no dia 06/01/2020 até 07/02/2020, e o restaurante de Alegre retomará o atendimento somente a partir do dia 07/01/2020, devido o feriado municipal, com o funcionamento até 07/02/2020. No período de 10/02/2020 a 27/02/2020 haverá férias coletivas da Equipe Terceirizada dos Restaurantes Universitários. As atividades referentes ao primeiro semestre de 2020 serão retomas a partir do dia 02/03.
          `}
        </InfoContent>
      </InfoCard>
    </Container>
  );
}

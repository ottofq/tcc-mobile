import React, { useEffect, useState, useCallback } from 'react';
import { RefreshControl } from 'react-native';

import MenuItem from '../../components/MenuItem';
import MenuDate from '../../components/MenuDate';

import * as S from './styles';

import entrada from '../../../assets/images/entrada.png';
import proteico from '../../../assets/images/proteico.png';
import opcao from '../../../assets/images/opcao.png';
import acompanhamento from '../../../assets/images/acompanhamento.png';
import guarnicao from '../../../assets/images/guarnicao.png';
import sobremesa from '../../../assets/images/sobremesa.png';

import api from '../../services/api';

const Menu = () => {
  const [cardapio, setCardapio] = useState({
    tipo: 'Almoço',
    data: '2020-07-14T18:44:11.416Z',
    entrada: {
      descricao: 'Tomate, Abobrinha Verde',
    },
    proteina: {
      descricao: 'Linguiça de Frango Assada',
    },
    opcao: {
      descricao: 'Ovo Cozido',
    },
    acompanhamento: {
      descricao: 'Arroz, Feijão',
    },
    guarnicao: {
      descricao: 'Espaguete ao Alho e Óleo',
    },
    sobremesa: {
      descricao: 'Maçã',
    },
  });
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  async function loadCardapio() {
    try {
      setLoading(true);
      const result = await api.get('/cardapio/last');
      setCardapio(result.data);
      setRefreshing(false);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadCardapio();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setLoading(true);
    loadCardapio();
  }, []);

  return (
    <S.Container
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <MenuDate loading={loading} title={cardapio.tipo} date={cardapio.data} />

      <MenuItem
        imgSrc={entrada}
        loading={loading}
        title="Entrada"
        description={cardapio.entrada.descricao}
      />

      <MenuItem
        imgSrc={proteico}
        loading={loading}
        title="Prato proteico"
        description={cardapio.proteina.descricao}
      />

      <MenuItem
        imgSrc={opcao}
        loading={loading}
        title="Opção"
        description={cardapio.opcao.descricao}
      />

      <MenuItem
        imgSrc={acompanhamento}
        loading={loading}
        title="Acompanhamento"
        description={cardapio.acompanhamento.descricao}
      />

      <MenuItem
        imgSrc={guarnicao}
        loading={loading}
        title="Guarnição"
        description={cardapio.guarnicao.descricao}
      />

      <MenuItem
        imgSrc={sobremesa}
        loading={loading}
        title="Sobremesa"
        description={cardapio.sobremesa.descricao}
      />

      <S.TextFooter>
        * O cardápio poderá sofrer alterações sem comunicação prévia, de acordo
        com as necessidades da Seção.
      </S.TextFooter>
    </S.Container>
  );
};

export default Menu;

import React, { useCallback, memo, useContext } from 'react';
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

import MenuContext from '../../contexts/menu';

const Menu = () => {
  const { menu, loading, loadMenu } = useContext(MenuContext);

  const onRefresh = useCallback(() => {
    loadMenu();
  }, []);

  return (
    <S.Container
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={onRefresh} />
      }
    >
      <MenuDate loading={loading} title={menu.tipo} date={menu.data} />

      <MenuItem
        imgSrc={entrada}
        loading={loading}
        title="Entrada"
        description={menu.entrada}
      />

      <MenuItem
        imgSrc={proteico}
        loading={loading}
        title="Prato proteico"
        description={menu.prato_proteico}
      />

      <MenuItem
        imgSrc={opcao}
        loading={loading}
        title="Opção"
        description={menu.opcao}
      />

      <MenuItem
        imgSrc={acompanhamento}
        loading={loading}
        title="Acompanhamento"
        description={menu.acompanhamento}
      />

      <MenuItem
        imgSrc={guarnicao}
        loading={loading}
        title="Guarnição"
        description={menu.guarnicao}
      />

      <MenuItem
        imgSrc={sobremesa}
        loading={loading}
        title="Sobremesa"
        description={menu.sobremesa}
      />

      <S.TextFooter>
        * O cardápio poderá sofrer alterações sem comunicação prévia, de acordo
        com as necessidades da Seção.
      </S.TextFooter>
    </S.Container>
  );
};

export default memo(Menu);

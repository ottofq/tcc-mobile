/* eslint-disable no-underscore-dangle */
import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

import snackbarContext from './Snackbar';
import { getMenu } from '../services';

const MENU_INITIAL_STATE = {
  id: '',
  tipo: '',
  data: '2020-07-14T18:44:11.416Z',
  entrada: '',
  prato_proteico: '',
  opcao: '',
  acompanhamento: '',
  guarnicao: '',
  sobremesa: '',
};

const MenuContext = createContext({
  menu: MENU_INITIAL_STATE,
  loading: true,
  loadMenu: () => {},
  error: false,
});

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState(MENU_INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(snackbarContext);

  async function loadMenu() {
    try {
      setLoading(true);
      const response = await getMenu();

      setMenu({ ...response.data, id: response.data._id });
      setLoading(false);
    } catch (error) {
      dispatch({ type: 'SNACKBAR:VISIBLE', payload: error.message });
      setLoading(false);
    }
  }

  return (
    <MenuContext.Provider value={{ menu, loading, loadMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

MenuProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MenuContext;

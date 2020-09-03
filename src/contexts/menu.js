/* eslint-disable no-underscore-dangle */
import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

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
  loadingRating: false,
  error: false,
});

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState(MENU_INITIAL_STATE);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function loadMenu() {
    try {
      setLoading(true);
      const response = await getMenu();

      setMenu({ ...response.data, id: response.data._id });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    loadMenu();
  }, []);

  return (
    <MenuContext.Provider value={{ menu, loading, loadMenu, error }}>
      {children}
    </MenuContext.Provider>
  );
};

MenuProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MenuContext;

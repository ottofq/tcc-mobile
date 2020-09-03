import api from './api';

export const getMenu = async () => {
  try {
    const menu = await api.get('/cardapio/last');

    return menu;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getMenuRating = async (id) => {
  try {
    const menuRating = await api.get(`cardapio/avg/${id}`);

    return menuRating;
  } catch (error) {
    throw new Error(error.message);
  }
};

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

export const createRating = async (menuId, studentId, rating, comment) => {
  try {
    const response = await api.post(`/cardapio/avaliar/${menuId}`, {
      student_id: studentId,
      avaliacao: rating,
      comentario: comment,
    });

    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getNews = async () => {
  try {
    const response = await api.get('/noticias?page=1');

    return response.data.news;
  } catch (error) {
    throw new Error(error.message);
  }
};

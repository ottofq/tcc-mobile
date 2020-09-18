import api from './api';

const errorHandling = (error) => {
  if (error.response) {
    const httpErrorMessage = error.response.data.message;
    throw new Error(httpErrorMessage);
  }
  throw new Error('Error verifique sua conexão!');
};

export const getMenu = async () => {
  try {
    const menu = await api.get('/cardapio/last');

    return menu;
  } catch (error) {
    return errorHandling(error);
  }
};

export const getMenuRating = async (id) => {
  try {
    const menuRating = await api.get(`cardapio/avg/${id}`);

    return menuRating;
  } catch (error) {
    return errorHandling(error);
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
    if (error.response) {
      const errorMessage = error.response.data.error;
      throw Error(errorMessage);
    }
    throw Error('error');
  }
};

export const getNews = async () => {
  try {
    const response = await api.get('/noticias?page=1');

    return response.data.news;
  } catch (error) {
    return errorHandling(error);
  }
};

export const verifyRegistration = async (registration) => {
  try {
    const response = await api.get(`/alunos/findMatricula/${registration}`);

    return response.data;
  } catch (error) {
    return errorHandling(error);
  }
};

export const verifyEmailExists = async (email) => {
  try {
    const response = await api.get(`/alunos/findEmail/${email}`);

    return response.data;
  } catch (error) {
    return errorHandling(error);
  }
};

export const createUser = async (user) => {
  try {
    const response = await api.post('/alunos', user);
    const { student, auth } = response.data;

    return { student, auth };
  } catch (error) {
    return errorHandling(error);
  }
};

export const singIn = async (email, password) => {
  try {
    const response = await api.post('/loginApp', { email, password });
    const { student, auth } = response.data;

    return { student, auth };
  } catch (error) {
    return errorHandling(error);
  }
};

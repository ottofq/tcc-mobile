/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import React, { createContext, useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import produce from 'immer';

import { createStudent } from '../../services';

import USER_INITIAL_STATE from './initialStateStudent';

const UserContext = createContext({
  user: {},
  dispatch: () => {},
});

function userReducer(state, action) {
  switch (action.type) {
    case 'STUDENT:ADD_PROPS': {
      return { ...state, ...action.payload };
    }
    case 'STUDENT:RU_RATING_PAGE_1': {
      return produce(state, (draftState) => {
        draftState.avaliacao_RU.aroma = action.payload.avaliacao_RU.aroma;
        draftState.avaliacao_RU.coloracao_cardapio =
          action.payload.avaliacao_RU.coloracao_cardapio;
      });
    }
    case 'STUDENT:RU_RATING_PAGE_2': {
      return produce(state, (draftState) => {
        draftState.avaliacao_RU.textura_preparacao =
          action.payload.avaliacao_RU.textura_preparacao;
        draftState.avaliacao_RU.sabor_preparacao =
          action.payload.avaliacao_RU.sabor_preparacao;
      });
    }

    case 'STUDENT:LAST_STEP_FORM': {
      return produce(state, (draftState) => {
        draftState.avaliacao_RU.avaliacao_geral =
          action.payload.avaliacao_RU.avaliacao_geral;
        draftState.melhorias_RU.cardapio = action.payload.melhorias_RU.cardapio;
        draftState.melhorias_RU.melhoria_sabor_preparacao =
          action.payload.melhorias_RU.melhoria_sabor_preparacao;
        draftState.melhorias_RU.opcao_vegetariana =
          action.payload.melhorias_RU.opcao_vegetariana;
        draftState.melhorias_RU.estrutura_fisica =
          action.payload.melhorias_RU.estrutura_fisica;
        draftState.melhorias_RU.tempo_fila =
          action.payload.melhorias_RU.tempo_fila;
        draftState.melhorias_RU.preco_ticket =
          action.payload.melhorias_RU.preco_ticket;
        draftState.melhorias_RU.melhoria_outros =
          action.payload.melhorias_RU.melhoria_outros;
      });
    }

    case 'STUDENT:CLEAN_PROPS': {
      return produce(state, (draftState) => {
        Object.keys(draftState).forEach((item) => {
          if (draftState[item] === undefined) {
            delete draftState[item];
    }
        });
      });
    }
    case 'STUDENT:POST_API': {
      return produce(state, (draftState) => {
        draftState.id = action.payload.id;
      });
    }
    case 'STUDENT:LOAD_FROM_STORAGE': {
      return { ...state, ...action.payload };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export const UserProvider = ({ children }) => {
  const [user, dispatch] = useReducer(userReducer, USER_INITIAL_STATE);

  useEffect(() => {
    async function loadUserFromStorage() {
      const storageUser = await AsyncStorage.getItem('@APP_RU:user');

      if (storageUser) {
        const parseUser = JSON.parse(storageUser);
        dispatch({ type: 'STUDENT:LOAD_FROM_STORAGE', payload: parseUser });
      }
    }
    loadUserFromStorage();
  }, []);

  async function persistUser() {
    const userToString = JSON.stringify(user);
    await AsyncStorage.setItem('@APP_RU:user', userToString);
  }

  async function postStudent() {
    try {
      dispatch({ type: 'STUDENT:CLEAN_PROPS' });
      const response = await api.post('/alunos', user);
      const student = response.data;
      dispatch({ type: 'STUDENT:ADD_ID', payload: { id: student._id } });
      await persistUser();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <UserContext.Provider value={{ user, dispatch, postStudent }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UserContext;

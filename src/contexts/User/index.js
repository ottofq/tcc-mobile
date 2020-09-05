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
      return Object.assign(state, action.payload);
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
      return produce(state, (draftState) => {});
    }

    case 'STUDENT:ADD_PROPS_COMPLETE': {
      return state;
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export const UserProvider = ({ children }) => {
  const [user, dispatch] = useReducer(userReducer, USER_INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UserContext;
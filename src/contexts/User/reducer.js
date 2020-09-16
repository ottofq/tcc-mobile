/* eslint-disable no-param-reassign */
import produce from 'immer';

import USER_INITIAL_STATE from './initialStateStudent';

export default function reducer(state, action) {
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
    case 'STUDENT:ADD_ID': {
      return produce(state, (draftState) => {
        draftState.id = action.payload.id;
      });
    }
    case 'STUDENT:LOAD_FROM_STORAGE': {
      return { ...state, ...action.payload };
    }
    case 'STUDENT:LOGOUT': {
      return USER_INITIAL_STATE;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

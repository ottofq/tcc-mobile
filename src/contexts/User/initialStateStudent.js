const USER_INITIAL_STATE = {
  nome: '',
  matricula: '',
  data_nascimento: '',
  curso: '',
  ano_ingresso: '',
  sexo: '',
  bolsista: '',
  frequencia_RU: '',
  tipo_refeicao_RU: '',
  nivel_fisico: '',
  peso_ideal: false,
  alergias: {
    alergia_gluten: false,
    intolerancia_lactose: false,
    proteina_leite_vaca: false,
  },
  vegano_vegetariano: '',
  adiciona_sal: false,
  utiliza_oleo_composto: false,
  consome_bebida_alcoolica: '',
  tabagista: false,
  patologias: {
    doenca_cardiovascular: false,
    hipertensao_arterial: false,
    obesidade: false,
    dislipidemias: false,
    doenca_arterial_coronariana: false,
    diabetes: false,
  },
  patologias_familia: {
    fam_doenca_cardiovascular: false,
    fam_hipertensao: false,
    fam_obesidade: false,
    fam_dislipidemias: false,
    fam_doenca_arterial_coronariana: false,
    fam_diabetes: false,
  },

  avaliacao_RU: {
    aroma: '',
    coloracao_cardapio: '',
    textura_preparacao: '',
    sabor_preparacao: '',
    avaliacao_geral: '',
  },
  melhorias_RU: {
    cardapio: false,
    melhoria_sabor_preparacao: false,
    opcao_vegetariana: false,
    estrutura_fisica: false,
    tempo_fila: false,
    preco_ticket: false,
  },
};

export default USER_INITIAL_STATE;
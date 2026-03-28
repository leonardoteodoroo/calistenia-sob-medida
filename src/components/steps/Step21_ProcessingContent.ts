export type ProcessingTestimonial = {
  name: string;
  age: number;
  location: string;
  status: string;
  quote: string;
  image: string;
  altText: string;
};

export const PROCESSING_STEPS = [
  "Analisando seu perfil...",
  "Calculando grade de adaptação...",
  "Ajustando treinos para 15 minutos...",
  "Personalizando sua trilha inicial...",
] as const;

export const STEP_DURATION_MS = 1600;
export const PROCESSING_AUTO_ADVANCE_ENABLED = true;
export const COMPLETE_DELAY_MS = 1200;
export const PROCESSING_TOTAL_DURATION_MS =
  STEP_DURATION_MS * (PROCESSING_STEPS.length - 1) + COMPLETE_DELAY_MS;
export const PROCESSING_MARQUEE_LAYOUT = {
  mobileVisibleColumns: 4,
  desktopVisibleColumns: 4,
  cardWidthClassName: "w-32 sm:w-44",
  columnHeightClassName: "h-[24rem] sm:h-[27rem]",
  stackScaleClassName: "origin-top scale-[0.62] sm:scale-[0.92]",
} as const;

export const PROCESSING_TESTIMONIAL_COLUMNS: readonly ProcessingTestimonial[][] =
  [
    [
      {
        name: "Carla",
        age: 43,
        location: "SP",
        status: "Recuperou a energia",
        quote: "“Eu só tinha tempo pros outros.”",
        image:
          "/images/social-proof/carla_41_mulher_em_sala_de_estar_ao_lado_do_sof___e_tapete_no_ch__o__com_garrafinha_e_toalha__em_clima_de_treino_caseiro.webp",
        altText:
          "Mulher em sala de estar ao lado do sofá e tapete no chão, com garrafinha e toalha, em clima de treino caseiro.",
      },
      {
        name: "Juliana",
        age: 38,
        location: "BH",
        status: "Começou sem travar",
        quote: "“Sem equipamento, em casa.”",
        image:
          "/images/social-proof/mulher_em_espa__o_simples_de_casa_com_tapete_no_ch__o__preparando-se_para_treinar_sem_equipamentos_juliana_bh_treino_casa_3.webp",
        altText:
          "Mulher em espaço simples de casa com tapete no chão, preparando-se para treinar sem equipamentos.",
      },
      {
        name: "Jessica",
        age: 24,
        location: "BH",
        status: "Venceu a ansiedade",
        quote: "“Venci a Ansiedade”",
        image:
          "/images/social-proof/mulher_em_quarto_com_tapete_no_ch__o__em_clima_de_treino_caseiro__com_express__o_confiante_e_tranquila_jessica_bh_treino_quarto_confianca_1.webp",
        altText:
          "Mulher em quarto com tapete no chão, em clima de treino caseiro, com expressão confiante e tranquila.",
      },
    ],
    [
      {
        name: "Fernanda",
        age: 33,
        location: "RJ",
        status: "Postura e firmeza",
        quote: "“Minha postura mudou.”",
        image:
          "/images/social-proof/fernanda_33_mulher_sentada____mesa_com_notebook__em_um_ambiente_simples_de_apartamento__parecendo_ajustar_a_postura_de_forma_natural.webp",
        altText:
          "Mulher sentada à mesa com notebook, em um ambiente simples de apartamento, parecendo ajustar a postura de forma natural.",
      },
      {
        name: "Patrícia",
        age: 45,
        location: "Curitiba",
        status: "Evolução no ritmo",
        quote: "“Eu achava que não tinha força.”",
        image:
          "/images/social-proof/mulher_em_ambiente_dom__stico_usando_uma_cadeira_como_apoio_com_express__o_satisfeita__em_foto_simples_de_celular_patricia_curitiba_treino_cadeira_3.webp",
        altText:
          "Mulher em ambiente doméstico usando uma cadeira como apoio com expressão satisfeita.",
      },
      {
        name: "Mariana",
        age: 28,
        location: "RJ",
        status: "Ex-sedentária",
        quote: "“Superei a Preguiça”",
        image:
          "/images/social-proof/mulher_em_quarto_simples_ao_lado_de_um_celular_e_caderno__com_express__o_tranquila__em_foto_de_clima___ntimo_mariana_rj_consistencia_quarto_3.webp",
        altText:
          "Mulher em quarto simples ao lado de um celular e caderno, com expressão tranquila, em foto de clima íntimo.",
      },
    ],
    [
      {
        name: "Renata",
        age: 29,
        location: "Curitiba",
        status: "Encontrou o plano certo",
        quote: "“Achei o Plano Certo”",
        image:
          "/images/social-proof/mulher_em_sala_simples_segurando_um_celular_como_se_acompanhasse_um_treino__com_express__o_de_compreens__o_e_satisfa____o_renata_curitiba_calistenia_sob_medida_3_2_20260303_034827_3.webp",
        altText:
          "Mulher em sala simples segurando um celular como se acompanhasse um treino, com expressão de compreensão e satisfação.",
      },
      {
        name: "Camila",
        age: 29,
        location: "Goiânia",
        status: "Mais energia",
        quote: "“Energia melhorou no dia.”",
        image:
          "/images/social-proof/mulher_na_cozinha_em_luz_da_manh___segurando_uma_caneca_e_sorrindo__em_ambiente_simples_e_cotidiano_camila_goiania_rotina_manha_3.webp",
        altText:
          "Mulher na cozinha em luz da manhã segurando uma caneca e sorrindo, em ambiente simples e cotidiano.",
      },
      {
        name: "Tatiane",
        age: 38,
        location: "Florianópolis",
        status: "Se valorizou",
        quote: "“Me Priorizei”",
        image:
          "/images/social-proof/mulher_sentada_no_sof___em_sala_simples_com_celular_na_mesa__com_express__o_de_satisfa____o_e_autocuidado_tatiane_florianopolis_me_priorizei_3_2_20260303_035043_1.webp",
        altText:
          "Mulher sentada no sofá em sala simples com celular na mesa, com expressão de satisfação e autocuidado.",
      },
    ],
    [
      {
        name: "Bruna",
        age: 27,
        location: "Recife",
        status: "Aprendeu rotina",
        quote: "“Rotina Sólida”",
        image:
          "/images/social-proof/mulher_em_casa_com_tapete_no_ch__o_segurando_garrafinha__com_express__o_de_cansa__o_bom_ap__s_um_treino_bruna_recife_rotina_solida_pos_treino_3.webp",
        altText:
          "Mulher em casa com tapete no chão segurando garrafinha, com expressão de cansaço bom após um treino.",
      },
      {
        name: "Débora",
        age: 32,
        location: "Brasília",
        status: "Independência física",
        quote: "“Perdi o Medo de Falhar”",
        image:
          "/images/social-proof/mulher_em_sala_simples_ao_lado_de_tapete__em_postura_de_aquecimento__com_express__o_concentrada_e_confiante_debora_brasilia_aquecimento_confianca_3.webp",
        altText:
          "Mulher em sala simples ao lado de tapete, em postura de aquecimento, com expressão concentrada e confiante.",
      },
      {
        name: "Vanessa",
        age: 26,
        location: "Osasco, SP",
        status: "Trabalha sentada",
        quote: "“Sem Dor nas Costas”",
        image:
          "/images/social-proof/mulher_em_mesa_de_computador_simples_alongando_os_ombros__em_ambiente_de_casa__com_express__o_de_al__vio_vanessa_osasco_alivio_postural_3.webp",
        altText:
          "Mulher em mesa de computador simples alongando os ombros, em ambiente de casa, com expressão de alívio.",
      },
    ],
  ] as const;

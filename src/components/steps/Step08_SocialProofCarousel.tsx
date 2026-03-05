import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useReducedMotion,
} from "framer-motion";
import type { PanInfo, MotionValue } from "framer-motion";
import { ChevronLeft, ChevronRight, MoveRight } from "lucide-react";
import { Button } from "../ui/Button";

type StitchReview = {
  id: number;
  name: string;
  age: number;
  location: string;
  quote: string;
  detail: string;
  status: string;
  image?: string;
  altText?: string;
  initial: string;
  isTop?: boolean;
};

const reviews: StitchReview[] = [
  {
    id: 1,
    name: "Fernanda",
    age: 33,
    location: "RJ",
    quote: "“Minha postura mudou.”",
    detail: "Eu trabalho sentada. Em poucas semanas senti o core mais firme e menos desconforto no dia a dia.",
    status: "Postura e firmeza",
    image: "/images/social-proof/fernanda_33_mulher_sentada____mesa_com_notebook__em_um_ambiente_simples_de_apartamento__parecendo_ajustar_a_postura_de_forma_natural.webp",
    altText: "Mulher sentada à mesa com notebook, em um ambiente simples de apartamento, parecendo ajustar a postura de forma natural.",
    initial: "F",
  },
  {
    id: 2,
    name: "Carla",
    age: 43,
    location: "SP",
    quote: "“Eu só tinha tempo pros outros.”",
    detail: "Dona de casa não tem folga. Eu arrumava tudo e terminava o dia destruída. Quando vi que o treino durava 15 min do lado do sofá, resolvi tentar. Hoje tenho energia de sobra e as dores nas costas sumiram.",
    status: "Recuperou a energia",
    image: "/images/social-proof/carla_41_mulher_em_sala_de_estar_ao_lado_do_sof___e_tapete_no_ch__o__com_garrafinha_e_toalha__em_clima_de_treino_caseiro.webp",
    altText: "Mulher em sala de estar ao lado do sofá e tapete no chão, com garrafinha e toalha, em clima de treino caseiro.",
    initial: "C",
    isTop: true,
  },
  {
    id: 3,
    name: "Renata",
    age: 29,
    location: "Curitiba",
    quote: "“Achei o Plano Certo”",
    detail: "Já tentei 3 academias. Nenhuma me ensinou como me mover. Só peso irreal. Esse foi o primeiro plano que me fez entender meu corpo de verdade.",
    status: "Encontrou o plano certo",
    image: "/images/social-proof/mulher_em_sala_simples_segurando_um_celular_como_se_acompanhasse_um_treino__com_express__o_de_compreens__o_e_satisfa____o_renata_curitiba_calistenia_sob_medida_3_2_20260303_034827_3.webp",
    altText: "Mulher em sala simples segurando um celular como se acompanhasse um treino, com expressão de compreensão e satisfação.",
    initial: "R"
  },
  {
    id: 4,
    name: "Bruna",
    age: 27,
    location: "Recife",
    quote: "“Rotina Sólida”",
    detail: "Sou muito inconstante. Faltava academia de última hora… Aprendi treinos curtos e práticos. Hoje eu tenho rotina inegociável. E o corpo responde. Mudou tudo.",
    status: "Aprendeu rotina",
    image: "/images/social-proof/mulher_em_casa_com_tapete_no_ch__o_segurando_garrafinha__com_express__o_de_cansa__o_bom_ap__s_um_treino_bruna_recife_rotina_solida_pos_treino_3.webp",
    altText: "Mulher em casa com tapete no chão segurando garrafinha, com expressão de cansaço bom após um treino.",
    initial: "B"
  },
  {
    id: 5,
    name: "Gisele",
    age: 25,
    location: "Serra Negra, MG",
    quote: "“Sucesso em Casa”",
    detail: "Sem academia não dá resultado. Era o que eu acreditava. Mas descobri: quanto mais foco, menos desculpas. Sou a única do meu grupo que faz calistenia. Me sinto incrível.",
    status: "Referência",
    image: "/images/social-proof/mulher_em_varanda_ou_quintal_simples_segurando_um_tapete_de_treino__sorrindo_com_confian__a__em_foto_natural_gisele_serra_negra_sucesso_casa_3.webp",
    altText: "Mulher em varanda ou quintal simples segurando um tapete de treino, sorrindo com confiança, em foto natural.",
    initial: "G"
  },
  {
    id: 6,
    name: "Débora",
    age: 32,
    location: "Brasília",
    quote: "“Perdi o Medo de Falhar”",
    detail: "Eu tinha pavor de me machucar. Aprendi a me aquecer e alinhar postura. Hoje eu tento movimentos mais difíceis. O medo sumiu.",
    status: "Independência física",
    image: "/images/social-proof/mulher_em_sala_simples_ao_lado_de_tapete__em_postura_de_aquecimento__com_express__o_concentrada_e_confiante_debora_brasilia_aquecimento_confianca_3.webp",
    altText: "Mulher em sala simples ao lado de tapete, em postura de aquecimento, com expressão concentrada e confiante.",
    initial: "D"
  },
  {
    id: 7,
    name: "Juliana",
    age: 38,
    location: "BH",
    quote: "“Sem equipamento, em casa.”",
    detail: "Eu travava por achar que precisava de academia. O plano me fez começar com o que eu tinha.",
    status: "Começou sem travar",
    image: "/images/social-proof/mulher_em_espa__o_simples_de_casa_com_tapete_no_ch__o__preparando-se_para_treinar_sem_equipamentos_juliana_bh_treino_casa_3.webp",
    altText: "Mulher em espaço simples de casa com tapete no chão, preparando-se para treinar sem equipamentos.",
    initial: "J",
  },
  {
    id: 8,
    name: "Patrícia",
    age: 45,
    location: "Curitiba",
    quote: "“Eu achava que não tinha força.”",
    detail: "O plano respeitou meu nível. Eu evoluí sem me sentir ‘incapaz’.",
    status: "Evolução no ritmo",
    image: "/images/social-proof/mulher_em_ambiente_dom__stico_usando_uma_cadeira_como_apoio_com_express__o_satisfeita__em_foto_simples_de_celular_patricia_curitiba_treino_cadeira_3.webp",
    altText: "Mulher em ambiente doméstico usando uma cadeira como apoio com expressão satisfeita.",
    initial: "P",
  },
  {
    id: 9,
    name: "Camila",
    age: 29,
    location: "Goiânia",
    quote: "“Energia melhorou no dia.”",
    detail: "Eu vivia quebrada depois do almoço. Com os treinos curtos, minha disposição ficou mais estável.",
    status: "Mais energia",
    image: "/images/social-proof/mulher_na_cozinha_em_luz_da_manh___segurando_uma_caneca_e_sorrindo__em_ambiente_simples_e_cotidiano_camila_goiania_rotina_manha_3.webp",
    altText: "Mulher na cozinha em luz da manhã segurando uma caneca e sorrindo, em ambiente simples e cotidiano.",
    initial: "C",
  },
  {
    id: 10,
    name: "Mariana",
    age: 28,
    location: "Rio de Janeiro",
    quote: "“Superei a Preguiça”",
    detail: "Eu refazia as mesmas metas toda segunda. Chorava de frustração. Hoje eu entendo que consistência vence a motivação. E eu durmo tranquila.",
    status: "Ex-sedentária",
    image: "/images/social-proof/mulher_em_quarto_simples_ao_lado_de_um_celular_e_caderno__com_express__o_tranquila__em_foto_de_clima___ntimo_mariana_rj_consistencia_quarto_3.webp",
    altText: "Mulher em quarto simples ao lado de um celular e caderno, com expressão tranquila, em foto de clima íntimo.",
    initial: "M"
  },
  {
    id: 11,
    name: "Vanessa",
    age: 26,
    location: "Osasco, SP",
    quote: "“Sem Dor nas Costas”",
    detail: "Meu trabalho sentado estava me destruindo. O desespero bateu… Mas eu comecei a me mover. Hoje eu sei: Saúde não é brincadeira. É o sustento da minha vida.",
    status: "Trabalha sentada",
    image: "/images/social-proof/mulher_em_mesa_de_computador_simples_alongando_os_ombros__em_ambiente_de_casa__com_express__o_de_al__vio_vanessa_osasco_alivio_postural_3.webp",
    altText: "Mulher em mesa de computador simples alongando os ombros, em ambiente de casa, com expressão de alívio.",
    initial: "V"
  },
  {
    id: 12,
    name: "Jessica",
    age: 24,
    location: "Belo Horizonte",
    quote: "“Venci a Ansiedade”",
    detail: "Eu tremia pra ir treinar com os outros. Suava frio. Descobri que isso é ansiedade social. Hoje eu treino no meu quarto. E me sinto muito mais confiante.",
    status: "Venceu a ansiedade",
    image: "/images/social-proof/mulher_em_quarto_com_tapete_no_ch__o__em_clima_de_treino_caseiro__com_express__o_confiante_e_tranquila_jessica_bh_treino_quarto_confianca_1.webp",
    altText: "Mulher em quarto com tapete no chão, em clima de treino caseiro, com expressão confiante e tranquila.",
    initial: "J"
  },
  {
    id: 13,
    name: "Ana Paula",
    age: 31,
    location: "Salvador",
    quote: "“Treino Constante”",
    detail: "Eu odeio academia. Não gosto de postar foto. Nem de roupa fitness. E mesmo assim… Minha saúde melhorou só com disciplina em casa. Você não precisa ser influencer pra viver bem.",
    status: "Treina sem holofotes",
    image: "/images/social-proof/mulher_em_ambiente_de_casa_organizando_um_tapete_no_ch__o__vestindo_roupa_casual__em_foto_simples_de_celular_ana_paula_salvador_espontanea_varanda_3.webp",
    altText: "Mulher em ambiente de casa organizando um tapete no chão, vestindo roupa casual.",
    initial: "A"
  },
  {
    id: 14,
    name: "Luciana",
    age: 33,
    location: "Fortaleza",
    quote: "“Treino Sem Culpa”",
    detail: "Tenho 2 filhos pequenos. Vi a culpa bater ao tirar tempo pra mim. Hoje treino em casa. Faço enquanto eles dormem. E meus filhos estão ótimos com uma mãe saudável.",
    status: "Mãe em forma sem culpa",
    image: "/images/social-proof/mulher_em_sala_de_casa_com_tapete_no_ch__o_e_brinquedos_ao_fundo__em_clima_de_rotina_simples_e_treino_caseiro_luciana_fortaleza_mae_treino_casa_3.webp",
    altText: "Mulher em sala de casa com tapete no chão e brinquedos ao fundo, em clima de rotina simples e treino caseiro.",
    initial: "L"
  },
  {
    id: 15,
    name: "Tatiane",
    age: 38,
    location: "Florianópolis",
    quote: "“Me Priorizei”",
    detail: "Eu ajudava todo mundo em casa há 5 anos. Mas ganhava dores. O problema não era falta de tempo. Era prioridade. Hoje dedico 20 min só pra mim.",
    status: "Se valorizou",
    image: "/images/social-proof/mulher_sentada_no_sof___em_sala_simples_com_celular_na_mesa__com_express__o_de_satisfa____o_e_autocuidado_tatiane_florianopolis_me_priorizei_3_2_20260303_035043_1.webp",
    altText: "Mulher sentada no sofá em sala simples com celular na mesa, com expressão de satisfação e autocuidado.",
    initial: "T"
  },
  {
    id: 16,
    name: "Fabiana",
    age: 34,
    location: "Duque de Caxias, RJ",
    quote: "“Meu Corpo Responde Bem”",
    detail: "Eu achava que ninguém ia emagrecer fazendo isso. Mas aprendi: quanto mais controle do próprio corpo, maior a definição. Zero gasto com mensalidade.",
    status: "Corpo definido em casa",
    image: "/images/social-proof/mulher_em_casa_diante_de_um_espelho_ajustando_uma_roupa_comum__com_sorriso_discreto__em_foto_simples_de_celular_fabiana_duque_caxias_satisfacao_casa_3.webp",
    altText: "Mulher em casa diante de um espelho ajustando uma roupa comum, com sorriso discreto.",
    initial: "F"
  },
];

const DRAG_BUFFER = 10;
const VELOCITY_THRESHOLD = 50;



function StitchCardInner({ review, isCenter }: { review: StitchReview; isCenter: boolean }) {
  return (
    <div
      className={`bg-white h-full flex flex-col transition-shadow duration-300 ${isCenter ? "shadow-2xl border-2 border-emerald-100" : "shadow-xl border-2 border-transparent"
        }`}
    >
      <div className="relative overflow-hidden shrink-0 h-56 w-full">
        {review.image ? (
          <img
            alt={review.altText || `Foto de ${review.name}`}
            src={review.image}
            className="w-full h-full object-cover"
            loading={isCenter ? "eager" : "lazy"}
            decoding="async"
            width={900}
            height={560}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-50 to-emerald-100">
            <div className="w-20 h-20 rounded-full bg-emerald-200/60 flex items-center justify-center text-emerald-700 text-3xl font-black">
              {review.initial}
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="absolute left-5 bottom-5">
          <h3 className="text-white font-black text-xl leading-tight">
            {review.name}, {review.age}
          </h3>
          <p className="text-white/80 text-xs">{review.location}</p>
        </div>

        {review.isTop && (
          <div
            className={`absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg border border-white/30 transition-opacity duration-300 ${isCenter ? "opacity-100" : "opacity-0"
              }`}
          >
            <div className="flex items-center gap-1">
              <span className="text-yellow-300 text-sm">★</span>
              <span className="text-white text-xs font-black">Em destaque</span>
            </div>
          </div>
        )}
      </div>

      <div className="relative flex flex-col flex-1 p-5">
        <span
          className={`inline-flex items-center self-start px-3 py-1 rounded-full text-xs font-black mb-2 transition-colors duration-300 ${isCenter ? "bg-emerald-700 text-white" : "bg-emerald-50 text-emerald-700"
            }`}
        >
          {review.status}
        </span>

        <blockquote className="font-black mb-1 text-gray-900 leading-tight text-base">
          {review.quote}
        </blockquote>

        <p className="text-gray-600 text-xs leading-relaxed mt-1 flex-1">{review.detail}</p>
      </div>
    </div>
  );
}

function CarouselCard({
  index,
  review,
  x,
  gap,
  shouldReduceMotion,
  isMobile,
}: {
  index: number;
  review: StitchReview;
  x: MotionValue<number>;
  gap: number;
  shouldReduceMotion: boolean | null;
  isMobile: boolean;
}) {
  const position = useTransform(x, (currentX: number) => currentX + index * gap);

  const rotateY = useTransform(position, [-gap, 0, gap], shouldReduceMotion ? [0, 0, 0] : [22, 0, -22]);
  const scale = useTransform(position, [-gap, 0, gap], shouldReduceMotion ? [0.95, 1, 0.95] : [0.8, 1, 0.8]);
  const opacity = useTransform(position, [-gap * 1.5, 0, gap * 1.5], [0.4, 1, 0.4]);
  const blur = useTransform(position, [-gap, 0, gap], shouldReduceMotion ? [0, 0, 0] : isMobile ? [2, 0, 2] : [4, 0, 4]);
  const blurFilter = useTransform(blur, (v) => `blur(${v}px)`);
  const z = useTransform(position, (pos) => (shouldReduceMotion ? 0 : -Math.abs(pos) * 1.2));
  const translateX = useTransform(position, (pos) => pos * 0.6);

  const display = useTransform(position, (pos: number) => (Math.abs(pos) >= gap * 2.2 ? "none" : "block"));

  const [isCenter, setIsCenter] = useState(Math.abs(x.get() + index * gap) < gap * 0.5);
  useEffect(() => {
    const unsubscribe = x.on("change", (latestX) => {
      const currentPos = latestX + index * gap;
      setIsCenter(Math.abs(currentPos) < gap * 0.5);
    });
    return unsubscribe;
  }, [x, index, gap]);

  return (
    <motion.div
      className="absolute w-[250px] min-[375px]:w-[280px] min-h-[380px] md:min-h-[420px] h-auto max-w-[85vw] rounded-[24px] pointer-events-none will-change-transform"
      style={{
        x: translateX,
        rotateY,
        scale,
        opacity,
        z,
        display,
        zIndex: useTransform(position, (pos) => 100 - Math.round(Math.abs(pos))),
      }}
    >
      <motion.div
        className="w-full h-full rounded-[24px] overflow-hidden bg-white relative"
        style={{ filter: shouldReduceMotion ? "none" : blurFilter }}
      >
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/40 via-transparent to-black/5 pointer-events-none z-50 rounded-[24px]" />
        <StitchCardInner review={review} isCenter={isCenter} />
      </motion.div>
    </motion.div>
  );
}

export function Step08_SocialProofCarousel({
  onContinue,
}: {
  onContinue: () => void;
}) {
  const [gap, setGap] = useState(290);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setGap(window.innerWidth < 768 ? 250 : 290);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [activeIndex, setActiveIndex] = useState(1);
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(-activeIndex * gap);
  const prevGap = useRef(gap);

  useEffect(() => {
    if (prevGap.current !== gap) {
      x.stop();
      x.set(-activeIndex * gap);
      prevGap.current = gap;
    }
  }, [gap, activeIndex, x]);

  const jumpTo = (idx: number) => {
    setActiveIndex(idx);
    animate(x, -idx * gap, { type: "spring", stiffness: 300, damping: 30 });
  };

  const nextSlide = () => jumpTo((activeIndex + 1) % reviews.length);
  const prevSlide = () => jumpTo((activeIndex - 1 + reviews.length) % reviews.length);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) nextSlide();
    else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) prevSlide();
    else jumpTo(activeIndex);
  };

  const handlePan = (_: Event, info: PanInfo) => {
    x.set(x.get() + info.delta.x);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, gap]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <section className="w-full py-4 lg:py-8 relative bg-[#f8f6f6]" style={{ overflowX: "hidden" }}>
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-emerald-50/60 to-transparent pointer-events-none -z-10" />
        <div className="absolute -left-20 top-40 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl -z-10" />
        <div className="absolute -right-20 top-20 w-80 h-80 bg-emerald-100/20 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6 relative z-20">

              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">
                Gente comum, resultado real{" "}
                <span className="text-[#ee2b5b] relative inline-block">
                  sem drama
                  <svg
                    className="absolute w-full h-3 -bottom-1 left-0 text-rose-300"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 10"
                  >
                    <path
                      d="M0 5 Q 50 10 100 5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                  </svg>
                </span>
              </h2>

              <p className="text-lg text-gray-600 max-w-md">
                Quando o treino respeita o seu nível e dura só 15 minutinhos na sala de casa, a consistência deixa de ser um sacrifício. Olha o que acontece na prática...
              </p>

              <div className="flex items-center gap-4 pt-2">
                <div className="flex -space-x-3">
                  {reviews.slice(0, 3).map((r) => (
                    <div
                      key={r.id}
                      className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-emerald-100 flex-shrink-0"
                    >
                      {r.image ? (
                        <img src={r.image} alt={r.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-emerald-100 text-emerald-700 font-bold">
                          {r.initial}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="text-emerald-700 font-black">Depoimentos</span> de gente comum. Em casa. Sem equipamento.
                </div>
              </div>

              <div className="hidden md:flex gap-4 mt-4 w-max">
                <div className="flex gap-4 items-center">
                  <button
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:bg-emerald-50 hover:border-emerald-200 transition-all group shadow-sm active:scale-95"
                    aria-label="Card anterior"
                    type="button"
                  >
                    <ChevronLeft className="text-gray-500 group-hover:text-emerald-700" size={24} />
                  </button>

                  <div className="flex gap-2 items-center">
                    {reviews.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => jumpTo(i)}
                        aria-label={`Ir para depoimento ${i + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? "w-6 bg-emerald-700" : "w-2 bg-gray-300 hover:bg-emerald-300"
                          }`}
                        type="button"
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextSlide}
                    className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:bg-emerald-50 hover:border-emerald-200 transition-all group shadow-sm active:scale-95"
                    aria-label="Próximo card"
                    type="button"
                  >
                    <ChevronRight className="text-gray-500 group-hover:text-emerald-700" size={24} />
                  </button>
                </div>
              </div>

              <div className="hidden md:flex flex-col items-start gap-2 mt-6">
                <Button
                  variant="strong"
                  size="lg"
                  onClick={onContinue}
                  className="rounded-full w-max text-sm gap-2 uppercase tracking-wide"
                >
                  Ok. Quero continuar <MoveRight size={18} />
                </Button>
                <p className="text-xs text-gray-400 font-medium pl-1">
                  Garantia de 7 dias — sem burocracia.
                </p>
              </div>
            </div>

            <div className="relative flex flex-col items-center justify-center overflow-visible">
              <div
                className="relative h-[480px] md:h-[520px] w-full flex items-center justify-center touch-pan-y select-none"
                style={{ perspective: 1000 }}
              >
                <motion.div
                  className="absolute inset-0 z-50 cursor-grab active:cursor-grabbing touch-pan-y"
                  onPan={handlePan}
                  onPanEnd={handleDragEnd}
                  whileTap={{ cursor: "grabbing" }}
                />

                {reviews.map((review, i) => (
                  <CarouselCard
                    key={review.id}
                    index={i}
                    review={review}
                    x={x}
                    gap={gap}
                    shouldReduceMotion={shouldReduceMotion}
                    isMobile={isMobile}
                  />
                ))}
              </div>

              <div className="flex md:hidden flex-col items-center mt-6 gap-4 relative z-50 pointer-events-none w-full px-4">
                <div className="flex justify-between items-center w-full max-w-xs pointer-events-auto">
                  <button
                    onClick={prevSlide}
                    aria-label="Card anterior"
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white/90 backdrop-blur-sm transition-all hover:bg-white shadow-sm active:scale-95 text-emerald-700"
                    type="button"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <div className="flex gap-1.5 items-center">
                    {reviews.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => jumpTo(i)}
                        aria-label={`Ir para depoimento ${i + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? "w-5 bg-emerald-700" : "w-1.5 bg-gray-300"
                          }`}
                        type="button"
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextSlide}
                    aria-label="Próximo card"
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white/90 backdrop-blur-sm transition-all hover:bg-white shadow-sm active:scale-95 text-emerald-700"
                    type="button"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                <div className="flex flex-col items-center gap-2 mt-2 pointer-events-auto w-full">
                  <Button
                    variant="strong"
                    size="lg"
                    fullWidth
                    onClick={onContinue}
                    className="rounded-full gap-2 uppercase tracking-wide text-sm"
                  >
                    Ok. Quero continuar <MoveRight size={18} />
                  </Button>
                  <p className="text-xs text-gray-400 font-medium">Garantia de 7 dias — sem burocracia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

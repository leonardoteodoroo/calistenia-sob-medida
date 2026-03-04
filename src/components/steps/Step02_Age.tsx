
import { motion } from "framer-motion"
import { OptionCard } from "../ui/OptionCard"
import img1829 from "../../assets/images/mulher_jovem_em_casa_segurando_um_tapete_de_yoga__com_olhar_determinado_e_ambiente_minimalista_18_29_setp02.webp"
import img2939 from "../../assets/images/mulher_adulta_em_sala_de_casa__com_roupa_de_treino_confort__vel__garrafa_de___gua_e_t__nis_ao_lado__pronta_para_come__ar_29_39_step02.webp"
import img3959 from "../../assets/images/mulher_madura_em_casa__com_roupa_de_treino_discreta_e_express__o_serena__transmitindo_confian__a_e_bem-estar_39_59_step02.webp"
import img60 from "../../assets/images/mulher_60__em_casa_fazendo_um_alongamento_leve_com_postura_segura__em_ambiente_claro_e_acolhedor_60_setp2.webp"

interface StepProps {
  onNext: (data: string) => void
}

const options = [
  {
    value: "18-29",
    label: "18 - 29 anos",
    src: img1829,
    alt: "Mulher jovem em casa segurando tapete de yoga, olhar determinado",
  },
  {
    value: "29-39",
    label: "29 - 39 anos",
    src: img2939,
    alt: "Mulher adulta em sala de casa com roupa de treino, garrafa d'água e tênis, pronta para começar",
  },
  {
    value: "39-59",
    label: "39 - 59 anos",
    src: img3959,
    alt: "Mulher madura em casa com roupa de treino discreta, expressão serena e confiante",
  },
  {
    value: "60+",
    label: "+ 60 anos",
    src: img60,
    alt: "Mulher com 60 anos fazendo alongamento leve em casa, postura segura em ambiente acolhedor",
  },
]

export function Step02_Age({ onNext }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-8 w-full max-w-2xl mx-auto pt-2 pb-8"
    >
      <header className="space-y-3 text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-text-primary">
          Desafio específico para sua idade e objetivo:
        </h2>
        <p className="text-text-secondary text-base">Escolha uma opção abaixo:</p>
      </header>

      {/* Sempre 2 colunas — funciona bem em 390px */}
      <div className="grid grid-cols-2 gap-4">
        {options.map((opt) => (
          <OptionCard
            key={opt.value}
            title={opt.label}
            onSelect={() => onNext(opt.value)}
            hideIndicator
          >
            <img
              src={opt.src}
              alt={opt.alt}
              width={320}
              height={180}
              loading="lazy"
              decoding="async"
              className="w-full object-cover aspect-[16/9]"
            />
          </OptionCard>
        ))}
      </div>
    </motion.div>
  )
}

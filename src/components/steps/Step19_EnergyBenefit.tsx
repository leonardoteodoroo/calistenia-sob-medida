import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import type { StepProps } from "../../types";
import imgEnergia from "../../assets/images/mulher_adulta_em_casa_com_luz_da_manh____respirando_fundo_e_sorrindo_ap__s_treino__com_tapete_e_garrafa_de___gua_ao_fundo_calestina_da_energia.webp";

export function Step19_EnergyBenefit({ onNext }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col w-full max-w-md mx-auto pt-2 pb-8 text-center"
    >
      <div
        className="mb-8 rounded-2xl overflow-hidden shadow-card border border-border-subtle relative"
        style={{ aspectRatio: "1/1" }}
      >
        <img
          src={imgEnergia}
          alt="Mulher adulta em casa com luz da manhã, respirando fundo e sorrindo após treino, com tapete e garrafa d'água"
          width={320}
          height={320}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <header className="space-y-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-text-primary leading-tight">
          A calistenia vai te ajudar a se sentir com mais energia
        </h2>

        <p className="text-text-secondary leading-relaxed">
          Esses exercícios fortalecem seus músculos, núcleo e aumentam a
          consciência corporal.
        </p>

        <p className="text-text-primary font-bold">
          Queremos que você viva sua vida ao máximo!
        </p>
      </header>

      <Button onClick={() => onNext()} fullWidth size="lg">
        CONTINUAR
      </Button>
    </motion.div>
  );
}

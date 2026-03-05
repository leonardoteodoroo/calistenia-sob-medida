import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import imgVoceVaiArrasar from "../../assets/images/mulher_adulta_em_casa_sorrindo_ap__s_um_treino_leve_no_tapete__com_gesto_discreto_de_vit__ria voce vai arrasar.webp";

interface StepProps {
  onNext: () => void;
}

export function Step05_Motivation({ onNext }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col gap-8 w-full max-w-lg mx-auto pt-2 pb-8 text-center"
    >
      {/* Imagem editorial — retângulo de borda suave, largura total */}
      <motion.div
        initial={{ scale: 1.04, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full rounded-2xl overflow-hidden shadow-card-hover"
        style={{ aspectRatio: "4/3" }}
      >
        <img
          src={imgVoceVaiArrasar}
          alt="Mulher adulta em casa sorrindo após treino leve, com gesto de vitória"
          width={640}
          height={480}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      <div className="space-y-4">
        <h2 className="text-4xl md:text-5xl font-heading font-black text-strong">
          Você vai arrasar!
        </h2>
        <p className="text-lg text-text-secondary leading-relaxed px-2">
          Nosso programa de calistenia é uma opção de fitness fácil e eficaz
          para todos os níveis. Ajudamos você a entrar em forma usando nenhum
          equipamento em casa!
        </p>
      </div>

      <div className="w-full">
        <Button
          size="lg"
          variant="strong"
          fullWidth
          onClick={onNext}
          className="shadow-cta"
        >
          CONTINUAR
        </Button>
      </div>
    </motion.div>
  );
}

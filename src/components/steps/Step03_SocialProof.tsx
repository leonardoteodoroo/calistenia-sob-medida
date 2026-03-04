
import { motion } from "framer-motion"
import { Button } from "../ui/Button"
import imgSocialProof from "../../assets/images/mosaico_editorial_com_mulheres_diversas_em_casa__sorrindo_e_confiantes__com_espa__o_livre_para_inserir_mensagem_de_prova_social.webp"
import imgEditorial from "../../assets/images/calistenia_sob_media_editorial.webp"

interface StepProps {
  onNext: () => void
}

export function Step03_SocialProof({ onNext }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-8 w-full max-w-lg mx-auto py-8"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
        className="w-full rounded-3xl overflow-hidden shadow-lg border-4 border-surface-subtle"
      >
        <img
          src={imgSocialProof}
          alt="Mosaico editorial com mulheres diversas em casa, sorrindo e confiantes"
          width={800}
          height={256}
          loading="lazy"
          decoding="async"
          className="w-full h-64 object-cover object-center"
        />
      </motion.div>

      <div className="text-center space-y-4">
        <motion.h2
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
          className="text-5xl md:text-6xl font-heading font-black text-primary"
        >
          Mais de 600 mil
        </motion.h2>
        <p className="text-xl text-text-secondary font-medium px-4">
          É o número de mulheres que nós já ajudamos através desse teste
        </p>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="w-full"
      >
        <Button size="lg" variant="strong" fullWidth onClick={onNext} className="mt-4 shadow-cta">
          CONTINUAR
        </Button>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 w-full rounded-3xl overflow-hidden shadow-md border-2 border-surface-subtle"
        >
          <img
            src={imgEditorial}
            alt="Editorial da Calistenia Sob Medida"
            width={800}
            height={256}
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-cover object-center bg-surface-section"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

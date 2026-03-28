import { useState } from "react";
import { motion } from "motion/react";
import { CreditCard, Lock, Check } from "lucide-react";

export default function Checkout({ onNext }: { onNext: () => void }) {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = () => {
    setIsProcessing(true);
    setTimeout(() => {
      onNext();
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex-1 flex flex-col bg-[#111111] p-6"
    >
      <div className="pt-6 pb-6 border-b border-white/10 mb-6">
        <h1 className="text-2xl font-bold text-white mb-2">Finalizar Compra</h1>
        <p className="text-gray-400 text-sm">Ambiente 100% seguro.</p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6 flex justify-between items-center">
        <div>
          <h3 className="text-white font-medium">Desafio 25 Dias</h3>
          <p className="text-cyan-400 text-sm">Acesso Imediato</p>
        </div>
        <div className="text-right">
          <p className="text-white font-bold text-xl">R$ 47,00</p>
        </div>
      </div>

      <div className="space-y-4 mb-8 flex-1">
        <div>
          <label className="block text-xs text-gray-400 mb-1 ml-1">
            Nome Completo
          </label>
          <input
            type="text"
            placeholder="Seu nome"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
            defaultValue="Sarah"
          />
        </div>
        <div>
          <label className="block text-xs text-gray-400 mb-1 ml-1">
            E-mail
          </label>
          <input
            type="email"
            placeholder="seu@email.com"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
            defaultValue="sarah@exemplo.com"
          />
        </div>

        <div className="pt-4">
          <div className="flex items-center gap-2 mb-4">
            <CreditCard className="w-5 h-5 text-gray-400" />
            <h3 className="text-white font-medium">Dados do Cartão</h3>
          </div>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Número do Cartão"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
              defaultValue="•••• •••• •••• 1234"
            />
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="MM/AA"
                className="w-1/2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                defaultValue="12/29"
              />
              <input
                type="text"
                placeholder="CVC"
                className="w-1/2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                defaultValue="•••"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-4">
        <button
          onClick={handleCheckout}
          disabled={isProcessing}
          className="w-full bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-500/50 text-black font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95"
        >
          {isProcessing ? (
            <div className="w-5 h-5 rounded-full border-2 border-black border-t-transparent animate-spin" />
          ) : (
            <>
              <Lock className="w-5 h-5" />
              Pagar R$ 47,00
            </>
          )}
        </button>
        <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center gap-1">
          <Check className="w-3 h-3" /> Compra segura via Stripe/Hotmart
        </p>
      </div>
    </motion.div>
  );
}

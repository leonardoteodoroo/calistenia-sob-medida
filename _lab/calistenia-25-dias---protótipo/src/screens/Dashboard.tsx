import { useState } from "react";
import { motion } from "motion/react";
import {
  Play,
  Calendar,
  Utensils,
  Info,
  CheckCircle2,
  Flame,
  Trophy,
  ArrowRight,
  Lock,
} from "lucide-react";

export default function Dashboard({
  answers,
  onNavigate,
}: {
  answers: Record<string, string>;
  onNavigate: (screen: string) => void;
}) {
  const [activeTab, setActiveTab] = useState("home");
  const [workoutCompleted, setWorkoutCompleted] = useState(false);

  const goalText =
    answers.goal === "weight_loss"
      ? "Emagrecer"
      : answers.goal === "muscle_gain"
        ? "Ganhar Massa"
        : "Saúde";

  const handleCompleteWorkout = () => {
    setWorkoutCompleted(true);
    // In a real app, trigger confetti here
  };

  return (
    <div className="flex-1 flex flex-col bg-[#111111] overflow-hidden">
      {/* Content Area */}
      <div className="flex-1 overflow-y-auto pb-24">
        {activeTab === "home" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-6"
          >
            <div className="flex justify-between items-center mb-8 pt-4">
              <div>
                <p className="text-gray-400 text-sm">Bom dia, Sarah</p>
                <h1 className="text-2xl font-bold text-white">
                  Pronta para hoje?
                </h1>
              </div>
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                <span className="text-lg">👩</span>
              </div>
            </div>

            {/* Motivational Banner based on Quiz */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-2xl p-4 mb-8 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-cyan-400/20 flex items-center justify-center flex-shrink-0">
                <Flame className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <p className="text-white font-medium text-sm">
                  Foco: {goalText}
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Lembre-se do seu objetivo. 15 min é tudo que você precisa.
                </p>
              </div>
            </div>

            {/* Progress Ring / Streak */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-white">Treino do Dia</h2>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                <Trophy className="w-4 h-4 text-yellow-500" />
                <span className="text-xs font-medium text-white">
                  Dia 1 de 25
                </span>
              </div>
            </div>

            {/* Workout Card */}
            <div className="relative rounded-3xl overflow-hidden mb-8 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop"
                alt="Workout"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-1 bg-cyan-500 text-black text-[10px] font-bold uppercase tracking-wider rounded-md">
                    CORE & MOBILIDADE
                  </span>
                  <span className="text-gray-300 text-xs font-medium">
                    14 MIN
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  Despertar do Corpo
                </h3>

                {!workoutCompleted ? (
                  <button
                    onClick={handleCompleteWorkout}
                    className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95"
                  >
                    <Play className="w-5 h-5 fill-black" />
                    START WORKOUT
                  </button>
                ) : (
                  <div className="w-full bg-green-500/20 border border-green-500/50 text-green-400 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    TREINO CONCLUÍDO!
                  </div>
                )}
              </div>
            </div>

            {/* Locked Future Workouts */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                Próximos Dias
              </h3>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 opacity-50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-black/50 flex items-center justify-center">
                    <span className="text-gray-500 font-bold">02</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">
                      Membros Inferiores
                    </h4>
                    <p className="text-gray-500 text-xs">16 min</p>
                  </div>
                </div>
                <Lock className="w-4 h-4 text-gray-500" />
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 opacity-50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-black/50 flex items-center justify-center">
                    <span className="text-gray-500 font-bold">03</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Cardio HIIT Leve</h4>
                    <p className="text-gray-500 text-xs">12 min</p>
                  </div>
                </div>
                <Lock className="w-4 h-4 text-gray-500" />
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "progress" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-6 pt-12 text-center"
          >
            <Calendar className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">
              Seu Progresso
            </h2>
            <p className="text-gray-400">
              Acompanhe sua ofensiva de treinos aqui.
            </p>
            {/* Placeholder for calendar/heatmap */}
            <div className="mt-8 bg-white/5 border border-white/10 rounded-3xl p-6">
              <div className="text-4xl font-bold text-white mb-2">
                {workoutCompleted ? "1" : "0"}
              </div>
              <p className="text-gray-400 text-sm">Dias Seguidos</p>
            </div>
          </motion.div>
        )}

        {activeTab === "nutrition" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-6 pt-12 text-center"
          >
            <Utensils className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">
              Hub Nutricional
            </h2>
            <p className="text-gray-400">
              Seu cardápio simples baseado no seu peso.
            </p>
            <div className="mt-8 bg-white/5 border border-white/10 rounded-3xl p-6 text-left">
              <h3 className="text-white font-bold mb-4">
                Cardápio Base Liberado
              </h3>
              <button className="w-full bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-4 rounded-xl flex items-center justify-between transition-colors">
                <span>Baixar PDF</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Bottom Navigation Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#111111]/90 backdrop-blur-xl border-t border-white/10 pb-6">
        <div className="flex justify-around items-center p-4">
          <button
            onClick={() => setActiveTab("home")}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === "home" ? "text-cyan-400" : "text-gray-500 hover:text-gray-400"}`}
          >
            <Play
              className={`w-6 h-6 ${activeTab === "home" ? "fill-cyan-400/20" : ""}`}
            />
            <span className="text-[10px] font-medium">Hoje</span>
          </button>

          <button
            onClick={() => setActiveTab("progress")}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === "progress" ? "text-cyan-400" : "text-gray-500 hover:text-gray-400"}`}
          >
            <Calendar
              className={`w-6 h-6 ${activeTab === "progress" ? "fill-cyan-400/20" : ""}`}
            />
            <span className="text-[10px] font-medium">Progresso</span>
          </button>

          <button
            onClick={() => setActiveTab("nutrition")}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === "nutrition" ? "text-cyan-400" : "text-gray-500 hover:text-gray-400"}`}
          >
            <Utensils
              className={`w-6 h-6 ${activeTab === "nutrition" ? "fill-cyan-400/20" : ""}`}
            />
            <span className="text-[10px] font-medium">Nutrição</span>
          </button>

          <button
            onClick={() => onNavigate("notes")}
            className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-400 transition-colors"
          >
            <Info className="w-6 h-6" />
            <span className="text-[10px] font-medium">Notas</span>
          </button>
        </div>
      </div>
    </div>
  );
}

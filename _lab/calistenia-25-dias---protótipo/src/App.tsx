import { useEffect, useState } from "react";
import Landing from "./screens/Landing";
import Quiz from "./screens/Quiz";
import Processing from "./screens/Processing";
import Result from "./screens/Result";
import Offer from "./screens/Offer";
import Checkout from "./screens/Checkout";
import Onboarding from "./screens/Onboarding";
import Dashboard from "./screens/Dashboard";
import Notes from "./screens/Notes";
import HeroLab from "./screens/HeroLab";

const SCREENS = [
  "landing",
  "hero-lab",
  "quiz",
  "processing",
  "result",
  "offer",
  "checkout",
  "onboarding",
  "dashboard",
  "notes",
] as const;

type ScreenName = (typeof SCREENS)[number];

function getInitialScreen(): ScreenName {
  const hash = window.location.hash.replace("#", "");
  return SCREENS.includes(hash as ScreenName)
    ? (hash as ScreenName)
    : "landing";
}

export default function App() {
  const [currentScreen, setCurrentScreen] =
    useState<ScreenName>(getInitialScreen);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});

  useEffect(() => {
    const onHashChange = () => {
      setCurrentScreen(getInitialScreen());
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const navigate = (screen: ScreenName) => {
    setCurrentScreen(screen);
    const nextHash = screen === "landing" ? "" : `#${screen}`;
    const nextUrl = `${window.location.pathname}${window.location.search}${nextHash}`;
    window.history.replaceState(null, "", nextUrl);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-cyan-500/30 flex justify-center">
      {/* Mobile Container */}
      <div className="w-full max-w-md min-h-screen relative overflow-hidden flex flex-col bg-[#111111] shadow-2xl shadow-black/50 border-x border-white/5">
        {currentScreen === "landing" && (
          <Landing onNext={() => navigate("quiz")} />
        )}
        {currentScreen === "hero-lab" && (
          <HeroLab
            onBack={() => navigate("landing")}
            onUseDirection={() => navigate("quiz")}
          />
        )}
        {currentScreen === "quiz" && (
          <Quiz
            onComplete={(answers) => {
              setQuizAnswers(answers);
              navigate("processing");
            }}
          />
        )}
        {currentScreen === "processing" && (
          <Processing onComplete={() => navigate("result")} />
        )}
        {currentScreen === "result" && (
          <Result answers={quizAnswers} onNext={() => navigate("offer")} />
        )}
        {currentScreen === "offer" && (
          <Offer answers={quizAnswers} onNext={() => navigate("checkout")} />
        )}
        {currentScreen === "checkout" && (
          <Checkout onNext={() => navigate("onboarding")} />
        )}
        {currentScreen === "onboarding" && (
          <Onboarding
            answers={quizAnswers}
            onNext={() => navigate("dashboard")}
          />
        )}
        {currentScreen === "dashboard" && (
          <Dashboard answers={quizAnswers} onNavigate={navigate} />
        )}
        {currentScreen === "notes" && <Notes onNavigate={navigate} />}
      </div>
    </div>
  );
}

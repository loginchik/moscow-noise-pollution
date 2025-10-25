import IntroductionContainer from "./elements/Introduction.tsx";
import NoisePollutionGeneralContainer from "./elements/NoisePollutionGeneral.tsx";
import MoscowContainer from "./elements/Moscow.tsx";
import HowToTurnDownContainer from "./elements/HowToTurnDown.tsx";
import {clsx} from "clsx";
import DiscoverMore from "./elements/DiscoverMore.tsx";
import SquareAutomaton from "./elements/NoiseAnimation.tsx";


const App = () => {
  return (
    <>
        <SquareAutomaton reversed={false} />
        <main className={clsx("max-w-2xl", "mx-auto", "max-md:mx-7", "my-15")}>
            <IntroductionContainer />
            <NoisePollutionGeneralContainer />
            <MoscowContainer />
            <HowToTurnDownContainer />
            <DiscoverMore />
        </main>
        <footer className={clsx("w-full")}>
            <div className={clsx("max-w-xl", "mx-auto", "border-t-1", "pt-4", "-mb-20", "z-10", "relative")}>
                <div className={clsx("flex", "flex-row", "justify-between", "max-md:mx-7")}>
                    <p>Anna Loginova</p>
                    <p>25/10/2025</p>
                </div>
            </div>
            <SquareAutomaton reversed={true} />
        </footer>
    </>
  )
}

export default App;

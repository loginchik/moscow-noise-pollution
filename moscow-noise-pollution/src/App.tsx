import IntroductionContainer from "./elements/Introduction.tsx";
import NoisePollutionGeneralContainer from "./elements/NoisePollutionGeneral.tsx";
import MoscowContainer from "./elements/Moscow.tsx";
import HowToTurnDownContainer from "./elements/HowToTurnDown.tsx";
import {clsx} from "clsx";
import DiscoverMore from "./elements/DiscoverMore.tsx";


const App = () => {
  return (
    <>
        <main className={clsx("max-w-2xl", "mx-auto", "max-md:mx-7", "my-15")}>
            <IntroductionContainer />
            <NoisePollutionGeneralContainer />
            <MoscowContainer />
            <HowToTurnDownContainer />
            <DiscoverMore />
        </main>
        <footer>
            <div className={clsx("max-w-xl", "mx-auto", "border-t-1", "pt-4", "mb-8")}>
                <div className={clsx("flex", "flex-row", "justify-between")}>
                    <p>Anna Loginova</p>
                    <p>25/10/2025</p>
                </div>
            </div>
        </footer>
    </>
  )
}

export default App;

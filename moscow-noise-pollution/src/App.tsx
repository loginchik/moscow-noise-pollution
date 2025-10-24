import IntroductionContainer from "./elements/Introduction.tsx";
import NoisePollutionGeneralContainer from "./elements/NoisePollutionGeneral.tsx";
import MoscowContainer from "./elements/Moscow.tsx";
import HowToTurnDownContainer from "./elements/HowToTurnDown.tsx";
import {clsx} from "clsx";


const App = () => {
  return (
    <>
        <header>
        </header>
        <main className={clsx("max-w-2xl", "mx-auto", "max-md:mx-7", "my-15")}>
            <IntroductionContainer />
            <NoisePollutionGeneralContainer />
            <MoscowContainer />
            <HowToTurnDownContainer />
        </main>
        <footer>
            <a href={""}>
                <img src="./github-mark.png" width={40} height={40} />
            </a>
        </footer>
    </>
  )
}

export default App;

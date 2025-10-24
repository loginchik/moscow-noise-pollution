import IntroductionContainer from "./elements/Introduction.tsx";
import NoisePollutionGeneralContainer from "./elements/NoisePollutionGeneral.tsx";
import MoscowContainer from "./elements/Moscow.tsx";
import HowToTurnDownContainer from "./elements/HowToTurnDown.tsx";


const App = () => {
  return (
    <>
        <header>
            <h1>The Sound That Never Sleeps</h1>
        </header>
        <IntroductionContainer />
        <NoisePollutionGeneralContainer />
        <MoscowContainer />
        <HowToTurnDownContainer />
        <footer>
            <a href={""}>
                <img src="./github-mark.png" width={40} height={40} />
            </a>
        </footer>
    </>
  )
}

export default App;

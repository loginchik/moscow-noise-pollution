import './App.css';
import IntroductionContainer from "./elements/Introduction.tsx";
import NoisePollutionGeneralContainer from "./elements/NoisePollutionGeneral.tsx";
import MoscowContainer from "./elements/Moscow.tsx";
import HowToTurnDownContainer from "./elements/HowToTurnDown.tsx";


const App = () => {
  return (
    <>
        <IntroductionContainer />
        <NoisePollutionGeneralContainer />
        <MoscowContainer />
        <HowToTurnDownContainer />
    </>
  )
}

export default App;

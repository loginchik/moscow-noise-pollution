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
            <div>
                <h2>
                    Discover more
                </h2>
                <ul>
                    <li>
                        <a href="https://www.ted.com/talks/mathias_basner_why_noise_is_bad_for_your_health_and_what_you_can_do_about_it"
                           target="_blank" rel="noopener noreferrer">
                            Why noise is bad for your health — and what you can do about it / TED
                        </a>
                    </li>
                    <li className={clsx("list-disc")}>
                        <a href="https://education.nationalgeographic.org/resource/noise-pollution"
                           target="_blank" rel="noopener noreferrer">
                            Noise Pollution / National Geographic
                        </a>
                    </li>
                    <li className={clsx("list-disc")}>
                        <a href="https://noiseawareness.org/info-center/common-noise-levels"
                           target="_blank" rel="noopener noreferrer">
                            Common Noise Levels / International Noise Awareness Day
                        </a>
                    </li>
                    <li className={clsx("list-disc")}>
                        <a href="https://www.who.int/publications/i/item/burden-of-disease-from-environmental-noise-quantification-of-healthy-life-years-lost-in-europe"
                           target="_blank" rel="noopener noreferrer">
                            Burden of disease from environmental noise / WHO
                        </a>
                    </li>
                    <li className={clsx("list-disc")}>
                        <a href="https://cdn.who.int/media/docs/default-source/who-compendium-on-health-and-environment/who_compendium_noise_01042022.pdf"
                           target="_blank" rel="noopener noreferrer">
                            Environmental noise / WHO
                        </a>
                    </li>
                </ul>
            </div>
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

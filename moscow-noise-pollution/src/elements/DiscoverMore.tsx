import {clsx} from "clsx";

const DiscoverMore = () => {
    return (
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
    )
}

export default DiscoverMore;
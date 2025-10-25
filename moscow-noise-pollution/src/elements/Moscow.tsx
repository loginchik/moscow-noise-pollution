import {Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/react";
import {clsx} from "clsx";

const MoscowContainer = () => {
    return (
        <div>
            <h2>
                Moscow never sleeps
            </h2>
            <p>
                The&nbsp;Khodynka&nbsp;airport would&nbsp;be hardly possible to&nbsp;function in&nbsp;accordance
                with&nbsp;modern Moscow’s law&nbsp;of&nbsp;silence as&nbsp;it&nbsp;protects citizens against
                disturbance&nbsp;of&nbsp;their piece and quiet. The&nbsp;general rule is&nbsp;that it is&nbsp;prohibited
                to&nbsp;expose loud sounds in&nbsp;living areas, hospitals, hotels and other&nbsp;resting areas,
                near&nbsp;schools during&nbsp;the&nbsp;night — from&nbsp;11&nbsp;p.m. until&nbsp;7&nbsp;a.m, —
                at&nbsp;weekends and on&nbsp;holidays.
                The&nbsp;forbidden actions include playing musical instruments, turning&nbsp;on high&nbsp;volume on&nbsp;TV,
                shouting, use&nbsp;of&nbsp;pyrotechnics, repair, construction, loading and unloading works.
                Additionally, the&nbsp;law&nbsp;prohibits repair works from&nbsp;1&nbsp;p.m. until&nbsp;3&nbsp;p.m.
                and from&nbsp;7&nbsp;p.m. until&nbsp;9&nbsp;a.m.
            </p>
            <p>
                In&nbsp;2024, Muscovites reported&nbsp;on the&nbsp;noise 865&nbsp;times in&nbsp;total,
                and 214&nbsp;times of&nbsp;them were&nbsp;proved by&nbsp;the&nbsp;mobile monitoring results.
                By&nbsp;the&nbsp;end&nbsp;of&nbsp;August, in&nbsp;2025, citizens complained about&nbsp;the&nbsp;noise
                771&nbsp;times in&nbsp;total (64%&nbsp;percents more&nbsp;than during&nbsp;the&nbsp;same period in&nbsp;2024),
                and 214&nbsp;reports were&nbsp;proved violating noise regulations by&nbsp;the&nbsp;mobile monitoring results.
                The&nbsp;most&nbsp;frequent noise reason that&nbsp;dominates in&nbsp;both periods is&nbsp;construction work.
            </p>
            <div className={clsx('my-10')}>
                <img src={"./categories-results-2025.svg"} className={clsx('w-full', 'my-4')} />
                <Disclosure>
                    <DisclosureButton className={clsx( 'pb-2')}>
                        [i] About the data
                    </DisclosureButton>
                    <DisclosurePanel>
                        <p className={clsx('text-[0.9em]', 'bg-white', 'shadow-sm', 'p-4')}>
                            The&nbsp;source is&nbsp;the&nbsp;<a href="https://data.mos.ru/opendata/2449/description?version=1&release=100" target="_blank" rel="noreferrer noopener">results of&nbsp;noise level monitoring</a> on&nbsp;data
                            from&nbsp;mobile environmental
                            laboratories, which&nbsp;is&nbsp;publicly available on&nbsp;the&nbsp;Moscow government open&nbsp;data portal.
                            It&nbsp;contains results&nbsp;of&nbsp;monitoring conducted in&nbsp;response
                            to&nbsp;citizens complains&nbsp;about the&nbsp;noise.
                        </p>
                    </DisclosurePanel>
                </Disclosure>
            </div>
            <p>
                In&nbsp;2025, citizens complained about&nbsp;the&nbsp;loud&nbsp;sounds coming from&nbsp;the&nbsp;construction
                sites 533&nbsp;times. 30%&nbsp;of&nbsp;the&nbsp;monitoring results recorded the&nbsp;noise&nbsp;regulations violations,
                38%&nbsp;disapproved the&nbsp;reports, while in&nbsp;remaining 32%&nbsp;of&nbsp;cases mobile monitoring did&nbsp;not
                manage&nbsp;to&nbsp;locate the&nbsp;noise source (and, consequently, to&nbsp;evaluate the&nbsp;level of&nbsp;noise
                it&nbsp;exposes) as&nbsp;it was&nbsp;not&nbsp;present on&nbsp;the&nbsp;spot at&nbsp;the&nbsp;moment monitoring arrived.
            </p>
            <p>
                Other frequent reasons to&nbsp;report the&nbsp;noise&nbsp;are
            </p>
            <ul>
                <li>
                    generator sets &rarr; 63&nbsp;reports by&nbsp;the&nbsp;end&nbsp;of&nbsp;August &rarr; 53%&nbsp;of&nbsp;them
                    did&nbsp;not manage&nbsp;to&nbsp;locate the&nbsp;noise source,
                </li>
                <li>
                    loading and unloading operations &rarr; 41&nbsp;times &rarr; 87%&nbsp;of&nbsp;them
                    did&nbsp;not manage&nbsp;to&nbsp;locate the&nbsp;noise source,
                </li>
                <li>
                    road repair works &rarr; 25&nbsp;times &rarr; 92%&nbsp;of&nbsp;them
                    did&nbsp;not manage&nbsp;to&nbsp;locate the&nbsp;noise source,
                </li>
                <li>
                    motor transport noise &rarr; 21&nbsp;times &rarr; 90%&nbsp;of&nbsp;them proved
                    noise regulations violation,
                </li>
                <li>
                    other repair works &rarr; 16&nbsp;times &rarr; 88%&nbsp;of&nbsp;them did&nbsp;not
                    manage&nbsp;to&nbsp;locate the&nbsp;noise source, none&nbsp;of&nbsp;results proved the&nbsp;violations,
                </li>
                <li>
                    railway transport &rarr; 6&nbsp;times &rarr; 67%&nbsp;of&nbsp;them proved noise regulations violation.
                </li>
            </ul>
            <p>
                Even though most&nbsp;of&nbsp;the&nbsp;noise reports, which were&nbsp;proved by&nbsp;the&nbsp;mobile monitoring
                in&nbsp;2025, came from&nbsp;eastern and&nbsp;south-eastern areas&nbsp;of&nbsp;Moscow,
                the&nbsp;pollutants spill all&nbsp;around the&nbsp;city. Explore them mapped:
            </p>
            <div>
                PUT THE MAP HERE
            </div>
            <p>
                Some&nbsp;of&nbsp;noise sources are&nbsp;temporary. For&nbsp;instance, construction site or road repair spot,
                similarly&nbsp;as&nbsp;cultural events and sports matches, may&nbsp;expose extremely loud&nbsp;sounds,
                but&nbsp;disappear as&nbsp;soon as&nbsp;the&nbsp;construction or&nbsp;event is&nbsp;finished.
            </p>
            <p>
                In&nbsp;contrast, motor traffic, railway transport, manufactory, airplanes or subway are&nbsp;hard
                to&nbsp;relocate — to&nbsp;address these&nbsp;noise pollutants, local authorities need to&nbsp;adapt
                the&nbsp;existing regulations. Noteworthy, Moscow legislation complies with&nbsp;WHO recommendations.
                Trucks are strictly&nbsp;limited to&nbsp;enter the&nbsp;city during&nbsp;the&nbsp;day.
                The&nbsp;overall speed&nbsp;of&nbsp;motor traffic in&nbsp;the&nbsp;center of&nbsp;the&nbsp;city is&nbsp;lowered
                by&nbsp;50&nbsp;kilometers&nbsp;per&nbsp;hour; though the&nbsp;measure primarily addresses the&nbsp;accident rate,
                it&nbsp;also reduces the&nbsp;noise pollution in&nbsp;the&nbsp;area.
                In&nbsp;February, local authorities announced a&nbsp;major noise&nbsp;reduction barriers repair —
                such&nbsp;constructions absorb the&nbsp;sound coming from&nbsp;the&nbsp;traffic, making the&nbsp;environment
                in&nbsp;the&nbsp;guarded area quieter.
            </p>
        </div>
    )
};

export default MoscowContainer;
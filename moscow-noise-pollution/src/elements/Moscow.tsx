import {Checkbox, Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/react";
import {clsx} from "clsx";
import {Circle, LayerGroup, MapContainer, Popup, TileLayer} from "react-leaflet";
import * as mapData from "../assets/map-data.json";
import {useEffect, useState} from "react";


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
            <NoiseReportsMapContainer />
            <p>
                Some&nbsp;of&nbsp;noise sources are&nbsp;temporary. For&nbsp;instance, construction site or road repair spot,
                similarly&nbsp;as&nbsp;cultural events and sports matches, may&nbsp;expose extremely loud&nbsp;sounds,
                but&nbsp;disappear as&nbsp;soon as&nbsp;the&nbsp;construction or&nbsp;event is&nbsp;finished.
            </p>
            <p>
                In&nbsp;contrast, motor traffic, railway transport, manufactory, airplanes or subway are&nbsp;hard
                to&nbsp;relocate — to&nbsp;address these&nbsp;noise pollutants, local authorities need to&nbsp;adapt
                the&nbsp;existing regulations. Noteworthy, Moscow legislation complies with&nbsp;WHO recommendations.
                Trucks are <a href="https://www.mos.ru/otvet-transport/kak-oformit-propusk-dlya-gruzovogo-transporta" target="_blank" rel="noreferrer">strictly&nbsp;limited</a> to&nbsp;enter the&nbsp;city during&nbsp;the&nbsp;day.
                The&nbsp;overall speed&nbsp;of&nbsp;motor traffic in&nbsp;the&nbsp;center of&nbsp;the&nbsp;city
                is&nbsp;<a href="https://transport.mos.ru/mostrans/all_news/110799" target="_blank" rel="noreferrer">lowered</a> by&nbsp;50&nbsp;kilometers&nbsp;per&nbsp;hour;
                though the&nbsp;measure primarily addresses the&nbsp;accident rate,
                it&nbsp;also reduces the&nbsp;noise pollution in&nbsp;the&nbsp;area.
                In&nbsp;February, local authorities <a href="https://www.mos.ru/news/item/150341073" target="_blank" rel="noreferrer">announced</a> a&nbsp;major noise&nbsp;reduction barriers repair —
                such&nbsp;constructions absorb the&nbsp;sound coming from&nbsp;the&nbsp;traffic, making the&nbsp;environment
                in&nbsp;the&nbsp;guarded area quieter.
            </p>
        </div>
    )
};

export default MoscowContainer;



const AVAILABLE_CATEGORIES: string[] = [
    "Generator set", "Construction work", "Road repair work", "Manufacture",
    "Show melting spot", "Car wash", "Motor transport", "(Un)loading operation",
    "Other", "Ventilation system", "Freight transport", "Subway", "Other repair work",
    "Music", "Railway transport", "Aircraft noise", "Stadium", "Sport ground",
    "Truck parking", "Mass entertainment event", "Garbage removal", "Car service",
    "Tram"
].sort();
const AVAILABLE_RESULTS: string[] = [ "Violation proved", "No violation detected", "Noise source not located" ];

const NoiseReportsMapContainer = () => {
    const [filters, setFilters] = useState({
        categories: [...AVAILABLE_CATEGORIES],
        results: [...AVAILABLE_RESULTS]
    });

    function onCategorySwitch(category: string) {
        if (filters.categories.includes(category)) {
            setFilters(prev => ({...prev, categories: prev.categories.filter((c: string) => c != category)}))
        } else {
            setFilters(prev => ({...prev, categories: [...prev.categories, category]}))
        }
    }
    function onResultSwitch(result: string) {
        if (filters.results.includes(result)) {
            setFilters(prev => ({...prev, results: prev.results.filter((r: string) => r != result)}))
        } else {
            setFilters(prev => ({...prev, results: [...prev.results, result]}))
        }
    }

    return (
        <div className={clsx('w-full', 'mt-6', 'mb-10', 'flex', 'flex-col', 'gap-4')}>
            <div className={clsx('w-full', 'h-[60svh]', 'min-h-[300px]')}>
                <NoiseReportsMap filters={filters}/>
            </div>
            <div className={clsx('flex', 'flex-col', 'gap-2')}>
                <div>
                    <p className={clsx("mb-0", "font-bold")}>
                        Result
                    </p>
                    <div className={clsx('flex', 'flex-wrap', 'gap-x-3', 'w-full')}>
                        {AVAILABLE_RESULTS.map((res: string) => (
                            <div className={clsx('flex', 'flex-row', 'gap-1', 'w-fit', 'items-center')}>
                                <Checkbox
                                    checked={filters.results.includes(res)}
                                    onChange={() => onResultSwitch(res)}
                                    className={clsx("group", "block", "size-3", "border", "border-gray-500",
                                        "bg-white", "data-checked:bg-gray-500", "data-checked:border-0")}
                                >
                                    <svg className="stroke-white opacity-0 group-data-checked:opacity-100" viewBox="0 0 14 14" fill="none">
                                        <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Checkbox>
                                <p className={'mb-0'}>{res}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <p className={clsx("mb-0", "font-bold")}>
                        Noise category
                    </p>
                    <div className={clsx('flex', 'flex-wrap', 'gap-x-3', 'w-full')}>
                        {AVAILABLE_CATEGORIES.map((cat: string) => (
                            <div className={clsx('flex', 'flex-row', 'gap-1', 'w-fit', 'items-center')}>
                                <Checkbox
                                    checked={filters.categories.includes(cat)}
                                    onChange={() => onCategorySwitch(cat)}
                                    className={clsx("group", "block", "size-3", "border", "border-gray-500",
                                        "bg-white", "data-checked:bg-gray-500", "data-checked:border-0")}
                                >
                                    <svg className="stroke-white opacity-0 group-data-checked:opacity-100" viewBox="0 0 14 14" fill="none">
                                        <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Checkbox>
                                <p className={'mb-0'}>{cat}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}


const NoiseReportsMap = ({filters}: {filters: any}) => {
    const [points, setPoints] = useState<object[]>([]);
    useEffect(() => {
        const filteredPoints = mapData.features.filter((point => (
            filters.categories.includes(translateNoiseCategory(point.properties.NoiseCategory[0])) &&
            filters.results.includes(translateResult(point.properties.ResultsMapped))
        )));
        setPoints(filteredPoints);
    }, [filters]);

    return (
        <MapContainer
            // @ts-expect-error:
            center={[55.650008, 37.566868]}
            zoom={9}
            style={{width: '100%', height: '100%'}}
            minZoom={9}
            maxZoom={15}
            maxBounds={[[55.2, 36.85], [55.99, 37.95]]}
        >
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                // @ts-expect-error:
                attribution="&copy; CARTO"
                maxZoom={20}
                subdomains="abcd"
            />
            <LayerGroup>
                {points.map(point => (
                    <Circle
                        // @ts-expect-error:
                        center={[point.geometry.coordinates[1], point.geometry.coordinates[0]]}
                        // @ts-expect-error;
                        radius={35}
                        stroke={1}
                        fillOpacity={0.8}
                        // @ts-expect-error:
                        color={determineColor(translateResult(point.properties.ResultsMapped))}
                    >
                        <Popup>
                            <p className={clsx('map-popover')}>
                                {
                                    //@ts-expect-error:
                                    processDate(point.properties.Date)
                                }. {
                                // @ts-expect-error:
                                point.properties.NoiseCategory.map((c: string) => translateNoiseCategory(c))
                            }. {
                                // @ts-expect-error:
                                translateResult(point.properties.ResultsMapped)
                            }
                            </p>
                        </Popup>
                    </Circle>
                ))}
            </LayerGroup>
        </MapContainer>
    )
}

function translateResult(result: string): string {
    switch (result) {
        case "Превышения нормативов не выявлены":
            return "No violation detected";
        case "Выявлены превышения нормативов":
            return "Violation proved";
        case "Источник шума не был на месте":
            return "Noise source not located";
        default:
            return "";
    }
}

function translateNoiseCategory(category: string): string {
    switch (category) {
        case "Генераторная установка":
            return "Generator set";
        case "Строительные работы":
            return "Construction work";
        case "Дорожно-ремонтные работы":
            return "Road repair work";
        case "Промышленное предприятие":
            return "Manufacture";
        case "Снегоплавильная установка":
            return "Show melting spot";
        case "Автомойка":
            return "Car wash";
        case "Автотранспорт":
            return "Motor transport";
        case "Погрузочно-разгрузочные работы":
            return "(Un)loading operation";
        case "Другие источники":
            return "Other";
        case "Вентиляционные системы":
            return "Ventilation system";
        case "Грузовой транспорт":
            return "Freight transport";
        case "Метрополитен":
            return "Subway";
        case "Ремонтные работы":
            return "Other repair work";
        case "Музыка":
            return "Music"
        case "Шум от работы уборочной техники":
            return "Cleaning equipment"
        case "Железнодорожный транспорт":
            return "Railway transport";
        case "Авиашум":
            return "Aircraft noise";
        case "Стадионы":
            return "Stadium";
        case "Спортплощадки":
            return "Sport ground";
        case "Стоянка грузовых автомобилей":
            return "Truck parking"
        case "Массово-развлекательное мероприятие":
            return "Mass entertainment event";
        case "Вывоз мусора":
            return "Garbage removal";
        case "Автосервис/шиномонтаж":
            return "Car service";
        case "Трамваи":
            return "Tram";
        default:
            return "Other";
    }
}

function processDate(date: string): string {
    const [year, month, day] = date.split("T")[0].split("-");
    return `${day}/${month}/${year}`;
}

function determineColor(result: string): string {
    switch (result) {
        case "No violation detected":
            return "#a3a19e";
        case "Violation proved":
            return "#171514";
        case "Noise source not located":
            return "#5d6b61";
        default:
            return "";
    }
}
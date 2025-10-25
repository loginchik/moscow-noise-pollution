import {useEffect, useRef, useState} from "react";
import {clsx} from "clsx";


const NoisePollutionGeneralContainer = () => {
    const containerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState<number>(100);
    useEffect(() => {
        if (containerRef.current) {
            // @ts-expect-error: no property for current
            setContainerWidth(containerRef.current?.offsetWidth || 100);
        }
    }, [containerRef.current]);

    return (
        <div ref={containerRef}>
            <h2>Noise threats</h2>
            <p>
                Unlike air or&nbsp;water pollution, noise pollution is&nbsp;invisible and in&nbsp;many cases is&nbsp;not&nbsp;even recognized
                as&nbsp;pollution. Sounds of&nbsp;urban nature are&nbsp;often taken&nbsp;for&nbsp;granted: without&nbsp;cars there would&nbsp;be
                no&nbsp;transportation possible, without&nbsp;construction sites there would&nbsp;be no&nbsp;place for&nbsp;living,
                without&nbsp;airports and planes many&nbsp;global processes and international cooperation would&nbsp;be impossible.
                These sounds may&nbsp;be&nbsp;considered as&nbsp;a&nbsp;price that townspeople pay&nbsp;to&nbsp;use the&nbsp;benefits of&nbsp;city life.
            </p>
            <p>
                Again, noise pollution is&nbsp;considered to&nbsp;be any&nbsp;unwanted or disturbing sound that affects physical
                or&nbsp;mental well-being of&nbsp;a&nbsp;person. Not&nbsp;every sound is&nbsp;polluting, as&nbsp;noise has&nbsp;a&nbsp;psychological component
                — circumstances that make the&nbsp;sound unwanted. Negative mental effect, which&nbsp;noise has,
                originates from&nbsp;person’s perception of&nbsp;what&nbsp;is&nbsp;being listened and their
                attitude&nbsp;to&nbsp;the&nbsp;disturbing element of&nbsp;a&nbsp;nature. For&nbsp;instance, people at&nbsp;a&nbsp;rock concert
                do&nbsp;not&nbsp;evaluate — sometimes unbearably loud — music as&nbsp;noise: this music&nbsp;is
                a&nbsp;key&nbsp;part of&nbsp;an&nbsp;event they paid&nbsp;to&nbsp;get&nbsp;to, they&nbsp;are
                mostly likely to&nbsp;be&nbsp;fans of&nbsp;a&nbsp;band playing and, in&nbsp;general, enjoy.
                Yet, people living near&nbsp;the&nbsp;concert hall might evaluate the&nbsp;same event as&nbsp;noise
                pollution because it may&nbsp;be&nbsp;loud enough&nbsp;to&nbsp;disturb their&nbsp;working process
                or&nbsp;attempt to&nbsp;relax, to&nbsp;wake children up or to&nbsp;prevent them from&nbsp;falling asleep.
                The&nbsp;same loud event is&nbsp;thought&nbsp;of differently due&nbsp;to the&nbsp;contrast of&nbsp;perceptions
                of&nbsp;those who came to&nbsp;the&nbsp;rock concert voluntarily and those who&nbsp;are forced to&nbsp;witness&nbsp;it.
            </p>
            <p>
                Sounds that reach 85&nbsp;decibels or higher can harm person’s hearing. Yet, they appear on&nbsp;a&nbsp;daily basis:
                lawn movers buzz at&nbsp;a&nbsp;volume of&nbsp;65-95&nbsp;decibels in&nbsp;every park from&nbsp;late spring
                until&nbsp;early autumn, subway trains arrive at&nbsp;a&nbsp;station with&nbsp;a&nbsp;sound may exceed 100&nbsp;decibels,
                neighbors' electric drill tries to&nbsp;break though&nbsp;the&nbsp;wall at&nbsp;95&nbsp;decibels…
                In&nbsp;a&nbsp;short run loud sounds can lead&nbsp;to temporary hearing&nbsp;loss, while long-term
                consequences of&nbsp;noise pollution may affect both&nbsp;physical and&nbsp;mental well-being of&nbsp;a&nbsp;person, beyond hearing.
            </p>
            <p>
                Back&nbsp;in&nbsp;2011, WHO <a href="https://www.who.int/publications/i/item/burden-of-disease-from-environmental-noise-quantification-of-healthy-life-years-lost-in-europe" target="_blank">published</a> summarized
                evidence on&nbsp;the&nbsp;relationship between environmental noise
                and&nbsp;health effects, indicating that noise pollution leads&nbsp;to annoyance, sleep disturbance
                and&nbsp;cardiovascular disease. Authors used Disability-Adjusted Life Year (DALY) to&nbsp;evaluate the&nbsp;affect
                of&nbsp;noise on&nbsp;West Europeans’ health.
            </p>
            <blockquote>
                DALY is&nbsp;a&nbsp;special metric that allows to&nbsp;compare the&nbsp;consequences of&nbsp;different disease on&nbsp;human life
            </blockquote>
            <p>
                Calculated as a sum of Years&nbsp;of&nbsp;Life&nbsp;Lost&nbsp;(YLL) and Years&nbsp;Lived&nbsp;with&nbsp;Disability&nbsp;(YLD), it&nbsp;shows how&nbsp;many years
                human or society loses due&nbsp;to diseases, injuries or unfavorable environmental factors.
            </p>
            <div className={clsx('my-10', 'max-w-[500px]', 'mx-auto')}>
                <img src={"./daly-pie-viz.svg"} width={containerWidth} className={clsx("my-4", 'max-h-[80svh]')}/>
                <p className={clsx('image-caption')}>
                    Datasource: <a href="https://www.who.int/publications/i/item/burden-of-disease-from-environmental-noise-quantification-of-healthy-life-years-lost-in-europe" target="_blank">WHO — Burden of disease from environmental noise</a>
                </p>
            </div>
            <p>
                Sleep disturbance is&nbsp;the&nbsp;most crucial consequence of&nbsp;noise pollution, as it leads to&nbsp;903&nbsp;thousands
                of&nbsp;DALY yearly. Human auditory system has&nbsp;a&nbsp;watchman function that constantly monitors the&nbsp;environment
                for&nbsp;threats, even during&nbsp;the&nbsp;night. When the&nbsp;noise penetrates into&nbsp;bedroom, it&nbsp;postpones
                the&nbsp;moment person falls asleep, can wake them up during the&nbsp;night or prevent the&nbsp;blood pressure
                from&nbsp;going down during the&nbsp;night. All&nbsp;these micro-awakening, leading to&nbsp;fragmented sleep structure,
                and organism reactions to&nbsp;the&nbsp;general stress result in&nbsp;deterioration in&nbsp;sleep quality.
                Simply, next morning one can wake&nbsp;up already feeling exhausted.
            </p>
            <p>
                Annoyance, even though it is&nbsp;hardly measurable in&nbsp;quantitative research, is&nbsp;noted as&nbsp;the&nbsp;second most
                significant affect of&nbsp;noise pollution. Every year about&nbsp;654&nbsp;thousands of&nbsp;DALY are&nbsp;caused by&nbsp;it,
                affecting the&nbsp;majority of&nbsp;population and driving them into&nbsp;additional stress.
            </p>
            <p>
                Traffic noise, especially in&nbsp;the&nbsp;early morning, can&nbsp;increase the&nbsp;probability of&nbsp;coronary heart disease
                and hypertension, leading to&nbsp;61&nbsp;thousands DALY yearly. Noise, which is&nbsp;impossible to&nbsp;turn&nbsp;off
                or to&nbsp;control, is a&nbsp;stress for&nbsp;a&nbsp;person — in&nbsp;response to&nbsp;it, body excretes stress hormones
                that lead&nbsp;to changes in&nbsp;the&nbsp;composition of&nbsp;blood. These&nbsp;and&nbsp;other factors, as&nbsp;studies show,
                in&nbsp;some cases lead to&nbsp;high blood pressure, heart attacks and stroke.
            </p>
            <p>
                Exposed near&nbsp;schools or&nbsp;living areas, traffic noise affects the&nbsp;cognitive functions of&nbsp;children
                and&nbsp;impairs their concentration and&nbsp;memory, affecting thousands of&nbsp;children aged&nbsp;4-19 and resulting&nbsp;in
                45&nbsp;thousands of&nbsp;DALY. Other studies have found that children who attend schools in&nbsp;noisy areas
                are&nbsp;more&nbsp;likely to&nbsp;lag&nbsp;behind their peers in&nbsp;academic performance.
            </p>
            <blockquote>
                In&nbsp;total noise pollution steals more&nbsp;than&nbsp;1&nbsp;million&nbsp;years of&nbsp;healthy life
                from&nbsp;Western Europeans every&nbsp;year
            </blockquote>
            <p>
                The&nbsp;problem&nbsp;of&nbsp;noise regulations lays in&nbsp;the&nbsp;fact that many&nbsp;of&nbsp;the&nbsp;activities
                that generate noise also generate revenue, and economics would&nbsp;fail, if&nbsp;strict noise regulations are&nbsp;applied.
            </p>
            <p>
                In&nbsp;2022, WHO <a href="https://cdn.who.int/media/docs/default-source/who-compendium-on-health-and-environment/who_compendium_noise_01042022.pdf" target="_blank">released</a> the&nbsp;target
                levels of&nbsp;exposure from&nbsp;the&nbsp;most&nbsp;crucial sources of&nbsp;noise.
                The suggested regulations are&nbsp;divided in&nbsp;national and&nbsp;community level of&nbsp;implementation,
                indicating that both&nbsp;government and&nbsp;society should address the&nbsp;noise pollution to&nbsp;improve
                the&nbsp;sound environment. On&nbsp;the&nbsp;one&nbsp;hand, the&nbsp;politicians need to&nbsp;introduce new&nbsp;regulations
                and support the&nbsp;infrastructure development; on&nbsp;the&nbsp;other&nbsp;hand, businesses and civilians should
                participate in&nbsp;technological progress, inventing new&nbsp;ways to&nbsp;lower the&nbsp;sound of&nbsp;most&nbsp;used
                devices and items, such&nbsp;as&nbsp;transport and household items, so that the&nbsp;environment would&nbsp;become quieter.
            </p>
            <p>
                Some&nbsp;recommendations seem hardly&nbsp;applicable in&nbsp;modern densely built-up cities as&nbsp;they require
                a&nbsp;major infrastructure redesign. Yet, as&nbsp;Moscow’s history shows, even the&nbsp;<a href="https://realty.rbc.ru/news/5ce41ae29a7947b5cfbff9ec" target="_blank" rel="noreferrer">airport
                removal</a> — which is&nbsp;an&nbsp;option of&nbsp;flight paths rearranging — is&nbsp;possible.
            </p>
            <p>
                The decision to&nbsp;build an&nbsp;airport on&nbsp;Khodynka&nbsp;Field, in&nbsp;the&nbsp;north area
                of&nbsp;a&nbsp;city, was&nbsp;made in&nbsp;1910 — at&nbsp;the&nbsp;very&nbsp;dawn of&nbsp;aviation era —
                by&nbsp;the&nbsp;Aeronautics Society and the&nbsp;Moscow Military District.
                In&nbsp;1922, after&nbsp;serving its&nbsp;first civil flight from&nbsp;Moscow to&nbsp;Königsberg, the&nbsp;airport
                became international and kept this&nbsp;status until&nbsp;the&nbsp;plane crash in&nbsp;1935.
                Since&nbsp;then, only the&nbsp;service and test flights were&nbsp;conducted on&nbsp;the&nbsp;spot.
                Still, planes took&nbsp;off and landed within&nbsp;the&nbsp;city boarders,
                exposing noise of&nbsp;more&nbsp;than&nbsp;100&nbsp;decibels. However, the&nbsp;airport remained
                the&nbsp;center of&nbsp;aircraft construction and development, as&nbsp;numerous research
                and&nbsp;design organizations were&nbsp;located&nbsp;nearby. The&nbsp;final decision
                to&nbsp;get&nbsp;rid&nbsp;of&nbsp;an&nbsp;airport was&nbsp;made only&nbsp;in&nbsp;2003.
                After a&nbsp;decade of&nbsp;unknown status, the&nbsp;area gained local authorities’ interest.
                By&nbsp;now, the&nbsp;airport building has&nbsp;beed replaced with&nbsp;Aviapark —
                the&nbsp;biggest shopping mall in&nbsp;Europe, landing strips have&nbsp;been&nbsp;erased
                and replaced with&nbsp;a&nbsp;recreation area.
            </p>
        </div>
    )
};

export default NoisePollutionGeneralContainer;

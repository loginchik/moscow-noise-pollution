import {clsx} from "clsx";
import {Checkbox} from "@headlessui/react";
import * as React from "react";

const HowToTurnDownContainer = () => {
    return (
        <div>
            <h2>
                How to&nbsp;turn the&nbsp;noise down
            </h2>
            <blockquote>
                Noise reduction at&nbsp;the&nbsp;source makes the&nbsp;most&nbsp;sense
            </blockquote>
            <p>
                Even though the&nbsp;noise pollution is&nbsp;inevitable, there&nbsp;are steps that a&nbsp;person can&nbsp;take
                to&nbsp;reduce its&nbsp;impact on&nbsp;their&nbsp;well-being.
            </p>
            <div>
                <h3>
                    Step&nbsp;0. Identify&nbsp;the&nbsp;noise
                </h3>
                <blockquote className={clsx('max-w-[unset]')}>
                    It gets too&nbsp;loud when you&nbsp;need to&nbsp;change your&nbsp;behavior
                </blockquote>
                <p>
                    When you need to&nbsp;raise your&nbsp;voice to&nbsp;be&nbsp;understood, or increase the&nbsp;volume
                    of&nbsp;TV&nbsp;set, or&nbsp;want&nbsp;to&nbsp;avoid outside areas, or close&nbsp;the&nbsp;window
                    because&nbsp;of&nbsp;the&nbsp;outside sounds, that&nbsp;is a&nbsp;sign that&nbsp;loud is&nbsp;getting too&nbsp;loud.
                </p>
            </div>
            <div>
                <h3>
                    Step 1. In&nbsp;case you&nbsp;have enough&nbsp;money or&nbsp;extra&nbsp;space
                </h3>
                <CheckboxWrapper>
                    <p className={clsx('mb-0')}>
                        Move to&nbsp;a&nbsp;less&nbsp;noisy area, which may&nbsp;be&nbsp;located outside
                        of&nbsp;the&nbsp;city
                    </p>
                </CheckboxWrapper>
                <CheckboxWrapper>
                    <p className={clsx('mb-0')}>
                        Move the&nbsp;bedroom to&nbsp;the&nbsp;quiet space of&nbsp;the&nbsp;current house
                        or&nbsp;apartment — let&nbsp;the&nbsp;building shift&nbsp;you from&nbsp;the&nbsp;noise coming&nbsp;though
                        the&nbsp;open window, especially at&nbsp;night
                    </p>
                </CheckboxWrapper>
            </div>
            <div>
                <h3>
                    Step 2. In&nbsp;general
                </h3>
                <CheckboxWrapper>
                    <p className={clsx('mb-0')}>
                        Make low&nbsp;noise a&nbsp;priority when&nbsp;choosing a&nbsp;new&nbsp;apartment
                        to&nbsp;live&nbsp;in. Visit&nbsp;the&nbsp;property during the&nbsp;different times&nbsp;of&nbsp;a&nbsp;day
                        and talk&nbsp;to&nbsp;neighbors about&nbsp;the&nbsp;local sound environment
                    </p>
                </CheckboxWrapper>
                <CheckboxWrapper>
                    <p className={clsx('mb-0')}>
                        Make low&nbsp;noise a&nbsp;priority when&nbsp;choosing a&nbsp;new&nbsp;household
                        item&nbsp;to&nbsp;buy. Many&nbsp;manufacturers advertise their&nbsp;products as&nbsp;quiet —
                        consider the&nbsp;information when&nbsp;making the&nbsp;final choice
                    </p>
                </CheckboxWrapper>
                <CheckboxWrapper>
                    <p className={clsx('mb-0')}>
                        Wear&nbsp;noise cancelling headphones while&nbsp;being in&nbsp;noisy environment:
                        during the&nbsp;flights or&nbsp;train&nbsp;rides, even in&nbsp;the&nbsp;office filled&nbsp;with
                        irritating background sounds
                    </p>
                </CheckboxWrapper>
                <CheckboxWrapper>
                    <p className={clsx('mb-0')}>
                        Seek&nbsp;out quiet&nbsp;spaces, especially on&nbsp;the&nbsp;weekend or&nbsp;during
                        the&nbsp;vacation. Even one&nbsp;walk in&nbsp;a&nbsp;local park can&nbsp;help your&nbsp;organism
                        to&nbsp;wind&nbsp;down and&nbsp;rest
                    </p>
                </CheckboxWrapper>
                <CheckboxWrapper>
                    <p className={clsx('mb-0')}>
                        Care&nbsp;about your&nbsp;neighbors and ask&nbsp;them to&nbsp;care about&nbsp;you&nbsp;back:
                        do&nbsp;not&nbsp;start noisy household duties, such&nbsp;as&nbsp;vacuuming or&nbsp;drilling,
                        early&nbsp;in&nbsp;the&nbsp;morning
                    </p>
                </CheckboxWrapper>
            </div>
        </div>
    )
};

export default HowToTurnDownContainer;


const CustomCheckbox = () => {
    return (
        <Checkbox className={clsx("group", "inline-block", "size-5", "border", "border-gray-500", "bg-white",
            "data-checked:bg-gray-500", "data-checked:border-0")}>
            <svg className="stroke-white opacity-0 group-data-checked:opacity-100" viewBox="0 0 14 14" fill="none">
                <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </Checkbox>
    )
}

const CheckboxWrapper = ({children}: {children: React.ReactNode}) => {
    return (
        <div className={clsx('flex', 'flex-row', 'gap-4', 'items-center', 'mb-3')}>
            <div>
                <CustomCheckbox />
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}
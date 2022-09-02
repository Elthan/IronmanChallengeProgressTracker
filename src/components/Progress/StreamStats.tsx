import { useEffect, useState } from "react";
import { END_TIME_UTC, START_TIME_UTC } from "../../constants/Challenge";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from '@heroicons/react/solid';

interface Uptime {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function StreamStats() {
    const [uptime, setUptime] = useState<Uptime | undefined>();

    useEffect(() => {
        function calculateUptime() {
            let delta = Math.abs(new Date(END_TIME_UTC).valueOf() - new Date(START_TIME_UTC).valueOf());
            
            const msInDay = 24 * 60 * 60 * 1000;
            let days = Math.floor(delta / msInDay);
            delta -= (days * msInDay);

            const msInHours = 60 * 60 * 1000;
            let hours = Math.floor(delta / msInHours);
            delta -= hours * msInHours;

            const msInMinutes = 60 * 1000;
            let minutes = Math.floor(delta / msInMinutes);
            delta -= minutes * msInMinutes;

            const msInSeconds = 1000;
            let seconds = Math.floor(delta / msInSeconds);
            delta -= seconds * msInSeconds;

            setUptime({days, hours, minutes, seconds});
        }
        calculateUptime();
    }, []);

    return (
        <div className="flex flex-col">
            <Disclosure defaultOpen>
                {({ open }) => (  
                    <>
                    <Disclosure.Button className="relative flex justify-center items-center hover:bg-zinc-700 rounded-sm">
                        <h2 className="uppercase font-bold text-center">STATS</h2>
                        <span className="sr-only">Toggle shown or hide time elapsed</span>
                        <ChevronUpIcon
                            className={`opacity-20 absolute right-0 ${
                                open ? 'rotate-180 transform' : ''
                            } h-5 w-5`}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="order-2 pt-2">
                        <h3 className="font-bold">Time elapsed</h3>
                        <div >
                            <p className="text-sm">{`${uptime?.days || 0} days ${uptime?.hours || 0} hours ${uptime?.minutes || 0} mins ${uptime?.seconds || 0} secs`}</p>
                        </div>
                    </Disclosure.Panel>
                    </>                  
                )}
            </Disclosure>
        </div>
    )
}
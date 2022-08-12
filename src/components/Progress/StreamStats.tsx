import { useEffect, useState } from "react";
import { START_TIME_UTC } from "../../constants/Challenge";

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
            let delta = Math.abs(Date.now().valueOf() - new Date(START_TIME_UTC).valueOf());
            
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
        setInterval(() => calculateUptime(), 1000)
    }, []);

    return (
        <div className="flex flex-col">
            <div className="order-1 uppercase font-bold text-center">
                STATS
            </div>
            <div className="order-2 pt-2">
                <div className="font-bold">Time elapsed</div>
                <div >
                    {`${uptime?.days || 0} days ${uptime?.hours || 0} hours ${uptime?.minutes || 0} minutes ${uptime?.seconds || 0} seconds`}
                </div>
            </div>
        </div>
    )
}
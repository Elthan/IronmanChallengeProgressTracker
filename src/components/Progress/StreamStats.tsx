import axios from "axios";
import { useEffect, useState } from "react";
import { BASEURL } from "../../constants/API";
import { START_TIME_UTC } from "../../constants/Challenge";

export default function StreamStats() {
    const [uptime, setUptime] = useState();
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    // useEffect(() => {
    //     async function fetchUptime() {
    //         try {
    //             const { data } = await axios.get<any>(
    //                 `${BASEURL}/potter-ironman-uptime`
    //             );

    //             setUptime(data);
    //         } catch (err: any) {
    //             console.log(`Error occurred: ${err}`)
    //         }
    //     }
    //     fetchUptime();
    //     // setInterval(() => {fetchUptime()}, 3000);
    // }, []);

    useEffect(() => {
        function calculateUptime() {
            let delta = new Date(START_TIME_UTC).valueOf();
            let days = delta / 86400 % 24;
            delta -= days * 86400;

            let hours = delta / 3600 % 60;
            delta -= hours * 3600;

            let minutes = delta / 60 % 60;
            delta -= minutes * 60;

            setDays(days);
            setHours(hours);
            setMinutes(minutes);
            setSeconds(delta);
        }
    });

    return (
        <div className="flex flex-col">
            <div className="order-1 uppercase font-bold text-center">
                STATS
            </div>
            <div className="order-2 pt-2">
                { uptime === undefined ? "Time since start of challenge - " : uptime }
            </div>
        </div>
    )
}
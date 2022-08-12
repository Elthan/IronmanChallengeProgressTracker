import axios from "axios";
import { useEffect, useState } from "react";

export default function StreamStats() {
    const [uptime, setUptime] = useState();

    useEffect(() => {
        async function fetchUptime() {
            try {
                const { data } = await axios.get<any>(
                    "https://mihubot.xyz/api/ironman/potter-ironman-uptime"
                );

                setUptime(data);
            } catch (err: any) {
                console.log(`Error occurred: ${err}`)
            }
        }
        setInterval(() => {fetchUptime()}, 3000);
    }, []);

    return (
        <div className="flex flex-col">
            <div className="order-1 uppercase font-bold text-center">
                STATS
            </div>
            <div className="order-2 pt-2">
                { uptime === undefined ? "Time since start of challenge - "                  
                : uptime
                }
            </div>
        </div>
    )
}
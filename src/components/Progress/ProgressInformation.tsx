import axios from "axios";
import { useEffect, useState } from "react";
import { BASEURL } from "../../constants/API";
import GameGoals from "./GameGoals";
import GameProgress from "./GameProgress";
import StreamStats from "./StreamStats";

export interface GameInfo {
    refreshedAt?: Date;
    rank: string;
    pointsInRank: number;
    rankIconUrl?: string;
    reachedTop1Percent: boolean;
    rankGoal: string;
    rankGoalIcon: string;
}

export interface GameInfoWrapper {
    name: string;
    info: GameInfo;
}

export default function ProgressInformation() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [gameInfo, setGameInfo] = useState<GameInfoWrapper[]>([]);
    
    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.get<any>(
                    BASEURL + "/all"
                );
                var results = [];
                for (let item in data) {
                    results.push({
                        name: item,
                        info: data[item]
                    });
                }
                setGameInfo(results.sort());
                setError(null);
            } catch (err: any) {
                setError(err.message);
                setGameInfo([]);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
        // Run every 5 minutes
        setInterval(() => fetchData(), 300000);
    }, []);

    return (
        <div className="flex flex-col h-full w-full divide divide-y-[0.1rem] divide-zinc-500 justify-center text-zinc-100 text-center">
            <div className="order-1 h-full flex flex-col divide-y-[0.1rem] divide-zinc-500 justify-between text-start">
                <div className="order-1 h-32 p-4">
                    <StreamStats />
                </div>
                <div className="order-2 h-fit pb-4 lg:pb-2 text-center">
                    <div className="uppercase font-bold">GOALS</div>
                    {gameInfo.map((value, index) => (
                        <GameGoals index={index} game={value.name} rank={value.info.rankGoal} icon={value.info.rankGoalIcon} />
                    ))}
                </div>
            </div>
            <div className="order-2 h-full">
            {error ? <p>An error occured when fetching the data!</p> :
                    isLoading ?
                    ( <></> )
                    :
                    (
                        <div className="flex flex-col lg:flex-row justify-center pt-2 lg:pt-0 space-y-2 lg:space-y-0 space-x-0 lg:space-x-6 h-full w-full">
                            {gameInfo.map((value, index) => (
                                <GameProgress
                                index={index}
                                name={value.name}
                                icon={value.info.rankIconUrl}
                                points={value.info.pointsInRank}
                                rank={value.info.rank}
                                reachedTop1Percent={value.info.reachedTop1Percent} />
                            ))}
                        </div>
                    )
                }
            </div>
        </div>
    )
}
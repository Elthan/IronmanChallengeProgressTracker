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
    currentRankIndex: number;
    goalRankIndex: number;
}

export interface GameInfoWrapper {
    name: string;
    info: GameInfo;
}

function getPercent(part: number, whole: number) {
    return Math.floor(part / whole * 100);
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
                const results = [];
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
        <div className="flex flex-col h-full w-full justify-center text-zinc-100">
            <div className="order-1 p-4 border-bottom">
                <StreamStats />
            </div>
            
            <div className="order-2 h-full flex flex-col justify-between text-start ">
                <div className="order-2 h-fit py-4 lg:py-4">
                    <div className="uppercase font-bold text-center">GOALS</div>
                    {gameInfo.map((value, index) => (
                        <GameGoals 
                            index={index}
                            game={value.name} 
                            rank={value.info.rankGoal} 
                            icon={value.info.rankGoalIcon} 
                            progress={getPercent(value.info.currentRankIndex, value.info.goalRankIndex)}
                            reachedTop1Percent={value.info.reachedTop1Percent}
                        />
                    ))}
                </div>
            </div>
            
            <div className="order-3 h-full">
            {error ? <p>An error occured when fetching the data!</p> :
                    isLoading ?
                    ( <></> )
                    :
                    (
                        <div className="h-full w-full flex flex-col lg:flex-row">
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
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
    nextRank?: string;
    nextRankIcon?: string;
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
            
            <div className="order-2 h-fit py-5">
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
            
            <div className="order-3 h-full">
            {error ? <p>An error occured when fetching the data!</p> :
                    isLoading ?
                    ( <></> )
                    :
                    (
                        <div className="order-2 h-full flex flex-col py-5">                        
                            <div className="uppercase font-bold text-center mb-5">NEXT RANKS</div>
                            <div className="h-full w-full flex flex-col lg:flex-row justify-around">
                                {gameInfo.map((value, index) => (
                                    <GameProgress
                                        index={index}
                                        name={value.name}
                                        points={value.info.pointsInRank}
                                        curIcon={value.info.rankIconUrl}
                                        curRank={value.info.rank}
                                        nextIcon={value.info.nextRankIcon}
                                        nextRank={value.info.nextRank}
                                        reachedTop1Percent={value.info.reachedTop1Percent} />
                                ))}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
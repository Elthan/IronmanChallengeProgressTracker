import axios from "axios";
import { useEffect, useState } from "react";
import { BASEURL } from "../../constants/API";
import GameGoals from "./GameGoals";
import StreamStats from "./StreamStats";
import NextRanks from "./NextRanks";
import Spinner from "../Utils/Spinner";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from '@heroicons/react/solid'

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

function renderNextRanks(error: boolean, isLoading: boolean, gameInfo: GameInfoWrapper[]) {
    if (error) {
        return (
            <div className="w-full h-full grid place-content-center">
                <p>An error occured when fetching the data!</p>
            </div>
        );
    } else if (isLoading) {
        return (
            <div className="w-full h-full grid place-content-center"><Spinner /></div>
        );
    } else {
        return <NextRanks gameInfo={gameInfo}/>;
    }
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
            <div className="p-4 border-bottom h-fit">
                <StreamStats />
            </div>
            
            <div className={`h-fit py-5 ${isLoading ? '' : 'border-bottom'}`}>
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
            
            <div className="h-full">
                { renderNextRanks(error || false, isLoading, gameInfo) }
            </div>
        </div>
    )
}
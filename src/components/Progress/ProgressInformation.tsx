import axios from "axios";
import { useEffect, useState } from "react";
import { BASEURL } from "../../constants/API";
import GameGoals from "./GameGoals";
import StreamStats from "./StreamStats";
import NextRanks from "./NextRanks";
import Spinner from "../Utils/Spinner";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from '@heroicons/react/solid';

export interface GameInfo {
    refreshedAt?: Date;
    rank: string;
    pointsInRank: number;
    pointsDisplayValue: string;
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
                console.log(results);
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
        <div className="flex flex-col w-full justify-center text-zinc-100">
            <div className="p-4 border-bottom h-fit">
                <StreamStats />
            </div>
            
            <div className={` py-5 ${isLoading ? '' : 'border-bottom'}`}>
                <Disclosure defaultOpen>
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="w-full px-4">
                            <div className="relative flex justify-center items-center hover:bg-zinc-700 rounded-sm w-full">
                                <h2 className="uppercase font-bold text-center">GOALS</h2>
                                <ChevronUpIcon
                                    className={`opacity-20 absolute right-0 ${
                                        open ? 'rotate-180 transform' : ''
                                    } h-5 w-5`}
                                />
                            </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="overflow-hidden">
                            {gameInfo.map((value, index) => (
                                <GameGoals 
                                index={index}
                                game={value.name} 
                                rank={value.info.rankGoal} 
                                icon={value.info.rankGoalIcon} 
                                progress={getPercent(value.info.currentRankIndex + (value.info.pointsInRank / 100), value.info.goalRankIndex)}
                                reachedTop1Percent={value.info.reachedTop1Percent}
                                />
                                ))}
                        </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
            
            <div className="">
                { renderNextRanks(error || false, isLoading, gameInfo) }
            </div>
        </div>
    )
}

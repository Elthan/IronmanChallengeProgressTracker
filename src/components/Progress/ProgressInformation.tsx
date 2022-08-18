import axios from "axios";
import { useEffect, useState } from "react";
import { BASEURL } from "../../constants/API";
import StreamStats from "./StreamStats";
import NextRanks from "./NextRanks";
import Spinner from "../Utils/Spinner";
import Goals from "./Goals";
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
        <div className="flex flex-col lg:w-72 lg:h-full text-zinc-100 bg-[#18181B] ">
            <Disclosure defaultOpen>
                {({ open }) => (
                    <>          
                        <Disclosure.Button className="py-4 border-b-[1px] border-zinc-700 hover:bg-zinc-800">
                            <div className="relative mx-4">
                                <span className="sr-only">Toggle shown or hide progression stats</span>
                                <ChevronUpIcon 
                                    className={`opacity-20 absolute left-0 ${
                                        open ? 'rotate-180 transform' : ''
                                    } h-5 w-5`}
                                />
                                <p className="text-center text-sm font-bold uppercase">PROGRESSION</p>
                            </div>
                        </Disclosure.Button>

                        <Disclosure.Panel as="div" className="overflow-y-auto styled-scrollbars">
                            <div className="p-4 border-bottom">
                                <StreamStats />
                            </div>
                            
                            <div className={` py-5 ${isLoading ? '' : 'border-bottom'}`}>
                                <Goals gameInfo={gameInfo}/>
                            </div>
                            
                            <div className="">
                                { renderNextRanks(error || false, isLoading, gameInfo) }
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    )
}

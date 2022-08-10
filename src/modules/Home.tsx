import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASEURL } from '../constants/API';
import LoadingProgress from "../components/Progress/LoadingProgress";
import GameProgress from "../components/Progress/GameProgress";

export interface GameInfo {
    refreshedAt?: Date;
    rank: string;
    pointsInRank: number;
    rankIconUrl?: string;
    reachedTop1Percent: boolean;
}

export interface GameInfoWrapper {
    name: string;
    info: GameInfo;
}

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [gameInfo, setGameInfo] = useState<GameInfoWrapper[]>([]);
    const [showStream, setShowStream] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.get<any>(
                    BASEURL + "ironman/all"
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
    }, []);

    function toggleShowStream() {
        setShowStream(!showStream);
    }

    return (
        <div className="flex flex-col place-items-center overflow-hidden h-[calc(100vh-64px)] m-t-4">
            <div className={`order-1 ${ showStream ? `h-full` : `sm:h-16 md:h-80`} text-center w-screen`}>
                <iframe title="twitch-stream" src="https://player.twitch.tv/?channel=edisonparklive&parent=localhost&muted=true&autoplay=false"
                    className="w-screen md:w-screen md:h-[calc(100vh-128px)]"
                    allowFullScreen>
                </iframe>
            </div>
            <div className="order-2 w-full py-1 sm:py-3 bg-primary-700 flex justify-center text-white hidden md:flex">
                <button onClick={toggleShowStream}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`${ showStream ? 'rotate-180' : ''} h-12 w-12`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                    </svg>
                </button>
            </div>
            <div className={`order-3 content-center w-screen h-full ${ showStream ? 'hidden' : 'block' }`}>
                {error ? <p>An error occured when fetching the data!</p> :
                    isLoading ?
                    (
                        <div className="flex flex-row justify-center bg-primary-200 space-x-4 text-center h-full overflow-hidden pb-4 border-primary-200">
                            <LoadingProgress />
                            <LoadingProgress />
                            <LoadingProgress />
                        </div>
                    )
                    :
                    (
                        <>
                        <div className="flex flex-row justify-center bg-primary-200 space-x-4 text-center h-full overflow-hidden pb-4 border-primary-200">
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
                        </>
                    )
                }
            </div>
        </div>
    );
}
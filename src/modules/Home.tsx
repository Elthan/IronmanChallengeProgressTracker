import axios from "axios";
import React, { useEffect, useState } from "react";
import OverallProgress from '../components/Progress/OverallProgress';
import GameProgress from '../components/Progress/GameProgress';
import Spinner from "../components/Utils/Spinner";
import { GameInfoWrapper } from '../services/ProgressService';
import { BASEURL } from '../constants/API';

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [gameInfo, setGameInfo] = useState<GameInfoWrapper[]>([]);

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

    return (
        <div className="flex flex-col place-items-center mx-4 my-4">
            <div className="order-1">
                <OverallProgress />
            </div>
            <div className="flex flex-col flex-wrap content-center order-2 w-screen space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row sm:justify-center">
                {error ? <p>An error occured when fetching the data!</p> :
                    isLoading ? ( <Spinner /> ) : (
                        <>
                        {gameInfo.map((value, index) => (
                            <div key={value.name} className={`order-${index + 1} w-1/2 sm:w-3/12`}>
                                <GameProgress 
                                    name={value.name}
                                    icon={value.info.rankIconUrl}
                                    points={value.info.pointsInRank}
                                    rank={value.info.rank} />
                            </div>
                        ))}
                        </>
                    )
                }
            </div>
        </div>
    );
}
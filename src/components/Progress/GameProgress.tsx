import React, { useState } from "react";
import IGameProgress from './IGameProgress';

export default function GameProgress(progress: IGameProgress) {

    const [topPercent, setTopPercent] = useState(progress.reachedTop1Percent);

    let gameName : string;
    switch (progress.name.toLowerCase()) {
        case "tft": gameName = "Teamfight Tactics"; break;
        case "valorant": gameName = "Valorant"; break;
        case "apex": gameName = "Apex Legends"; break;
        default: gameName = progress.name[0].toUpperCase() + progress.name.slice(1);
    }

    function toggleProgress() {
        setTopPercent(!topPercent);
    }
    
    return (
        <div key={progress.name} className={`order-${progress.index + 1} w-1/4 border-inherit border-2 md:-skew-x-6 transform
                                            shadow-lg shadow-slate-800 hover:shadow-black hover:border-4
                                            bg-primary-600 rounded-t-md rounded-b-md`}>
            <div className="flex flex-col flex-no-wrap m-full h-full justify-between">
                <div className={`${ progress.reachedTop1Percent ? 'from-amber-400 to-amber-200' : 'from-primary-600 to-analogous-200'}
                        flex flex-col justify-between bg-gradient-to-t order-1 p-1 md:p-4 m-0.5 h-40 md:h-96 rounded-t-md`}>
                    <div className="flex md:skew-x-6 justify-center font-bold text-md sm:text-lg md:text-xl lg:text-2xl text-slate-800">
                        <p>{gameName}</p>
                    </div>
                    <div className="flex md:skew-x-6 justify-center md:p-4">
                        <img className="h-12 w-12 md:h-24 md:w-24 rank-float" src={progress.icon} alt="Game icon" />
                    </div>
                    <div className="flex md:skew-x-6 justify-self-end justify-center italic text-sm md:text-xl lg:text-2xl text-slate-600">
                        <p>{progress.rank}</p>
                    </div>
                </div>
                { progress.reachedTop1Percent ?
                    <div onClick={toggleProgress} className="order-2 cursor-pointer h-full w-full border-t-2 border-b-2 border-slate-400 flex flex-col justify-end">
                        <div style={{ height: `${ topPercent ? '100' : progress.points}%` }}
                            className="bg-complementary-500 p-1.5 leading-none shadow-md shadow-gray-500 text-white font-bold pb-6">
                                { topPercent ? 'REACHED TOP 1%' : progress.points}
                            </div>
                    </div>
                    :
                    <div className="order-2 h-full w-full border-t-2 border-b-2 border-slate-400 flex flex-col justify-end">
                        <div style={{ height: `${progress.points}%` }}
                            className="bg-complementary-600 p-1.5 leading-none shadow-md shadow-gray-500 text-white pb-6">
                                {progress.points}
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
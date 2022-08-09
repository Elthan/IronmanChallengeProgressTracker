import React from "react";
import IGameProgress from './IGameProgress';

export default function GameProgress(progress: IGameProgress) {

    let gameName : string;
    switch (progress.name.toLowerCase()) {
        case "tft": gameName = "Teamfight Tactics"; break;
        case "valorant": gameName = "Valorant"; break;
        case "apex": gameName = "Apex Legends"; break;
        default: gameName = "UNKNOWN";
    }

    return (
        <div className="flex flex-col flex-no-wrap flex-auto h-max rounded-md border-2 border-t-4 shadow-md p-4 bg-primary-200">
            <div className="basis-1/4 order-1 flex justify-center decoration-solid">
                <p><b>{gameName}</b></p>
            </div>
            <div className="basis-1/4 order-2 flex justify-center">
                <img className="h-14 w-14" src={progress.icon} alt="Game icon" />
            </div>
            <div className="basis-1/4 order-3 flex justify-center decoration-solid">
                <p>{progress.rank}</p>
            </div>
            <div className="basis-1/4 order-4 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 my-2">
                <div className="w-full bg-gray-200 rounded-full">
                    <div className="bg-complementary-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
                    style={{ width: `${progress.points}%` }}>{progress.points}</div>
                </div>
            </div>
        </div>
    )
}
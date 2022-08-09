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
        <div className="flex flex-col flex-no-wrap flex-auto h-max">
            <div className="basis-1/4 order-1 flex justify-center decoration-solid">
                <p><b>{gameName}</b></p>
            </div>
            <div className="basis-1/4 order-2 flex justify-center">
                <img className="h-14 w-14" src={progress.icon} alt="Game icon" />
            </div>
            <div className="basis-1/4 order-3 flex justify-center decoration-solid">
                <p>{progress.rank}</p>
            </div>
            <div className="basis-1/4 order-4 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress.points}%` }}></div>
            </div>
        </div>
    )
}
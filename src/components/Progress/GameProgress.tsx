import React from "react";
import IGameProgress from './IGameProgress';
import ProgressBar from "./ProgressBar";

export default function GameProgress(progress: IGameProgress) {

    let gameName : string;
    switch (progress.name.toLowerCase()) {
        case "tft": gameName = "Teamfight Tactics"; break;
        case "valorant": gameName = "Valorant"; break;
        case "apex": gameName = "Apex Legends"; break;
        default: gameName = progress.name[0].toUpperCase() + progress.name.slice(1);
    }

    const completedStyling = "border-amber-300 hover:border-amber-400";
    let styling = "flex flex-col flex-no-wrap flex-auto h-max rounded-md border-2 border-t-4 shadow-md shadow-gray-500 hover:shadow-black p-4 bg-primary-500 ";
    if (progress.reachedTop1Percent) styling += completedStyling;
    
    return (
        <div className={styling}>
            <div className="basis-1/4 order-1 flex justify-center">
                <p><b>{gameName}</b></p>
            </div>
            <div className="basis-1/4 order-2 flex justify-center">
                <img className="h-14 w-14" src={progress.icon} alt="Game icon" />
            </div>
            <div className="basis-1/4 order-3 flex justify-center">
                <p>{progress.rank}</p>
            </div>
            <div className="basis-1/4 order-4">
                <ProgressBar topPercent={progress.reachedTop1Percent} points={progress.points} />
            </div>
        </div>
    )
}
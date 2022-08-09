import React from "react";
import IGameProgress from './IGameProgress';

export default function GameProgress(progress: IGameProgress) {
    return (
        <div className="flex flex-row flex-wrap">
            <div className="order-1">
                <img src={progress.icon} width="50" height="50" />
                <p>GAME: {progress.name}</p>
                <p>RANK: {progress.rank}</p>
            </div>
            <div className="order-2">
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress.points}%` }}></div>
            </div>
                <p>POINTS: {progress.points}</p>
            </div>
        </div>
    )
}
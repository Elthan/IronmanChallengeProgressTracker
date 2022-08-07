import React from "react";
import IGameProgress from './IGameProgress';

export default function GameProgress(progress: IGameProgress) {
    return (
        <div>
            <p>{progress.name}</p>
            <p>{progress.icon}</p>
            <p>{progress.points}</p>
            <p>{progress.rank}</p>
        </div>
    )
}
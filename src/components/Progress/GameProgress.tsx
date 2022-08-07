import React from "react";
import IGameProgress from './IGameProgress';

export default function GameProgress({gameName}: IGameProgress) {
    return (
        <div>
            <p>{gameName}</p>
        </div>
    )
}
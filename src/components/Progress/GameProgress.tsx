import React from "react";
import IGameProgress from './IGameProgress';

export default function GameProgress({gameName}: IGameProgress) {
    return (
        <div className="flex-basis-2/12">
            {gameName}
        </div>
    )
}
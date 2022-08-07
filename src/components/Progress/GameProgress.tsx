import React from "react";
import IGameProgress from './IGameProgress';

export default function GameProgress({name: name}: IGameProgress) {
    return (
        <div>
            <p>{name}</p>
        </div>
    )
}
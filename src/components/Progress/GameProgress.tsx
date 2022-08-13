import React from "react";
import { mapToValidPercent, mapProgressToIconStyle } from "../Utils/ProgressUtils";

export interface IGameProgress {
    name: string;
    curIcon?: string;
    curRank?: string;
    nextIcon?: string;
    nextRank?: string;
    points?: number;
    reachedTop1Percent: boolean;
    index: number;
}

export default function GameProgress(progress: IGameProgress) {
    return (
        <div key={progress.name} className="flex flex-col items-center justify-between">
            <article className="flex flex-col items-center">
                <p className="text-sm uppercase">{progress.name}</p>
                <img className={`h-10 w-10 ${mapProgressToIconStyle(progress.points || 0)}`} src={progress.nextIcon} alt={`${progress.nextRank} icon`}/>
                <p className="text-sm capitalize mb-2 -translate-y-1">{progress.nextRank}</p>
            </article>

            <div className="flex flex-col-reverse h-full w-9  rounded-sm border-[1px] border-primary-600 overflow-hidden">
                <div style={{ height: `${mapToValidPercent(progress.points || 0)}%` }}
                    className="relative w-full bg-primary-600"
                >
                    <p className="text-sm text-center mt-1">{progress.points}%</p>
                </div>
            </div>

            <article className="flex flex-col items-center">
                <img className="h-10 w-10 mt-2" src={progress.curIcon} alt={`${progress.curRank} icon`}/>
                <p className="text-sm capitalize -translate-y-1">{progress.curRank}</p>
            </article>
        </div>
    )
}
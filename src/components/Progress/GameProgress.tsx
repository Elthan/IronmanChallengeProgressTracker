import React from "react";
import { mapToValidPercent, mapProgressToIconStyle } from "../Utils/ProgressUtils";

export interface IGameProgress {
    name: string;
    curIcon?: string;
    curRank?: string;
    nextIcon?: string;
    nextRank?: string;
    percent?: number;
    points?: string;
    reachedTop1Percent: boolean;
    index: number;
}

export default function GameProgress(progress: IGameProgress) {
    return (
        <div key={progress.name} className="flex flex-row justify-center lg:justify-end lg:flex-col items-center">
            <article className="flex flex-col items-center">
                <p className="text-sm uppercase">{progress.name}</p>
                <img className={`mx-8 lg:mx-0 hover:animate-pulse h-10 w-10 ${mapProgressToIconStyle(progress.percent || 0)}`} src={progress.nextIcon} alt={`${progress.nextRank} icon`}/>
                <p className="text-sm capitalize mb-2 -translate-y-1 w-max">{progress.nextRank}</p>
            </article>

            <div className="relative flex flex-row-reverse lg:flex-col-reverse min-w-[200px] h-6 w-2/4 lg:h-full lg:max-h-[300px] lg:w-9 lg:min-w-fit lg:min-h-[200px] rounded-sm border-[1px] border-primary-600 overflow-hidden hover:border-primary-50">
                <div style={{ height: `${mapToValidPercent(progress.percent || 0)}%` }}
                    className="hidden lg:block relative w-full bg-primary-600"
                >
                    <p className="text-sm text-center mt-1">{progress.percent}%</p>
                </div>

                <div style={{ width: `${mapToValidPercent(progress.percent || 0)}%` }}
                    className="block lg:hidden relative w-full bg-primary-600"
                >
                    <p className="text-sm ml-1">{progress.percent}%</p>
                </div>
            </div>

            <article className="relative flex flex-col items-center mx-0">
                <p className="absolute -translate-y-2 lg:translate-y-0 lg:static text-xs lg:mt-1">{progress.points}</p>
                <img className="mx-8 lg:mx-0 hover:animate-pulse h-10 w-10 mt-2" src={progress.curIcon} alt={`${progress.curRank} icon`}/>
                <p className="text-sm capitalize -translate-y-1 w-max">{progress.curRank}</p>
            </article>
        </div>
    )
}
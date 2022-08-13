import React from "react";
import CircleCheck from "../svgComponents/CircleCheck";

export interface IGameProgress {
    name: string;
    icon?: string;
    rank?: string;
    points?: number;
    reachedTop1Percent: boolean;
    index: number;
}

export default function GameProgress(progress: IGameProgress) {
    return (
        <div key={progress.name} className="flex flex-row break-word flex-no-wrap lg:flex-col justify-between lg:justify-center items-center w-full lg:w-36 lg:pb-4 hover:bg-zinc-700 text-start lg:text-center">
            <div className="order-2 uppercase text-left lg:text-center pl-2 w-3/12 lg:w-full lg:pl-0 text-sm">
                {progress.name}
            </div>
            <div className="order-3 md:flex justify-end lg:justify-center pr-2 lg:pr-0 w-32 lg:w-full hidden">
                <img className="h-12 w-12 lg:h-14 lg:w-14" src={progress.icon} alt="Game icon" />
            </div>
            <div className="order-4 w-3/12 text-right lg:text-center sm:pr-2 lg:pr-0 lg:w-full">
                {progress.rank}
            </div>

            <div className="order-5 h-full flex justify-end lg:justify-center w-1/3 sm:w-full pt-2 pr-2 lg:pr-0">
                <div className="lg:h-full w-full items-center lg:items-stretch lg:w-[4ch] text-center bg-primary-50 flex flex-row lg:flex-col justify-end rounded-sm overflow-hidden">
                    <div style={{ height: `${progress.points}%` }}
                        className="bg-primary-500 p-0.5 shadow-sm shadow-gray-500 text-zinc-100 pb-6 hidden lg:block"
                    >
                        <p className="text-sm">{progress.points}%</p>
                    </div>

                    <div style={{ width: `${progress.points}%`}}
                        className="bg-primary-500 p-0.5 h-full flex items-center shadow-sm shadow-gray-500 text-zinc-100 pr-4 lg:hidden"
                    >
                        <p className="text-sm">{progress.points}%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
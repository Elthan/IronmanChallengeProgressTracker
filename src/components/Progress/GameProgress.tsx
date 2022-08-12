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
            <div className="order-1 w-1/12 sm:w-32 lg:w-full lg:h-16 lg:pt-2 flex justify-center align-center">
                <div className="block md:hidden">{progress.reachedTop1Percent ? (<CircleCheck width="24" height="24" fill="#3DA281" />) : ''}</div>
                <div className="hidden md:block">{progress.reachedTop1Percent ? (<CircleCheck fill="#3DA281" />) : ''}</div>
            </div>
            <div className="order-2 uppercase text-left lg:text-center pl-2 w-3/12 lg:w-full lg:pl-0">{progress.name}</div>
            <div className="order-3 md:flex justify-end lg:justify-center pr-2 lg:pr-0 w-32 lg:w-full hidden">
                <img className="h-12 w-12 lg:h-14 lg:w-14" src={progress.icon} alt="Game icon" />
            </div>
            <div className="order-4 w-3/12 text-right lg:text-center sm:pr-2 lg:pr-0 lg:w-full">
                {progress.rank}
            </div>
            <div className="order-5 h-full flex justify-end lg:justify-center w-1/3 sm:w-full pt-2 pr-2 lg:pr-0">
                <div className="lg:h-full w-full items-center lg:items-stretch lg:w-10 lg:border-t-2 text-center bg-zinc-50 flex flex-row lg:flex-col justify-end">
                    <div style={{ height: `${progress.points}%`}}
                        className="bg-primary-500 p-0.5 shadow-sm shadow-gray-500 text-zinc-100 pb-6 hidden lg:block">
                            {progress.points}
                    </div>
                    <div style={{ width: `${progress.points}%`}}
                        className="bg-primary-500 p-0.5 h-full flex items-center shadow-sm shadow-gray-500 text-zinc-100 pr-4 lg:hidden">
                            {progress.points}
                    </div>
                </div>
            </div>
        </div>
    )
}
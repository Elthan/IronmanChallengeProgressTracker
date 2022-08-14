import CircleCheck from "../svgComponents/CircleCheck";
import GoalProgressBar from "./GoalProgressBar";
export interface IGameGoals {
    game: string;
    rank: string;
    icon: string;
    index: number;
    reachedTop1Percent: boolean;
    progress: number;
}

export default function GameGoals(goals: IGameGoals) {
    return (
        <div key={goals.game} className={`flex flex-col w-full px-4 uppercase hover:bg-zinc-800`}>
            <div className="flex justify-between items-center">
                <h3 className="order-1 uppercase text-sm translate-y-2">{goals.game}</h3>
                <h3 className="order-2 capitalize text-sm translate-y-1">{goals.rank}</h3>
            </div>

            <div className="order-2 justify-end flex flex-col w-full">
                <div className="flex items-center ">
                    <GoalProgressBar cName="w-3/5 h-5" isTop1={goals.reachedTop1Percent} progress={goals.progress} />
                    { goals.reachedTop1Percent && <CircleCheck cName="mx-2" width="24" height="24" fill="#3DA281" /> }
                    <img src={goals.icon} alt="Rank Goal Icon" className={`hover:animate-pulse ml-auto h-9 w-9 ${goals.reachedTop1Percent ? '' : 'grayscale opacity-40'}`} />
                </div>
            </div>
        </div>
    )
}
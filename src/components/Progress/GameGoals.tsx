export interface IGameGoals {
    game: string;
    rank: string;
    icon: string;
    index: number;
}

export default function GameGoals(goals: IGameGoals) {
    return (
        <div key={goals.game} className={`flex flex-row justify-between w-full px-4 uppercase py-1 hover:bg-zinc-700`}>
            <div className="order-1">{goals.game}</div>
            <div className="order-2 justify-end flex flex-col">
                <div>{goals.rank}</div>
                <div className="flex justify-end">
                    <img className="h-9 w-9" src={goals.icon} alt="Rank Goal Icon" />
                </div>
            </div>
        </div>
    )
}
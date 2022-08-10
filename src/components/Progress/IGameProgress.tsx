export default interface IGameProgress {
    name: string;
    icon?: string;
    rank?: string;
    points?: number;
    reachedTop1Percent: boolean;
    index: number;
}
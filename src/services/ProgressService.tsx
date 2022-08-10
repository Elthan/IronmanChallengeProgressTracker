export interface GameInfo {
    refreshedAt?: Date;
    rank: string;
    pointsInRank: number;
    rankIconUrl?: string;
    reachedTop1Percent: boolean;
}

export interface GameInfoWrapper {
    name: string;
    info: GameInfo;
}

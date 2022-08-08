export interface GameInfo {
    refreshedAt?: Date;
    rank: string;
    pointsInRank: number;
    rankIconUrl?: string;
}

export interface GameInfoWrapper {
    name: string;
    info: GameInfo;
}

export class ProgressService {
}
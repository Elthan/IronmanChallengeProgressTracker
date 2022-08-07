export interface GameInfo {
    refreshedAt?: Date;
    rank: string;
    pointsInRank: number;
    rankIconUrl?: string;
}

export interface AllGameProgressResponse {
    info: GameInfo[];
}

export class ProgressService {
    /** Fetch game progress for all games */
    static fetchAllGameProgress(): Promise<AllGameProgressResponse> {
        return new Promise(async (resolve, reject) => {
            let url = "https://mihubot.xyz/api/ironman/all";
            const response = await fetch(url);
            const data = await response.json();
            return data;
        });
    }
}
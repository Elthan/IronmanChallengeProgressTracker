import React, { useState } from "react";
import OverallProgress from '../components/Progress/OverallProgress';
import GameProgress from '../components/Progress/GameProgress';
import { AllGameProgressResponse, ProgressService } from '../services/ProgressService';

function Home() {

    const [progressInfo, setProgressInfo] = 
        useState<AllGameProgressResponse | undefined>(undefined);

    const progressCall = async () => {
        return ProgressService.fetchAllGameProgress();
    };

    progressCall()
        .then((r) => setProgressInfo(r))
        .catch(() => setProgressInfo(undefined));

    return (
        <div className="flex flex-col place-items-center w-full mx-4 my-4">
            <div className="w-screen order-1">
                <OverallProgress />
            </div>
            <div className="flex flex-row justify-start order-2 space-x-4">
                <div className="order-1">
                    <GameProgress name="Valorant"
                        icon={progressInfo?.info[0].rankIconUrl}
                        points={progressInfo?.info[0].pointsInRank}
                        rank={progressInfo?.info[0].rank}
                    />
                </div>
                <div className="order-2">
                    <GameProgress name='Teamfight Tactics' icon=""/>
                </div>
                <div className="order-3">
                    <GameProgress name='Apex Legends' icon="" />
                </div>
            </div>
        </div>
    );
}

export default Home;
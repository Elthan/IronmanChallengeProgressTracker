import React from "react";
import OverallProgress from '../components/Progress/OverallProgress';
import GameProgress from '../components/Progress/GameProgress';

function Home() {
    return (
        <div className="text-center">
            <div><OverallProgress /></div>
            <div>
                <GameProgress gameName='Valorant' />
                <GameProgress gameName='Teamfight Tactics' />
                <GameProgress gameName='Apex Legends' />
            </div>
        </div>
    );
}

export default Home;
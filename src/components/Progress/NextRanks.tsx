import React from "react";
import GameProgress from "./GameProgress";
import { GameInfoWrapper } from "./ProgressInformation";

export interface GameInfoArray{
  gameInfo: GameInfoWrapper[];
}

function NextRanks({ gameInfo }: GameInfoArray) {
  return (
    <div className="order-2 h-full flex flex-col py-5">                        
      <div className="uppercase font-bold text-center mb-5">NEXT RANKS</div>
      <div className="h-full w-full flex flex-col lg:flex-row justify-around">
          {gameInfo.map((value, index) => (
              <GameProgress
                  index={index}
                  name={value.name}
                  points={value.info.pointsInRank}
                  curIcon={value.info.rankIconUrl}
                  curRank={value.info.rank}
                  nextIcon={value.info.nextRankIcon}
                  nextRank={value.info.nextRank}
                  reachedTop1Percent={value.info.reachedTop1Percent} />
          ))}
      </div>
    </div>
    );
}

export default NextRanks;
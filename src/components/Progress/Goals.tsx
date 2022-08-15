import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from '@heroicons/react/solid';
import GameGoals from "./GameGoals";
import GameInfoArray from "./GameInfoArray";
import { getPercent } from "../Utils/ProgressUtils";


function Goals(props: GameInfoArray) {
  return (
    <Disclosure defaultOpen>
      {({ open }) => (
        <>
          <Disclosure.Button className="w-full px-4">
            <div className="relative flex justify-center items-center hover:bg-zinc-700 rounded-sm w-full">
              <h2 className="uppercase font-bold text-center">GOALS</h2>
              <span className="sr-only">Toggle shown or hide goals progression</span>
              <ChevronUpIcon
                className={`opacity-20 absolute right-0 ${
                    open ? 'rotate-180 transform' : ''
                } h-5 w-5`}
              />
            </div>
          </Disclosure.Button>
          <Disclosure.Panel className="overflow-hidden">
            {props.gameInfo.map((value, index) => (
              <GameGoals 
              index={index}
              game={value.name} 
              rank={value.info.rankGoal} 
              icon={value.info.rankGoalIcon} 
              progress={getPercent(value.info.currentRankIndex, value.info.goalRankIndex)}
              reachedTop1Percent={value.info.reachedTop1Percent}
              />
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Goals;
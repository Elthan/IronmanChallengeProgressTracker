import React from "react";
import GameProgress from "./GameProgress";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from '@heroicons/react/solid';
import GameInfoArray from "./GameInfoArray";


function NextRanks({ gameInfo }: GameInfoArray) {
  return ( 
    <Disclosure as="div" defaultOpen className="order-2 h-full flex flex-col py-5 overflow-hidden">
      {({ open }) => (
        <>
        <Disclosure.Button className="w-full px-4 mb-4 lg:mb-5">
          <div className="relative flex justify-center items-center hover:bg-zinc-700 rounded-sm w-full">
            <h2 className="uppercase font-bold text-center">NEXT RANKS</h2>
            <span className="sr-only">Toggle shown or hide next rank progressions</span>
            <ChevronUpIcon
                className={`opacity-20 absolute right-0 ${
                    open ? 'rotate-180 transform' : ''
                } h-5 w-5`}
            />
          </div>
        </Disclosure.Button>           
        <Disclosure.Panel className="h-full w-full flex flex-col lg:flex-row justify-around overflow-hidden">
          {gameInfo.map((value, index) => (
              <GameProgress
                  index={index}
                  name={value.name}
                  percent={value.info.pointsInRank}
                  points={value.info.pointsDisplayValue}
                  curIcon={value.info.rankIconUrl}
                  curRank={value.info.rank}
                  nextIcon={value.info.nextRankIcon}
                  nextRank={value.info.nextRank}
                  reachedTop1Percent={value.info.reachedTop1Percent} />
          ))}
        </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    );
}

export default NextRanks;
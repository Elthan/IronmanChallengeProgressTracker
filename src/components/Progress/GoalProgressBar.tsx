import React from "react";
import { mapToValidPercent, getProgressGoalStyle } from "../Utils/ProgressUtils";
export interface IGoalProgress {
  cName?: string;
  isTop1: boolean;
  progress: number;
}


function GoalProgressBar({ cName, progress, isTop1 }: IGoalProgress) {
  return (
    <div className={`border-[1px] border-primary-500 rounded-sm ${cName}`}>
        <div 
            style={{ width: `${mapToValidPercent(progress)}%`}}
            className={`bg-primary-500 h-full relative overflow-hidden ${getProgressGoalStyle(isTop1)}`}
        ></div>
    </div>
  );
}

export default GoalProgressBar;
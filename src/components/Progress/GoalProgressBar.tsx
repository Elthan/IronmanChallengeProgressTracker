import React from "react";

export interface IGoalProgress {
  cName?: string;
  isTop1: boolean;
  progress: number;
}

function getProgressStyle(isTop1: boolean) {
  return isTop1 ? 'bg-gradient bg-gradient-animated animate-shine' : ``;
}

function getProgressWidthStyle(progress: number) {
  if (progress <= 0)
    return { width: `0%`};
  else if (progress <= 100)
    return { width: `${progress}%`};
  else
    return { width: `100%`};
}

function GoalProgressBar({ cName, progress, isTop1 }: IGoalProgress) {
  return (
    <div className={`border-[1px] border-primary-500 rounded-sm ${cName}`}>
        <div 
            style={getProgressWidthStyle(progress)}
            className={`bg-primary-500 h-full relative overflow-hidden ${getProgressStyle(isTop1)}`}
        ></div>
    </div>
  );
}

export default GoalProgressBar;
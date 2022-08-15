export function getProgressGoalStyle(isTop1: boolean) {
  return isTop1 ? 'bg-gradient bg-gradient-animated animate-shine' : ``;
}

export function mapToValidPercent(num: number) {
  if (num < 0) 
    return 0;
  else if (num > 100) 
    return 100;
  else 
    return num;
}

export function mapProgressToIconStyle(progress: number) {
  if (progress >= 95)
    return ''
  else if (progress >= 90) 
    return 'opacity-40'
  else
    return 'grayscale opacity-40';
}

export function getPercent(part: number, whole: number) {
  return Math.floor(part / whole * 100);
}
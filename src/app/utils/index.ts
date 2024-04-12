
export const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds/60);
  const secondsLeft = seconds - minutes * 60;
  const formatedSeconds = Math.floor(secondsLeft).toString().padStart(2,'0')
  return `${minutes}:${formatedSeconds}`
}
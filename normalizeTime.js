// Normalize Time in Second
// OwnCode: https://www.owncode.space/questions/easy/normalize-time

function normalizeTime(second) {
  const hours = Math.floor(second / 3600);
  const minutes = Math.floor((second % 3600) / 60);
  const seconds = second % 3600 % 60;
  const tS = num => {
    const s = num.toString();
    return s.length > 1 ? s : `0${s}`;
  }
  
  return `${tS(hours)}:${tS(minutes)}:${tS(seconds)}`;
}

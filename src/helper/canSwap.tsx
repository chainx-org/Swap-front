export const canFirstSwap = (strAll: string, balanceNum: string) => {
  let swap = true;
  parseFloat(strAll) > parseFloat(balanceNum) ||
  parseFloat(strAll) === 0 ||
  Object.is(parseFloat(strAll), NaN)
    ? (swap = false)
    : (swap = true);
  return swap;
};

export const canSecondSwap = (strAll: string, balanceNum: string) => {
  let swap = true;
  parseFloat(strAll) <= 0 || Object.is(parseFloat(strAll), NaN)
    ? (swap = false)
    : (swap = true);
  return swap;
};

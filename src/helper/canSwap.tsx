export const canFirstSwap = (strAll: string, balanceNum: string) => {
  let swap = true;
  if (strAll == null && balanceNum == "") {
    swap = true;
    return swap;
  } else {
    Number(strAll) > Number(balanceNum) ||
    Number(strAll) === 0 ||
    Object.is(Number(strAll), NaN)
      ? (swap = false)
      : (swap = true);
    return swap;
  }
};

export const canSecondSwap = (strAll: string, balanceNum: string) => {
  let swap = true;
  if (strAll == null && balanceNum == "") {
    swap = true;
    return swap;
  } else {
    Number(strAll) <= 0 || Object.is(Number(strAll), NaN)
      ? (swap = false)
      : (swap = true);
    return swap;
  }
};

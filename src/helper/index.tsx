const length = 7;
const longLength = 10;

export const shortenString = (str: string): string => {
  if (str.length > 2 * length) {
    return str.substring(0, 7) + "..." + str.substring(str.length - 7);
  } else {
    return str;
  }
};

export const longString = (str: string): string => {
  if (str.length > 2 * longLength) {
    return str.substring(0, 10) + "..." + str.substring(str.length - 10);
  } else {
    return str;
  }
};

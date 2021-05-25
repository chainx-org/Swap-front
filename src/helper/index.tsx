const length = 5;
const longLength = 10;

export const shortenString = (str: string): string => {
  if (str.length > 2 * length) {
    return str.substring(0, 5) + "..." + str.substring(str.length - 5);
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

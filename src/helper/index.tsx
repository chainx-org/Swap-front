const length = 5;

export const shortenString = (str: string): string => {
  if (str.length > 2 * length) {
    return str.substring(0, 5) + '...' + str.substring(str.length - 5)
  }else{
    return str
  }
}

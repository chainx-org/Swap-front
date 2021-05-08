function FormatBalance(balance: { toNumber: () => number } | undefined | number) {
    if (typeof balance === "number") {
      return (balance / 100000000).toFixed(5).toString();
    } else if (balance) {
      return (balance!!.toNumber() / 100000000).toFixed(5).toString();
    } else {
      return "-";
    }
  }
  export default FormatBalance;
import React from "react";
import { FC } from "react";

interface BalanceSpanProps {
  balance: { toNumber: () => number } | number | undefined;
}

export const BalanceSpan: FC<BalanceSpanProps> = ({ balance }) => {
  let value;
  if (balance) {
    if (typeof balance === "number") {
      value = (balance / 100000000).toFixed(5).toString();
    } else {
      value = (balance.toNumber() / 100000000).toFixed(5).toString();
    }
  } else {
    value = "-";
  }
  return <span>{value}</span>;
};

import { createModel } from "hox";
import { useCallback, useState } from "react";
import { TradingPrice } from "../interfaces";

function useConstants() {
  const [tradingPrice, setTradingPrice] = useState<TradingPrice | null>(null);
  const [secureThreshold, setSecureThreshold] = useState<number>(0);
  return [
    {
      tradingPrice,
      secureThreshold
    },
    setTradingPrice,
    setSecureThreshold
  ];
}

export const useConstantsModel: () => [
  {
    tradingPrice: TradingPrice;
    secureThreshold: number;
  },
  (value: TradingPrice) => void,
  (value: number) => void
] = createModel(useConstants) as any;

export function usePcxBtcConveter() {
  const [{ tradingPrice }] = useConstantsModel();
  const converter = useCallback(
    (balance: number) => {
      return (balance / Math.pow(10, tradingPrice.decimal.toNumber())) * tradingPrice.price.toNumber();
    },
    [tradingPrice]
  );
  return converter;
}

export function useCollateralCalculator() {
  const converter = usePcxBtcConveter();
  const calculator = useCallback(
    (tokens: number, pcx: number) => {
      const collateralInBtc = converter(pcx);
      if (!tokens || tokens === 0) {
        return NaN;
      } else {
        return (collateralInBtc * 100) / tokens;
      }
    },
    [converter]
  );
  return calculator;
}

export function useTokenUpperBoundCalculator() {
  const converter = usePcxBtcConveter();
  const [{ secureThreshold }] = useConstantsModel();
  const calculator = useCallback(
    (collateral: number) => {
      const collateralInBtc = converter(collateral);
      return collateralInBtc / secureThreshold;
    },
    [secureThreshold, converter]
  );
  return calculator;
}

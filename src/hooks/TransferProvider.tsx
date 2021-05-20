import React, { useEffect, useState } from "react";
import { WsProvider } from "@polkadot/rpc-provider";
import * as definitions from "../interfaces/definitions";
import { ApiPromise } from "@polkadot/api";
import { notification } from "antd";

interface TransferProps {
  errorMessage?: any;
  setErrorMessage?: any;
}

export const TransferContext: React.Context<TransferProps> = React.createContext(
  {} as unknown as TransferProps
);

interface Props {
  children: React.ReactNode;
  //   url?: string;
}

function TransferProvider({ children }: Props): React.ReactElement<Props> {
  const [errorMessage, setErrorMessage] = useState<String | null>("");

  return (
    <TransferContext.Provider
      value={{
        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </TransferContext.Provider>
  );
}

export default React.memo(TransferProvider);

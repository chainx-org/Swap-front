import React, { useEffect, useState } from "react";
import { WsProvider } from "@polkadot/rpc-provider";
import * as definitions from "../interfaces/definitions";
import { ApiPromise } from "@polkadot/api";
import { notification } from "antd";

interface ApiProps {
  isApiReady: boolean;
  api: ApiPromise | null;
}

export const ApiContext: React.Context<ApiProps> = React.createContext(
  {} as unknown as ApiProps
);

interface Props {
  children: React.ReactNode;
  url?: string;
}

function ApiProvider({ children, url }: Props): React.ReactElement<Props> {
  const [isApiReady, setApiReady] = useState(false);
  const [api, setApi] = useState<ApiPromise | null>(null);
  // console.log("api",api)
  // console.log("isApiReady",isApiReady)
  const apiInit = (): void => {
    const types = Object.values(definitions).reduce(
      (res, { types }) => ({ ...res, ...types }),
      {}
    );
    const rpc = Object.values(definitions).reduce(
      //@ts-ignore
      (res, { rpc }) => ({ ...res, ...rpc }),
      {}
    );
    notification.warn({ message: "Wait ws connecting..." });
    const provider = new WsProvider(url);
    const api = new ApiPromise({ provider, types, rpc });
    const newTypes = {
      Address: "MultiAddress",
      LookupSource: "MultiAddress",
    };
    api.registerTypes(newTypes);
    api.on("error", (err) => {
      notification.error({
        message: `Cannot connect to ws endpoint. `,
      });
    });
    api.on("disconnected", () => setApiReady(false));
    api.on("ready", () => {
      setApiReady(true);
      setApi(api);
      notification.info({ message: "Endpoint connected." });
      //@ts-ignore
      window.api = api;
    });
  };

  useEffect(() => {
    apiInit();
  }, []);

  return (
    <ApiContext.Provider
      value={{
        isApiReady,
        api,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export default React.memo(ApiProvider);

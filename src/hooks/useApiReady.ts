import { ApiPromise } from "@polkadot/api";
import { useEffect } from "react";
import { useApi } from "./useApi"

export const useApiReady = (fn: (api: ApiPromise)=>void) => {
    const { api, isApiReady } = useApi();
    useEffect(() => {
        if (isApiReady) {
            fn(api)
        }
    }, [isApiReady])
}
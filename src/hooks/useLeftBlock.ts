import {useApi} from "./useApi";
import { useEffect, useState } from "react";
export const useLeftBlock = (openTime: number) => {
     
    const { api } = useApi();
    const [leftBlock, setLeftBlock] = useState(48 * 600);
    useEffect(() => {
        let unsub = api.rpc.chain.subscribeNewHeads(head => {
          setLeftBlock(Math.max(0, 100 + openTime - head.number.toNumber()));
        });
        return () => {
          unsub.then();
        };
      }, []);
    if (!openTime) {
      return 0;
    }
    return leftBlock;
  };
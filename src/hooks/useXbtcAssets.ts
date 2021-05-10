import {useApi} from "./useApi";
import {useEffect,useState} from 'react';
function useXbtcAssets(account:string, n:number){
    const {api} = useApi();
    const [XbtcBalance,setXbtcBalance] = useState(0)
    useEffect(()=> {
        async function getAssets(account: string) {
            const res = await api.query.xAssets.assetBalance(account,1);
            setXbtcBalance((JSON.parse(JSON.stringify(res)).Usable / 100000000) )
        }
        getAssets(account);
    },[account,n])
    return {XbtcBalance,setXbtcBalance}
}

export default useXbtcAssets;
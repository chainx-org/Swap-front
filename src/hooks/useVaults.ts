import {useApi} from "./useApi";
import {useEffect,useState} from 'react';
function useVaults(account:string){
    const {api} = useApi();
    const [wallet,setWallat] = useState("")
    useEffect(()=> {
        async function getAssets(account: string) {
            const status = await api.query.xGatewayBitcoinV2.vaults(account);
            if(!status.isNone){
                setWallat(status.unwrap().wallet.toString())
            }
        
        }
        getAssets(account);
    },[account])
    return {wallet,setWallat}
}
export default useVaults;
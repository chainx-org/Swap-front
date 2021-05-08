import React, {useState, useEffect, useContext} from "react";
import RegisterVaultCard from "../../components/RegisterVaultCard";
import VaultCard from "../../components/VaultCard";
import { Option } from "@polkadot/types";
import {Vault} from "../../interfaces"
import useAccountModel from "../../hooks/useAccountModel"
import {useApi} from "../../hooks/useApi"
import { createModel } from "hox";
const useVaultModel = createModel(() => useState<Vault | null>(null));
function VaultPage(){
    const {currentAccount} = useAccountModel();
    const { api, isApiReady } = useApi();
    const [vault, setVault] = useVaultModel();
    // 查询 vault 状态
    useEffect(()=> {
        async function GetStatus() {
            const status = await api.query.xGatewayBitcoinV2.vaults<Option<Vault>>(currentAccount?.address || "");
            setVault(status.isNone ? null : (status.value as Vault));
        }
        if(isApiReady){
            GetStatus()
        }
    },[currentAccount,isApiReady])
    return (
        <>
            {
            vault ? 
             <VaultCard/>
             : 
            <RegisterVaultCard/>}
        </>
    )
}
export default VaultPage;

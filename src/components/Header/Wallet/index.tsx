import React from "react";
import {WalletStyle} from "./style";
import walletLogo from "../Wallet/icons/wallet.svg"
function Wallet(){
    return (
        <WalletStyle>
            <img src={walletLogo} alt=""/>
            钱包
        </WalletStyle>
    )
}
export default Wallet;
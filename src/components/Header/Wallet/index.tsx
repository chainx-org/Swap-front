import React, {useEffect, useState} from "react";
import {WalletStyle, WalletWrapperStyle, DropListStyle} from "./style";
import walletLogo from "../Wallet/icons/wallet.svg";
import PCXLogo from "./icons/PCX_W.svg"
import SBTCLogo from "./icons/SBTC.svg"
import SBCHLogo from "./icons/SBCH.svg"
import SDOGLogo from "./icons/SDOG.svg"
import {useTranslation} from "react-i18next";

function Wallet() {
    const {t, i18n} = useTranslation();
    const [dropToggle,setDropToggle] = useState(false)
    const hideAllMenu = ()=> {
        setDropToggle(false)
    }
    const showMenu = (e: { nativeEvent: { stopImmediatePropagation: () => void; }; })=> {
        e.nativeEvent.stopImmediatePropagation()
        setDropToggle(!dropToggle)
    }
    useEffect(()=> {
        document.addEventListener('click',hideAllMenu)
    },[])
    return (
        <WalletWrapperStyle>
            <WalletStyle onClick={showMenu}>
                <img src={walletLogo} alt=""/>
                {t('Wallet')}
            </WalletStyle>
            {dropToggle && <DropListStyle>
                <ul>
                    <li>
                        <div className={"assets-item"}>
                            <div className={"item-left"}>
                                <img src={PCXLogo} alt=""/>
                                <div className={"item-text"}>PCX</div>
                            </div>
                            <div className={"item-balance"}>0.0024</div>
                        </div>
                    </li>
                    <li>
                        <div className={"assets-item"}>
                            <div className={"item-left"}>
                                <img src={SBTCLogo} alt=""/>
                                <div className={"item-text"}>SBTC</div>
                            </div>
                            <div className={"item-balance"}>0.0034</div>
                        </div>
                    </li>
                    <li>
                        <div className={"assets-item"}>
                            <div className={"item-left"}>
                                <img src={SBCHLogo} alt=""/>
                                <div className={"item-text"}>SBCH</div>
                            </div>
                            <div className={"item-balance"}>0.0054</div>
                        </div>
                    </li>
                    <li>
                        <div className={"assets-item"}>
                            <div className={"item-left"}>
                                <img src={SDOGLogo} alt=""/>
                                <div className={"item-text"}>SDOG</div>
                            </div>
                            <div className={"item-balance"}>0.0064</div>
                        </div>
                    </li>
                </ul>
            </DropListStyle>}
        </WalletWrapperStyle>
    )
}

export default Wallet;
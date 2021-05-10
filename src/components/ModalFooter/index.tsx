import React from "react";
import { ModalFooterStyle } from "./style";
import warningLogo from "../IssueRequestSuccessCard/icons/warm.svg";

interface FooterProps{
    btcReceiveAddress :string;
    lockCollateral :number;
    issueAmount: number;
    vaultPCXAddress: string;
    vaultBTCAddress: string;
}
const ModalFooter:React.FunctionComponent<FooterProps> = ({btcReceiveAddress,lockCollateral,issueAmount,vaultPCXAddress,vaultBTCAddress}) =>{
    return (
        <ModalFooterStyle>
            <ul>
                <li>
                    <div className={"font"}>
                        <div>
                            BTC接收地址
                        </div>
                        <img src={warningLogo} alt=""/>
                    </div>
                    <div>{btcReceiveAddress}</div>
                </li>
                <li>
                    <div className={"font"}>
                        <div>发行总额</div>
                        <img src={warningLogo} alt=""/>
                    </div>
                    <div>{issueAmount} BTC</div>
                </li>
                <li>
                    <div className={"font"}>
                        <div>锁定抵押品</div>
                        <img src={warningLogo} alt=""/>
                    </div>
                    <div>{lockCollateral}</div>
                </li>
                <li>
                    <div className={"font"}>
                        <div>资产保险库PCX地址</div>
                        <img src={warningLogo} alt=""/>
                    </div>
                    <div>{vaultPCXAddress}</div>
                </li>
                <li>
                    <div className={"font"}>
                        <div>资产保险库BTC地址</div>
                        <img src={warningLogo} alt=""/>
                    </div>
                    <div>{vaultBTCAddress}</div>
                </li>
            </ul>
        </ModalFooterStyle>
    )
}
export default ModalFooter;

import React from "react";
import { CardFooterStyle } from "./style";
import warningLogo from "../IssueRequestSuccessCard/icons/warm.svg";

interface FooterProps{
    lockCollateral :number;
    issueAmount: number;
    toAccount:string;
}
const CardFooter:React.FunctionComponent<FooterProps> = ({lockCollateral,issueAmount,toAccount}) =>{
    return (
        <CardFooterStyle>
            <ul>
                <li>
                    <div className={"font"}>
                        <div>
                            锁定抵押品
                        </div>
                        <img src={warningLogo} alt=""/>
                    </div>
                    <div>{lockCollateral} PCX</div>
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
                        <div>目标账户</div>
                        <img src={warningLogo} alt=""/>
                    </div>
                    <div>{toAccount}</div>
                </li>
            </ul>
        </CardFooterStyle>
    )
}
export default CardFooter;

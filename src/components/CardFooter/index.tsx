import React from "react";
import { CardFooterStyle } from "./style";
import ExplainTag from "../ExplainTag";

interface FooterProps{
    lockCollateral :number;
    issueAmount: number;
    toAccount:string;
}
const CardFooter:React.FunctionComponent<FooterProps> = ({lockCollateral,issueAmount,toAccount}) =>{
    return (
        <CardFooterStyle>
            <ExplainTag title='锁定抵押品' children={<div>{lockCollateral} PCX</div>}/>
            <ExplainTag title='发行总额' children={<div>{issueAmount} BTC</div>}/>
            <ExplainTag title='目标账户' children={<div>{toAccount}</div>}/>
        </CardFooterStyle>
    )
}
export default CardFooter;

import React from "react";
import {IssueRequestCardStyle} from "./style";
import SBTCLogo from "../../components/Header/Wallet/icons/SBTC.svg"
import warningLogo from "./icons/warm.svg"
import Question from '../ExplainTag/icons/question.svg'
import CardMain from "../CardMain";
import CardFooter from "../CardFooter";

function IssueRequestSuccessCard() {
    return (
        <IssueRequestCardStyle>
            <div className={"card-header"}>
                <img src={SBTCLogo} alt=""/>
                <div className={"assets-text"}>
                    <div className={"assets-number"}>10.8273</div>
                    <div>SBTC</div>
                </div>
                <div className={"time"}>
                    <div className={"time-title"}>剩余时间</div>
                    <div className={"time-content"}>47:56:10</div>
                    <img src={Question} alt=""/>
                </div>
            </div>
            <CardMain opreturn={"81e71f40d31aa46f09da3f5d58a879c54708725f96730df2d8ac67050b6e2a07"} address={"ms3tsPc5nJZWunt3vXotJoDcoTHGohKiHC"}/>
            <div className={"line"}/>
            <CardFooter lockCollateral={312} issueAmount={321312} toAccount={"3123123dasdas"}/>
        </IssueRequestCardStyle>
    )
}

export default IssueRequestSuccessCard;
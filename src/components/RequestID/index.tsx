import React from "react";
import { RequestIDstyle } from "./style";
import warnningLogo from "../IssueRequestSuccessCard/icons/warm.svg";
interface IdProps{
    requestID : string
}
const RequestID:React.FunctionComponent<IdProps> = ({requestID}) =>{
    return (
        <RequestIDstyle>
                <div className={"left"}>
                    <div>请求ID</div>
                    <img src={warnningLogo} alt=""/>
                </div>
                <div>
                    {requestID}
                </div>
        </RequestIDstyle>
    )
}
export default RequestID;
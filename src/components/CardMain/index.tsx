import React from "react";
import copy from 'copy-to-clipboard';
import CopyLogo from "../IssueRequestSuccessCard/icons/COPY.svg";
import WarmRedLogo from "../IssueRequestSuccessCard/icons/warm_red.svg";
import QrLogo from "../IssueRequestSuccessCard/icons/qr.svg";
import Question from '../ExplainTag/icons/question.svg'
import { CardMainStyle } from "./style";

interface MainProps{
    opreturn :string;
    address: string;
}

const CardMain:React.FunctionComponent<MainProps> = ({opreturn,address}) =>{
    const copyOpreturn = () => {
        copy(opreturn);
    }
    const copyAddress = () => {
        copy(address);
    }
    return (
        <CardMainStyle>
            <div>
                <div className={"opreturn-title"}>
                    <div className={"step-one"}>1</div>
                    <div className={"cp-op"}>复制OP_RETURN</div>
                    <img src={Question} alt=""/>
                </div>
                <div className='opreturn-res'>
                    <div className='verticalLine' />
                    <div>
                        <div className={"opreturn-content-wrapper"}>
                            <div className={"opreturn-content"}>
                                <div className={"op-return-text"}>
                                    {opreturn}
                                </div>
                                <hr className='line' />
                                <div className={"copy"} onClick={copyOpreturn}>
                                    <img src={CopyLogo} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className={"tip-wrapper"}>
                            <div className={"tip"}>
                                <img src={WarmRedLogo} alt=""/>
                                <div>必须在比特币交易中添加op_return,否则会造成资产损失</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className={"opreturn-title"}>
                    <div className={"step-one"}>2</div>
                    <div className={"cp-op"}>发送 1.0 BTC 到下面的地址</div>
                    <div className={"info"}>(请在单笔交易中完成)</div>
                    <img src={Question} alt=""/>
                </div>
                <div className={"opreturn-content-wrapper"}>
                    <div className={"btc-content"}>
                        <div className={"op-return-text"}>
                            {address}
                        </div>
                        <hr className='line' />
                        <div className={"copy"} onClick={copyAddress}>
                            <img src={CopyLogo} alt=""/>
                        </div>
                    </div>
                </div>
                <div className={"qr-wrapper"}>
                    <img src={QrLogo} alt=""/>
                    <div className={"qr"}>
                        地址二维码
                    </div>
                </div>
            </div>
        </CardMainStyle>
    )
}
export default CardMain;

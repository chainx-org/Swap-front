import React from "react";
import {VaultCardStyle, VaultTopStyle} from "./style";
import EarnCard from "./EarnCard";
import BtcInfoCard from "./BtcInfoCard";
import HistoryCard from "./HistoryCard";

function VaultCard() {
    return (
        <VaultCardStyle>
            <div className={"vault-card-title"}>
                资产保险库
            </div>
            <VaultTopStyle>
                <EarnCard/>
                <BtcInfoCard/>
            </VaultTopStyle>
            <HistoryCard/>
        </VaultCardStyle>
    )
}

export default VaultCard;

import React, { useContext, useEffect, useMemo, useState } from "react";
import {
  BridgeStyle,
} from "./style";
import Issue from "../../components/Issue";
import { useTranslation } from "react-i18next";
import Redeem from "../../components/Redeem";
import IssueBubble from "../../components/TransactionBubble/IssueBubble";
import RedeemBubble from "../../components/TransactionBubble/RedeemBubble";
import { TransactionBubbleStyle } from "../../components/TransactionBubble/style";
import { Button, Modal, notification } from "antd";
import warningLogo from "./icons/redWarning.svg";
import warningLogo2 from "./icons/warning2.svg";
import { useTab } from "../../hooks/useTab";
import { FeeContext } from "../../hooks/useFeeContext";
import useAccountModel from "../../hooks/useAccountModel";
import { IssueRequestsContext } from "../../hooks/useIssueRequests";
import { decodeAddress, encodeAddress } from "@polkadot/keyring";
import { useApi } from "../../hooks/useApi";
import { RedeemRequestsContext } from "../../hooks/useRedeemRequest";
import { stringToHex } from "@polkadot/util";
import { web3FromAddress } from "@polkadot/extension-dapp";
import { useLeftBlock } from "../../hooks/useLeftBlock";
import { useApiReady } from "../../hooks/useApiReady";
import IssueRequestSuccessCard from "../../components/IssueRequestSuccessCard";
enum Tab {
  Issue,
  Redeem,
}

function Bridge() {
  const value = useContext(IssueRequestsContext);
  const RedeemData = useContext(RedeemRequestsContext);
  const { currentAccount } = useAccountModel();
  const { api, isApiReady } = useApi();
  const [IssueRequestList,SetIssueRequestList] = useState([] as any[]);
  const [RedeemRequestList,SetRedeemRequestList] = useState([] as any[])
  let polkaAccount = encodeAddress(
    decodeAddress(currentAccount ? currentAccount.address : "16aVMBpJEdRe3PW2E3AsWENYhoKUaeTfDT6P6fdUCQtiiHVL"),
    0
  );

  const [issueModalVisible, SetIssueModalVisible] = useState(false);
  const [RedeemModalVisible, SetRedeemModalVisible] = useState(false);
  const [issueClickId, SetissueClickId] = useState("");
  const [RedeemClickId, SetRedeemClickId] = useState("");
  const [leftBlock, setLeftBlock] = useState(100);
  const { t } = useTranslation();
  return (
    <BridgeStyle>
    <IssueRequestSuccessCard/>
    </BridgeStyle>
  );
}

export default Bridge;

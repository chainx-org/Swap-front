import React from "react";
import Loading from "../../../assets/loading.png";
import { WaitingWrapper } from "./style";
interface Props {}
const BackWaitingContent = ({}: Props): React.ReactElement<Props> => {
  return (
    <WaitingWrapper>
      <img src={Loading} className="loading" alt="loading" />
      <div className="waiting">waiting for confimation</div>
      <div className="confirm">
        Confirm this transaction in polkadot-js/extension
      </div>
    </WaitingWrapper>
  );
};

export default BackWaitingContent;

import React, { useState } from "react";
import NormalButton from "../../Button";
import { StatusWrapper } from "./style";
import Error from "../../../assets/Feedback_failure.svg";
import Success from "../../../assets/Feedback_successed.svg";

interface Props {
  statusValue?: String;
  onCancel: React.Dispatch<any>
}
const BackStatusContent = ({
  statusValue,
  onCancel
}: Props): React.ReactElement<Props> => {
  const HideConfirmSwap = () => {
    onCancel(false)
  }
  return (
    <StatusWrapper>
      {statusValue === "fail" ? (
        <>
          <img src={Error} className="status" alt="status" />
          <div className="statusValue">cause</div>
        </>
      ) : (
        <>
          <img src={Success} className="status" alt="status" />
          <div className="statusValue">transaction submitted</div>
        </>
      )}
      <NormalButton label="Close" onClick={HideConfirmSwap}/>
    </StatusWrapper>
  );
};

export default BackStatusContent;

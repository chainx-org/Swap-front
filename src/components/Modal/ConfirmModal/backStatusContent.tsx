import React, { useState } from "react";
import NormalButton from "../../Button";
import { StatusWrapper } from "./style";
import Error from "../../../assets/Feedback_failure.svg";
import Success from "../../../assets/Feedback_successed.svg";

interface Props {
  statusValue?: String;
}
const BackStatusContent = ({
  statusValue,
}: Props): React.ReactElement<Props> => {
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
      <NormalButton label="Close" />
    </StatusWrapper>
  );
};

export default BackStatusContent;

import React, { useContext, useState, useEffect } from "react";
import BridgeDiv from "./style";
import BridgeList from "./bridgeList";
function Bridge() {
  const [isBridge, setIsBridge] = useState(false);
  return (
    <BridgeDiv>
      <div className={"BridegeBox"}>
        <div
          className={isBridge ? "clickBridege" : "Bridege"}
          onClick={() => setIsBridge(!isBridge)}
        >
          Bridge
        </div>
        <div className="BridgeList">{<BridgeList />}</div>
      </div>
    </BridgeDiv>
  );
}

export default Bridge;

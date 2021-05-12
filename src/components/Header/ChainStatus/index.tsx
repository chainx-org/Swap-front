import React from "react";
import { PointStyle, ChainStatusStyle } from "./style";
import logo from "../../../assets/ChainX_logo.png";
function ChainStatus() {
  return (
    <ChainStatusStyle>
      <div className={"chainStatus-content"}>
        <img src={logo} alt="" />
        {/* <div className={"status-content"}>
                  <PointStyle/>
                  <div className={"status-text"}>正常运行</div>
              </div> */}
      </div>
    </ChainStatusStyle>
  );
}
export default ChainStatus;

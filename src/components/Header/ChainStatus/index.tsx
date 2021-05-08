import React from "react";
import {PointStyle,ChainStatusStyle} from "./style";
import logo from "../ChainStatus/icons/chainx_logo.svg";
function ChainStatus(){
  return (
      <ChainStatusStyle>
          <div className={"chainStatus-content"}>
          <img src={logo} alt="" />
              <div className={"status-content"}>
                  <PointStyle/>
                  <div className={"status-text"}>正常运行</div>
              </div>
          </div>
      </ChainStatusStyle>
  )
}
export  default  ChainStatus;
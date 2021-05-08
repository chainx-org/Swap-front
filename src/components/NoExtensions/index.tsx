import React from "react";
import styled from "styled-components";
import logo from "./icons/logo.svg"
const NoExtensionsStyle = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .tip{
      width:360px;
      height:56px;
      background:#fff;
      border-radius:36.5px;
      display:flex;
      justify-content:center;
      align-items:center;
  }
  .info{
      margin-top: 20px;
      color:#fff
  }
`
function NoExtensions(){
    return(
        <NoExtensionsStyle>
            <div className={"tip"}>
                <a href="https://polkadot.js.org/extension/" target={'_blank'}>
                <img src={logo} alt=""/>
                </a>
            </div>
            <div className="info">请使用 PolkadotJS 插件登陆</div>
        </NoExtensionsStyle>
    )
}
export default NoExtensions;

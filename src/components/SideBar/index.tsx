import React, { useContext, useEffect, useState } from "react";
import { SideBarStyle, SideBarTab, Line } from "./style";
import Home from './icons/home.svg'
import History from './icons/history.svg'
import { Tooltip } from "antd";
import { NavLink } from "react-router-dom";

function SideBar(): React.ReactElement {

  return (
    <SideBarStyle>
      {/* <main>
        <nav>
          <LinkStyle to={"/"} exact activeClassName={"active"}>
            <img src={bridgeLogo} alt="" />
            <div>{t("Bridge")}</div>
          </LinkStyle>
          <LinkStyle to={"/history"} activeClassName={"active"}>
            <img src={historyLogo} alt="" />
            <div>{t("History")}</div>
          </LinkStyle>
          <LinkStyle to={"/vault"} activeClassName={"active"}>
            <img src={vaultLogo} alt="" />
            <div>{t("Vault")}</div>
          </LinkStyle>
        </nav>
      </main> */}
      <SideBarTab>
        <Tooltip placement="topLeft" title='回到首页' arrowPointAtCenter>
          <NavLink to={"/"} exact >
            <img src={Home} alt="" />
          </NavLink>
        </Tooltip>
        <Line />
        <NavLink to={"/history"} >
          <img src={History} alt="" />
        </NavLink>
      </SideBarTab>
    </SideBarStyle>
  );
}

export default SideBar;

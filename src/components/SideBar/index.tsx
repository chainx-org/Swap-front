import React from "react";
import { SideBarStyle, SideBarTab, Line } from "./style";
import Home from './icons/home.svg'
import History from './icons/history.svg'
import { Tooltip } from "antd";
import { NavLink } from "react-router-dom";

function SideBar(): React.ReactElement {

  return (
    <SideBarStyle>
      <SideBarTab>
        <Tooltip placement="topLeft" title='回到首页' arrowPointAtCenter>
          <NavLink to={"/"} exact >
            <img src={Home} alt="" />
          </NavLink>
        </Tooltip>
        <Line />
      </SideBarTab>
    </SideBarStyle>
  );
}

export default SideBar;

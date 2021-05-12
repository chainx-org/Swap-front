import React from "react";
import { HeaderStyle } from "./style";
import SelectAccount from "./SelectAccount/AccountCard";
import ChainStatus from "./ChainStatus";
import ChangeLanguage from "./ChangeLanguage";
import Wallet from "./Wallet";
import TabList from "./TabList";

function Header() {
  return (
    <HeaderStyle>
      <ChainStatus />
      <div className={"header-right"}>
        <TabList />
        <Wallet />
        <SelectAccount />
        {/* <ChangeLanguage /> */}
      </div>
    </HeaderStyle>
  );
}

export default Header;

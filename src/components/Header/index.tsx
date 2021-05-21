import React, { useContext } from "react";
import { AccountsContext } from "../../hooks/AccountsProvider";
import { HeaderStyle } from "./style";
import SelectAccount from "./SelectAccount/AccountCard";
import ChainStatus from "./ChainStatus";
import ChangeLanguage from "./ChangeLanguage";
import Wallet from "./Wallet";
import TabList from "./TabList";
import styled from "styled-components";

const WalletBox = styled.div`
  // margin-left: 30px;
  margin: 0;
`;
function Header() {
  const { isExtensionInjected } = useContext(AccountsContext);
  return (
    <HeaderStyle>
      <ChainStatus />
      <div className={"header-right"}>
        <TabList />
        <WalletBox>{isExtensionInjected && <Wallet />}</WalletBox>
        <SelectAccount />
      </div>
    </HeaderStyle>
  );
}

export default Header;

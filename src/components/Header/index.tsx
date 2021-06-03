import React, { useContext } from "react";
import { AccountsContext } from "../../hooks/AccountsProvider";
import { HeaderStyle } from "./style";
import SelectAccount from "./SelectAccount/AccountCard";
import ChainStatus from "./ChainStatus";
import ChangeLanguage from "./ChangeLanguage";
import Wallet from "./Wallet";
import TabList from "./TabList";
import Bridege from "./BridgeButton";
import styled from "styled-components";

const WalletBox = styled.div`
  margin-left: 30px;
`;
function Header() {
  const { isExtensionInjected } = useContext(AccountsContext);
  return (
    <HeaderStyle>
      <ChainStatus />
      <div className={"header-right"}>
        {/* <TabList /> */}
        <Bridege />
        <WalletBox>{isExtensionInjected && <Wallet />}</WalletBox>
        {/* {isExtensionInjected && <Wallet />} */}
        <SelectAccount />
      </div>
    </HeaderStyle>
  );
}

export default Header;

import React, { useContext, useState, useEffect } from "react";
import { SelectAccountStyle } from "./style";
import SelectAccount from "./SelectAccount";
import DogIcon from "../../../assets/symbols_DOGE.svg";
import { AccountsContext } from "../../../hooks/AccountsProvider";
import { shortenString } from "../../../helper";
import styled from "styled-components";
import Wallet from "../../../assets/wallet_yellower.svg";
import Identicon from "@polkadot/react-identicon";
import { relative } from "node:path";
const IconStyle = styled.div`
  width: 16px;
  height: 16px;
  margin: "0px 0px 0px 0px";
  & > svg {
    width: 100%;
    height: 100%;
  }
`;

function AccountCard() {
  const [isAccountListOpen, setIsAccountListOpen] = useState(false);
  const { currentAccount, isExtensionInjected } = useContext(AccountsContext);
  const [name, setName] = useState(currentAccount.name);
  const [address, setAddress] = useState(currentAccount.address);
  const [hasAccount, setHasAccount] = useState(isExtensionInjected);
  const selectAccountList = (e: any) => {
    e.nativeEvent.stopImmediatePropagation();
    setIsAccountListOpen(!isAccountListOpen);
  };
  const hideAllMenu = () => {
    setIsAccountListOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", hideAllMenu);
  }, []);
  useEffect(() => {
    setHasAccount(isExtensionInjected);
  }, [isExtensionInjected]);

  useEffect(() => {
    setAddress(shortenString(currentAccount.address));
    setName(shortenString(currentAccount.name));
  }, [currentAccount.address]);

  return (
    <div>
      <SelectAccountStyle className="selectBox" onClick={selectAccountList}>
        {!hasAccount && (
          <div className={"watting-connect"}>
            <div className={"current-icon"}>
              {/* < style={IconStyle} /> */}
              <IconStyle>
                <img src={Wallet} alt="" />
              </IconStyle>
            </div>

            <div className={"current-info"}>Connect to a wallet</div>
          </div>
        )}
        {hasAccount && (
          <div className={"account-info"}>
            <div className="current-user">
              <div className={"current-icon"}>
                <IconStyle>
                  <Identicon
                    value={currentAccount.address}
                    size={32}
                    theme="polkadot"
                  />
                </IconStyle>
              </div>
              <div className={"current-name"}>{name}</div>
            </div>
            <div className={"current-address"}>{address}</div>
          </div>
        )}
      </SelectAccountStyle>
      {isAccountListOpen && <SelectAccount />}
    </div>
  );
}

export default AccountCard;

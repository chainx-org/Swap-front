import React, { useContext, useState, useEffect } from "react";
import { SelectAccountStyle } from "./style";
import SelectAccount from "./SelectAccount";
import { ReactComponent as DogIcon } from "../../../assets/symbols_DOGE.svg";
import { AccountsContext } from "../../../hooks/AccountsProvider";
import { shortenString } from "../../../helper";

const IconStyle = {
  margin: "2px 0px 0px 0px",
};

function AccountCard() {
  const [isAccountListOpen, setIsAccountListOpen] = useState(false);
  const { currentAccount } = useContext(AccountsContext);
  const [name, setName] = useState(currentAccount.name);
  const [address, setAddress] = useState(currentAccount.address);
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
    setAddress(shortenString(currentAccount.address));
    setName(shortenString(currentAccount.name));
  }, [currentAccount.address]);

  return (
    <div>
      <SelectAccountStyle onClick={selectAccountList}>
        <div className={"current-icon"}>
          <DogIcon style={IconStyle} />
        </div>
        <div className={"current-name"}>{name}</div>
        <div className={"current-address"}>{address}</div>
      </SelectAccountStyle>
      {isAccountListOpen && <SelectAccount />}
    </div>
  );
}

export default AccountCard;

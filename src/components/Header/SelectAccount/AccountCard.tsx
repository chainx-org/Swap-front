import React, { useContext, useState, useEffect } from "react";
import { SelectAccountStyle } from "./style";
import { ApiContext } from "../../../hooks/ApiProvider";
import SelectAccount from "./SelectAccount";
import { ReactComponent as DogIcon } from "../../../assets/symbols_DOGE.svg";

const IconStyle = {
  margin: "2px 0px 0px 0px",
};

function AccountCard() {
  let address1 = "5RkTc31Cc31Cc31Cc31Cr";
  const [isAccountListOpen, setIsAccountListOpen] = useState(false);
  const [address, setAddress] = useState(address1);
  const { accounts } = useContext(ApiContext);
  console.log("accounts", accounts);
  const selectAccountList = (e: {
    nativeEvent: { stopImmediatePropagation: () => void };
  }) => {
    e.nativeEvent.stopImmediatePropagation();
    setIsAccountListOpen(!isAccountListOpen);
  };
  const hideAllMenu = () => {
    setIsAccountListOpen(false);
  };

  function addressFormate() {
    if (address.length > 11) {
      return setAddress(
        address.substring(0, 5).concat("...", address.slice(-6, -1))
      );
    }
    return address;
  }
  useEffect(() => {
    addressFormate();
    document.addEventListener("click", hideAllMenu);
  }, []);
  return (
    <div>
      <SelectAccountStyle onClick={selectAccountList}>
        <div className={"current-icon"}>
          <DogIcon style={IconStyle} />
        </div>
        <div className={"current-name"}>Pedro Amorim</div>
        <div className={"current-address"}>{address}</div>
      </SelectAccountStyle>
      {isAccountListOpen === true && <SelectAccount />}
    </div>
  );
}

export default AccountCard;

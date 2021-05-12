import React, { useContext, useState, useEffect } from "react";
import { SelectAccountStyle } from "./style";
import { ApiContext } from "../../../hooks/ApiProvider";
import SelectAccount from "./SelectAccount";
import { ReactComponent as DogIcon } from "../../../assets/symbols_DOGE.svg";

const IconStyle = {
  margin: "2px 0px 0px 0px",
};

function AccountCard() {
  const [isAccountListOpen, setIsAccountListOpen] = useState(false);
  const { accounts } = useContext(ApiContext);
  console.log("accounts", accounts);
  function selectAccountList() {
    isAccountListOpen === false
      ? setIsAccountListOpen(true)
      : setIsAccountListOpen(false);
  }
  const hideAllMenu = () => {
    if (isAccountListOpen === true) {
      setIsAccountListOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", hideAllMenu);
  }, []);
  return (
    <div>
      <SelectAccountStyle onClick={selectAccountList}>
        <div className={"current-icon"}>
          <DogIcon style={IconStyle} />
        </div>
        <div className={"current-name"}>Pedro Amorim</div>
        <div className={"current-address"}>5RkTK…c31Cr</div>
      </SelectAccountStyle>
      {isAccountListOpen === true && <SelectAccount />}
    </div>
  );
}

export default AccountCard;

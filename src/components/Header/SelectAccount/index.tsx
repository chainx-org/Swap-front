import React, { useState } from "react";
import { SelectAccountStyle } from "./style";
import dropdownlogo from "../SelectAccount/icons/Drop down.svg"
import { Modal, Radio } from "antd";
import useAccountModel from "../../../hooks/useAccountModel";
import { useAccountInfo } from "../../../hooks/useAccountInfo";
import {useApi} from "../../../hooks/useApi"
function SelectAccount() {
  const accountModel = useAccountModel();
  const [AccountListModal, SetAccountListModal] = useState(false);
  const { currentAccount } = useAccountModel();
  const { accounts } = useAccountModel();
  const [value, setValue] = useState(currentAccount);
  const currentAddress = currentAccount?.address;
  return (
    <SelectAccountStyle>
      <div className={"avatar"}></div>
      <div className={"current-account"}>{currentAccount?.name}</div>
      <div className={"icon"}>
          <img src={dropdownlogo} alt=""/>
      </div>
    </SelectAccountStyle>
  );
}

export default SelectAccount;

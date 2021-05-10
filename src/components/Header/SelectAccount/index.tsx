import React, { useContext } from 'react';
import { SelectAccountStyle } from "./style";
import dropdownlogo from "../SelectAccount/icons/Drop down.svg"
import { ApiContext } from '../../../hooks/ApiProvider';

function SelectAccount() {
  const {accounts} = useContext(ApiContext)
  console.log('accounts', accounts)
  return (
    <SelectAccountStyle>
      {/*<div className={"avatar"}></div>*/}
      <div className={"current-account"}></div>
      <div className={"icon"}>
          <img src={dropdownlogo} alt=""/>
      </div>
    </SelectAccountStyle>
  );
}

export default SelectAccount;

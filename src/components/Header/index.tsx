import React from 'react';
import { HeaderStyle } from './style';
import SelectAccount from './SelectAccount';
import ChainStatus from './ChainStatus';
import ChangeLanguage from './ChangeLanguage';
import Wallet from './Wallet';

function Header() {
  return (
    <HeaderStyle>
      <ChainStatus/>
      <div className={'header-right'}>
        <Wallet/>
        <SelectAccount/>
        <ChangeLanguage/>
      </div>
    </HeaderStyle>
  );
}

export default Header;

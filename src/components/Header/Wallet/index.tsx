import React, { useEffect, useState, useContext } from "react";
import { WalletStyle, WalletWrapperStyle, DropListStyle } from "./style";
import { ReactComponent as WalletLogo } from "../../../assets/wallet_black.svg";
import PCXLogo from "./icons/PCX_W.svg";
import SBTCLogo from "./icons/SBTC.svg";
import SBCHLogo from "./icons/SBCH.svg";
import SDOGLogo from "./icons/SDOG.svg";
import { useTranslation } from "react-i18next";
import { TokenContext } from "../../../hooks/TokenProvider";

function Wallet() {
  const { t, i18n } = useTranslation();
  const [dropToggle, setDropToggle] = useState(false);
  const hideAllMenu = () => {
    setDropToggle(false);
  };
  const showMenu = (e: {
    nativeEvent: { stopImmediatePropagation: () => void };
  }) => {
    e.nativeEvent.stopImmediatePropagation();
    setDropToggle(!dropToggle);
  };
  useEffect(() => {
    document.addEventListener("click", hideAllMenu);
  }, []);
  const { coinList } = useContext(TokenContext);
  return (
    <WalletWrapperStyle>
      {/* <WalletStyle onClick={showMenu}> */}
      <WalletStyle>
        <WalletLogo />
        <div className="dropList">
          <ul>
            {coinList.map((item: any) => (
              <li key={item.id}>
                <div className={"assets-item"}>
                  <div className={"item-left"}>
                    <img src={item.icon} alt="" />
                    <div className={"item-text"}>{item.unit}</div>
                  </div>
                  <div className={"item-balance"}>{item.coinBalance}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </WalletStyle>
      {/* {dropToggle && ( */}
      {/* <DropListStyle></DropListStyle> */}
      {/* )} */}
    </WalletWrapperStyle>
  );
}

export default Wallet;

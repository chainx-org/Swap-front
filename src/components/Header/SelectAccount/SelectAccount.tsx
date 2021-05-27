import React, { useContext } from "react";
import styled from "styled-components";
import { ReactComponent as DogIcon } from "../../../assets/symbols_DOGE.svg";
import { shortenString } from "../../../helper";
import { AccountItem, AccountsContext } from "../../../hooks/AccountsProvider";
import Identicon from "@polkadot/react-identicon";
const MenuBox = {
  position: "absolute" as "absolute",
};

const IconBox = {
  width: "100%",
  height: "100%",
};

const DropListStyle = styled.div`
  position: absolute;
  width: 189px;
  margin-top: 10.5px;
  background: #ffffff;
  border: 1px solid #efefef;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > li:last-child {
      height: 87px;
    }
  }
  li {
    height: 70px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .assets-item {
    padding: 13px 16px;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #efefef;
    .item-left {
      width: 36px;
      height: 36px;
      margin-right: 8px;
    }
    .item-right {
      display: flex;
      flex-direction: column;
      .item-name {
        font-family: NotoSansSC-Medium;
        font-size: 14px;
        line-height: 20px;
        color: #282828;
        font-weight: 500;
      }
      .item-address {
        font-family: NotoSansSC-Regular;
        font-size: 12px;
        line-height: 17px;
        color: #8e8e8e;
        font-weight: 400;
      }
    }
  }
`;

const Wrapper = styled.div`
  cursor: pointer;
`;

function SelectAccount() {
  const { accountList, setCurrentAccount } = useContext(AccountsContext);
  const changeAccount = (account: AccountItem) => {
    setCurrentAccount({
      address: account.address,
      name: account.name,
      theme: account.theme,
    });
  };

  return (
    <div style={MenuBox}>
      <DropListStyle>
        <ul>
          {accountList.map((item, index) => {
            return (
              <Wrapper key={index} onClick={() => changeAccount(item)}>
                <li>
                  <div className={"assets-item"}>
                    <div className={"item-left"}>
                      <Identicon
                        value={item.address}
                        size={32}
                        theme="polkadot"
                      />
                    </div>
                    <div className={"item-right"}>
                      <div className={"item-name"}>{item.name}</div>
                      <div className={"item-address"}>
                        {shortenString(item.address)}
                        {/* {item.address} */}
                      </div>
                    </div>
                  </div>
                </li>
              </Wrapper>
            );
          })}
        </ul>
      </DropListStyle>
    </div>
  );
}

export default SelectAccount;

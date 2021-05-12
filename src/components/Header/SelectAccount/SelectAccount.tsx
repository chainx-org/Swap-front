import React, { useContext } from "react";
import { ApiContext } from "../../../hooks/ApiProvider";
import styled from "styled-components";
import { ReactComponent as DogIcon } from "../../../assets/symbols_DOGE.svg";

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
    // padding: 13px 16px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #efefef;
    .item-left {
      width: 36px;
      height: 36px;
      margin-right: 8px;
      // border: 1px solid red;
    }
    .item-right {
      display: flex;
      flex-direction: column;
      .item-name {
        font-family: NotoSansSC-Medium;
        font-size: 14px;
        color: #282828;
        font-weight: 500;
      }
      .item-address {
        font-family: NotoSansSC-Regular;
        font-size: 12px;
        color: #8e8e8e;
        font-weight: 400;
      }
    }
  }
`;
function SelectAccount() {
  let { accounts } = useContext(ApiContext);
  accounts = [
    {
      name: "xl",
      address: "129333333.com",
    },
    { name: "x2", address: "123344.com" },
  ];
  console.log("accounts", accounts);
  return (
    <div style={MenuBox}>
      <DropListStyle>
        <ul>
          {accounts.map((item, index) => {
            return (
              <li key={index}>
                <div className={"assets-item"}>
                  <div className={"item-left"}>
                    <DogIcon style={IconBox} />
                  </div>
                  <div className={"item-right"}>
                    <div className={"item-name"}>{item.name}</div>
                    <div className={"item-address"}>{item.address}</div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </DropListStyle>
    </div>
  );
}

export default SelectAccount;

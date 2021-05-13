import React, { useState } from "react";
import { DivDialog } from "./style";
import ContainerCard from "../../../components/Card/ContainerCard";
import styled from "styled-components";
import { ReactComponent as DogIcon } from "../../../assets/symbols_DOGE.svg";
const DialogItem = styled.div`
  width: 356px;
  height: 64px;
  .item {
    display:flex;
    flex-direction:row;
    width: 356px;
    height: 64px;
    .left-item {
      display:flex;
      flex-direction:row;
      width: 100px;
      height: 64px;
      margin-left:16px;
      margin-right:100px;
      align-items: center;
      .left-icon{
        width:20px;
        height:20px;
        margin-right: 7px;
        & > svg {
          width: 20px;
          height: 20px;
        }
      }
      .right-info{
        display:flex;
        flex-direction:column;
        margin:auto 0px;
        width:80px;
        &>span:nth-child(1){
          width:80px;
          line-height:22px;
          height:22px;
          font-family: PingFangSC-Medium;
          font-size: 16px;
          color: #282828;
          font-weight: 500;
        }
        &>span:nth-child(2){
          height:17px;
          line-height:17px;
          width:80px;
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #8E8E8E;
          font-weight: 400;
        }
      }
    }
    .right-item {
      width: 111px;
      height: 20px;
      margin:22px; 24px;
      line-height: 20px;
      font-family: PingFangSC-Medium;
      font-size: 14px;
      color: #908E8E;
      text-align: right;
      font-weight: 500;
    }
  }
`;
function DialogCard() {
  const accounts = [
    {
      name: "XBTC",
      type: "Bitcoin",
      icon: <DogIcon />,
      value: "234.0024",
    },
    {
      name: "XBCH",
      type: "Bitcoin Cash",
      icon: <DogIcon />,
      value: "12.0024",
    },
    {
      name: "XDOGE",
      type: "Dogecoin",
      icon: <DogIcon />,
      value: "12.0024",
    },
    {
      name: "XBTC",
      type: "Bitcoin",
      icon: <DogIcon />,
      value: "234.0024",
    },
    {
      name: "XETH",
      type: "Ether",
      icon: <DogIcon />,
      value: "0.0",
    },
    {
      name: "XDOT",
      type: "Polkadot",
      icon: <DogIcon />,
      value: "12.0024",
    },
  ];
  const [isAccountListOpen, setIsAccountListOpen] = useState(true);
  const closeCard = (e: {
    nativeEvent: { stopImmediatePropagation: () => void };
  }) => {
    e.nativeEvent.stopImmediatePropagation();
    setIsAccountListOpen(!isAccountListOpen);
  };
  return (
    <DivDialog onClick={closeCard}>
      {isAccountListOpen && (
        <div>
          <div className="mask"></div>
          <div className="content">
            <ContainerCard exitOption={true} title="Select a token">
              {accounts.map((item, index) => {
                return (
                  <DialogItem>
                    <div className="item" key={index}>
                      <div className="left-item">
                        <div className="left-icon">{item.icon}</div>
                        <div className="right-info">
                          <span>{item.name}</span>
                          <span>{item.type}</span>
                        </div>
                      </div>
                      <div className="right-item">{item.value}</div>
                    </div>
                  </DialogItem>
                );
              })}
            </ContainerCard>
          </div>
        </div>
      )}
    </DivDialog>
  );
}

export default DialogCard;

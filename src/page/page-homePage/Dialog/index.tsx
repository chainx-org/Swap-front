import React, { useContext, useState, useEffect } from "react";
import { DialogItem, DivDialog } from "./style";
import ContainerCard from "../../../components/Card/ContainerCard";
import Mask from "../../../components/Mask";
import BigNumber from "bignumber.js";
import { TokenContext } from "../../../hooks/TokenProvider";
import DogIcon from "../../../assets/symbols_DOGE.svg";
import ETHSymbol from "../../../assets/symbols_ETH.svg";
import DOGESymbol from "../../../assets/symbols_DOGE.svg";
import { Result } from "antd";

interface DialogCardProps {
  index?: Number;
  onCancel: React.Dispatch<boolean>;
  addCoinItem: any;
}
function DialogCard({
  index,
  onCancel,
  addCoinItem,
}: DialogCardProps): React.ReactElement<DialogCardProps> {
  const { tokenList, coinList } = useContext(TokenContext);
  // console.log(tokenList, "tokenList");
  const [account, setAccount] = useState(coinList);
  const clickItem = (item: any, index: any) => {
    debugger;
    addCoinItem(item, index);
    onCancel(false);
  };
  useEffect(() => {
    setAccount(coinList);
  }, [coinList]);
  return (
    <div>
      <DivDialog>
        <Mask />
        <div className="content">
          <ContainerCard
            onCancel={onCancel}
            title="Select a token"
            className={"card-list-content"}
          >
            {account.map((item: any, i: any) => {
              return (
                <DialogItem>
                  <div
                    className="item"
                    key={i}
                    onClick={() => clickItem(item, { index })}
                  >
                    <div className="left-item">
                      <div className="left-coinIcon">
                        <img src={item.icon} className="status" alt="status" />
                      </div>
                      <div className="right-info">
                        <span>{item.unit}</span>
                        <span>{item.name}</span>
                      </div>
                    </div>
                    <div className="right-item">{item.coinBalance}</div>
                  </div>
                </DialogItem>
              );
            })}
          </ContainerCard>
        </div>
      </DivDialog>
    </div>
  );
}

export default DialogCard;

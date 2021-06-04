import React, { useContext, useState, useEffect } from "react";
import { DialogItem } from "./style";
import ContainerCard from "../../../components/Card/ContainerCard";
import Mask from "../../../components/Mask";
import BigNumber from "bignumber.js";
import { TokenContext } from "../../../hooks/TokenProvider";
import DogIcon from "../../../assets/symbols_DOGE.svg";
import ETHSymbol from "../../../assets/symbols_ETH.svg";
import DOGESymbol from "../../../assets/symbols_DOGE.svg";
import { Result } from "antd";
import { PriceContext } from "../../../hooks/PriceProvider";

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
  const [account, setAccount] = useState(coinList);
  const { setInPrice, setOutPrice } = useContext(PriceContext);
  const clickItem = (item: any, index: any, i: any) => {
    addCoinItem(item, index, i);
    onCancel(false);
    setInPrice(null);
    setOutPrice(null);
  };
  useEffect(() => {
    setAccount(coinList);
  }, [coinList]);
  return (
    <div>
      <div className="content">
        <ContainerCard
          onCancel={onCancel}
          title="Select a token"
          className={"card-list-content"}
        >
          {account.map((item: any, i: any) => {
            return (
              <DialogItem key={i}>
                <div
                  className="item"
                  onClick={() => clickItem(item, { index }, i)}
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
    </div>
  );
}

export default DialogCard;

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
  const { accountBalance, tokenList } = useContext(TokenContext);
  console.log(tokenList, "tokenList");
  const [account, setAccount] = useState(tokenList);
  const clickItem = (item: any, index: any) => {
    addCoinItem(item, index);
    onCancel(false);
  };
  function accuracy(decimalsInput: number, balance: number) {
    decimalsInput = 1;
    balance = 100.1123;
    debugger;
    let accuracyResult = new BigNumber(balance);
    let divisionNumber = new BigNumber(Math.pow(10, decimalsInput));
    accuracyResult = accuracyResult.dividedBy(divisionNumber);
    let result = accuracyResult.toNumber();
    result.toFixed(4);
    console.log(result);
    return result;
  }
  function addCoinBalance(accountList: any, Balance: any) {
    // addCoinIcon(accountList);
    Balance.map((item: any) => {
      const keys = Object.keys(item);
      accountList.map(
        (child: { unit: string; coinBalance: any; decimals: any }) => {
          if (child.unit === keys[0]) {
            child.decimals = item[keys[0]]["decimals"];
            child.coinBalance = accuracy(
              item[keys[0]]["decimals"],
              item[keys[0]]["assetNumber"]
            );
          }
        }
      );
      console.log(accountList, "accountList");
    });
    return accountList;
  }

  useEffect(() => {
    // accuracy(8, 11111111111111111111111111);
    let result: any = addCoinBalance(account, accountBalance);
    setAccount([...result]);
  }, []);
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

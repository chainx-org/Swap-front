import React, { createContext, useContext, useEffect, useState } from "react";
import DialogCard from "../Dialog/index";
import { Input } from "antd";
import { ReactComponent as ArrowIcon } from "../../../assets/ArrowIcon.svg";
import { Tooltip, Card } from "antd";
import styled from "styled-components";
import { ApiContext } from "../../../hooks/ApiProvider";
import { TokenContext } from "../../../hooks/TokenProvider";
import { canFirstSwap, canSecondSwap } from "../../../helper/canSwap";
import { PriceContext } from "../../../hooks/PriceProvider";
const Item = styled(Tooltip)`
  .title-info {
    display: flex;
    justify-content: space-between;
    padding-left: 16px;
    padding-right: 16px;
    margin: 0px 0px 7px 0px;
    & > span:nth-child(1) {
      font-size: 12px;
      color: #282828;
      letter-spacing: 0.1px;
      text-align: right;
      display: inline-block;
      height: 20px;
      line-height: 20px;
      font-weight: 400;
    }
    & > span:nth-child(2) {
      font-size: 12px;
      color: #adadad;
      letter-spacing: 0.1px;
      text-align: right;
      display: inline-block;
      height: 20px;
      line-height: 20px;
      font-weight: 400;
    }
  }
  .selectBtn {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    padding-left: 16px;
    padding-right: 16px;
    .divBtn {
      cursor: pointer;
      display: flex;
      flex-direction: row;
      width: 120px;
      height: 40px;
      background: rgba(255, 255, 255, 0.9);
      border: 1px solid #efefef;
      box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.07);
      border-radius: 20px;
      margin-right: 16px;
      align-items: center;
      .divBtnIcon {
        width: 40px;
        height: 40px;
        .icon {
          margin: 10px 0px 10px 0px;
          padding-left: 10px;
          & > img {
            width: 20px;
            height: 20px;
          }
        }
        & > span:nth-child(1) {
          display: inline-block;
          margin-top: 1px;
          height: 100%;
          width: 100%;
        }
        & > svg {
          margin: 14px 14px 16px 14px;
          height: 12px;
          width: 8px;
        }
      }

      & > span:nth-child(1) {
        display: inline-block;
        height: 40px;
        font-size: 14px;
        line-height: 40px;
        font-weight: 500;
        color: #282828;
      }
      & > span:nth-child(2) {
        width: 40px;
        height: 40px;
        font-size: 14px;
        line-height: 40px;
        font-weight: 500;
        color: #282828;
        display: inline-block;
        margin: "auto auto";
      }
    }
    .input-div {
      height: 40px;
      width: 256px;
      .ant-input {
        height: 40px;
        background: #f7f8fa;
        position: static;
        z-index: 0;
        border-radius: 12px;
      }
      .ant-input-affix-wrapper {
        height: 40px;
        background: #f7f8fa;
        border: 1px solid #d9d9d9;
        border-radius: 12px;
        .ant-input {
          background: none !important;
        }
        .ant-input-suffix {
          color: #e9a840;
        }
      }
      .ant-input-affix-wrapper:focus,
      .ant-input-affix-wrapper-focused {
        border: 1px solid #d9d9d9;
        outline: 0;
        box-shadow: none;
      }
      .max-button {
        position: relative;
        z-index: 0;
        width: 32px;
        height: 20px;
        float: right;
        margin-top: -11%;
        margin-right: 3%;
        color: #e9a840;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        line-height: 20px;
        cursor: pointer;
      }
    }
  }
  .mask {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    right: 0;
    top: 0px;
    background-color: #000;
    opacity: 0.4;
    color: #f00;
    z-index: 1;
  }
  .content {
    position: fixed;
    width: 356px;
    left: 50%;
    top: 50%;
    margin-top: -100px;
    transform: translateY(-50%);
    transform: translateX(-50%);
    opacity: 1;
    background-color: #fff;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid #efefef;
    border-radius: 24px 24px 16px 16px;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
    z-index: 2;
  }
`;

interface currencyItemProps {
  index: any;
  children?: React.ReactNode;
  className?: string;
  currencyName: string;
  currencyTitle: string;
  currencyBalence: string;
  addCoin?: any;
  showSwapInfo?: any;
  inputCoinValue: {
    coinInput: any;
    setCoinInput: any;
  };
  id?: any;
}
function CurrencyItem({
  index,
  children,
  className = "",
  currencyName,
  currencyTitle,
  currencyBalence,
  addCoin,
  showSwapInfo,
  inputCoinValue,
  id,
}: currencyItemProps): React.ReactElement<currencyItemProps> {
  const {
    inPrice,
    outPrice,
    number,
    number2,
    setInPrice,
    setOutPrice,
    setNumber,
    setNumber2,
  } = useContext(PriceContext);
  const [isOpenDialog, setisOpenDialog] = useState(false);
  const { api, isApiReady } = useContext(ApiContext);
  const { tokenList, accountBalance } = useContext(TokenContext);

  const inputNumberOnly = (item: string) => {
    item = item.replace(/[^\d.]/g, "");
    const i = item.indexOf(".");
    const str1 = item.slice(0, i + 1);
    let str2 = item.slice(i + 1);
    str2 = str2.replace(/[^\d]/g, "");
    const strAll = str1 + str2;
    // /控制底部灰框和按钮的/
    strAll != "" && inPrice && outPrice
      ? showSwapInfo(true)
      : showSwapInfo(false);

    //如果是from 那就让他大于0 但小于balance值
    if (index === 0) {
      coinValue(strAll, canFirstSwap(strAll, currencyBalence));
      return strAll;
    } else {
      coinValue(strAll, canSecondSwap(strAll, currencyBalence));
      return strAll;
    }
  };

  const coinValue = (value: string, canSwap: Boolean) => {
    inputCoinValue.coinInput[index].coinInput = value;
    inputCoinValue.coinInput[index].canSwap = canSwap;
    inputCoinValue.setCoinInput([...inputCoinValue.coinInput]);
  };

  const inputMax = () => {
    setInPrice(currencyBalence);
    setNumber(number + 1);
  };
  return (
    <Item>
      <div className="title-info">
        <span>{currencyTitle}</span>
        <span>Balance:{currencyBalence}</span>
      </div>
      <div className="selectBtn">
        <div
          className="divBtn "
          onClick={() => {
            setisOpenDialog(!isOpenDialog);
          }}
          id={id}
        >
          <div className="divBtnIcon">
            <div className="icon">{children}</div>
          </div>

          <span>{currencyName}</span>
          <div className="divBtnIcon">
            <ArrowIcon />
          </div>
        </div>
        <div className="input-div">
          {currencyTitle === "From" ? (
            <div>
              <Input
                placeholder="0.0"
                onChange={(e) => {
                  e.target.value = inputNumberOnly(e.target.value);
                  setInPrice(e.target.value);
                  setNumber(number + 1);
                }}
                value={inPrice}
              ></Input>
              <div className="max-button" onClick={inputMax}>
                MAX
              </div>
            </div>
          ) : (
            <Input
              suffix=""
              placeholder="0.0"
              onChange={(e) => {
                e.target.value = inputNumberOnly(e.target.value);
                setOutPrice(e.target.value);
                setNumber2(number2 + 1);
              }}
              value={outPrice}
            />
          )}
        </div>

        {isOpenDialog && (
          <div>
            <DialogCard
              onCancel={setisOpenDialog}
              index={index}
              addCoinItem={addCoin}
            />
          </div>
        )}
      </div>
    </Item>
  );
}

export default CurrencyItem;

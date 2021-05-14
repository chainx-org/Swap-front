import React, { useState } from "react";
import DialogCard from "../Dialog/index";
import { Input } from "antd";
import { ReactComponent as ArrowIcon } from "../../../assets/ArrowIcon.svg";
// import { Item, SvgStyle, TitleInfoSecond } from "./style";
import { Tooltip, Card } from "antd";
import styled from "styled-components";
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
          // border: 1px solid black;
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
        height: 100%;
        background: #f7f8fa;
        position: static;
        // border: 1px solid #d9d9d9;
        border-radius: 12px;
      }
    }
    .input-div {
      height: 40px;
      width: 256px;
      .ant-input-affix-wrapper {
        height: 100%;
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
    left: 540px;
    top: 88px;
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
  addCoin?: any;
  showSwapInfo?: any;
  inputCoinValue: {
    coinInput: any;
    setCoinInput: any;
  };
}
function CurrencyItem({
  index,
  children,
  className = "",
  currencyName,
  currencyTitle,
  addCoin,
  showSwapInfo,
  inputCoinValue,
}: currencyItemProps): React.ReactElement<currencyItemProps> {
  const [isOpenDialog, setisOpenDialog] = useState(false);
  const inputNumberOnly = (item: string) => {
    item = item.replace(/[^\d.]/g, "");
    const index = item.indexOf(".");
    const str1 = item.slice(0, index + 1);
    let str2 = item.slice(index + 1);
    str2 = str2.replace(/[^\d]/g, "");
    const strAll = str1 + str2;
    strAll != "" ? showSwapInfo(true) : showSwapInfo(false);
    coinValue(strAll);
    return strAll;
  };

  const coinValue = (value: string) => {
    inputCoinValue.coinInput[index].coinInput = value;
    inputCoinValue.setCoinInput([...inputCoinValue.coinInput]);
  };
  return (
    <Item>
      <div className="title-info">
        <span>{currencyTitle}</span>
        <span>Balance:999.0067</span>
      </div>
      <div className="selectBtn">
        <div
          className="divBtn"
          onClick={() => {
            setisOpenDialog(!isOpenDialog);
          }}
        >
          <div className="divBtnIcon">
            <div className="icon">
              <span>{children}</span>
            </div>
          </div>

          <span>{currencyName}</span>
          <div className="divBtnIcon">
            <ArrowIcon />
          </div>
        </div>
        <div className="input-div">
          {currencyTitle === "From" ? (
            <Input
              suffix="MAX"
              placeholder="0.0"
              onChange={(e) => {
                e.target.value = inputNumberOnly(e.target.value);
              }}
              value={inputCoinValue.coinInput[0].coinInput}
            />
          ) : (
            <Input
              suffix=""
              placeholder="0.0"
              onChange={(e) => {
                e.target.value = inputNumberOnly(e.target.value);
              }}
              value={inputCoinValue.coinInput[1].coinInput}
            />
          )}
        </div>
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
    </Item>
  );
}

export default CurrencyItem;

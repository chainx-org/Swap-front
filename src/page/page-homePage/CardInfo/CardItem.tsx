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
    margin: 16px 0px 7px 0px;
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
      .divBtnIcon {
        width: 40px;
        height: 40px;
        & > span:nth-child(1) {
          display: inline-block;
          margin-top: 1px;
          height: 100%;
          width: 100%;
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
`;

const SvgStyle = {
  margin: "15px",
};
const TitleInfoSecond = {
  margin: "0px 0px 0 0px",
};

interface currencyItemProps {
  children?: React.ReactNode;
  className?: string;
  currencyName: string;
  currencyTitle: string;
}
function CurrencyItem({
  children,
  className = "",
  currencyName,
  currencyTitle,
}: currencyItemProps): React.ReactElement<currencyItemProps> {
  const [isOpenDialog, setisOpenDialog] = useState(false);
  console.log("label", currencyName);
  function OpenDialog() {
    setisOpenDialog(true);
  }
  return (
    <Item>
      {currencyTitle === "From" ? (
        <div className="title-info">
          <span>{currencyTitle}</span>
          <span>Balance:999.0067</span>
        </div>
      ) : (
        <div className="title-info" style={TitleInfoSecond}>
          <span>{currencyTitle}</span>
          <span>Balance:999.0067</span>
        </div>
      )}

      <div className="selectBtn">
        <div className="divBtn" onClick={OpenDialog}>
          <div className="divBtnIcon">
            <span>{children}</span>
          </div>

          <span>{currencyName}</span>
          <span>
            <ArrowIcon style={SvgStyle} />
          </span>
        </div>
        <div className="input-div">
          {currencyTitle === "From" ? (
            <Input suffix="MAX" placeholder="0.0" />
          ) : (
            <Input suffix="" placeholder="0.0" />
          )}
        </div>
      </div>
      {isOpenDialog && <DialogCard />}
    </Item>
  );
}

export default CurrencyItem;

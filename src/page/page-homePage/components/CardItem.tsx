import React from "react";
import styled from "styled-components";
import { Input, Button, Tooltip } from "antd";
import { ReactComponent as ArrowIcon } from "../../../assets/ArrowIcon.svg";

const Item = styled(Tooltip)`
  .title-info {
    display: flex;
    justify-content: space-between;
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
    // padding: 0 16px;
    .divBtn {
      width: 120px;
      height: 40px;
      display: flex;
      justify-content: space-between;
      background: rgba(255, 255, 255, 0.9);
      border: 1px solid #efefef;
      box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.07);
      border-radius: 20px;
      & > span:nth-child(1) {
        display: inline-block;
        margin: "auto auto",
        height: 100%;
        width: 100%;
      }
      & > span:nth-child(2) {
        font-size: 14px;
        color: #282828;
        font-weight: 500;
        display: inline-block;
        height: 100%;
        line-height: 40px;
      }
      & > span:nth-child(3) {
        display: inline-block;
        margin: "auto auto",
        height: 100%;
        width: 100%;
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
        .ant-input-suffix{
          color:#E9A840;
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
function currencyItem({
  children,
  className = "",
  currencyName,
  currencyTitle,
}: currencyItemProps): React.ReactElement<currencyItemProps> {
  console.log("label", currencyName);
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
        <div className="divBtn">
          <span>{children}</span>
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
    </Item>
  );
}

export default currencyItem;

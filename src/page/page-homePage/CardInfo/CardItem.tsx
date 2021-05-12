import React from "react";
import { Input } from "antd";
import { ReactComponent as ArrowIcon } from "../../../assets/ArrowIcon.svg";
import { Item, SvgStyle, TitleInfoSecond } from "./style";

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
    </Item>
  );
}

export default currencyItem;

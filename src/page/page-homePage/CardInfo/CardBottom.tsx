import React from "react";
import styled from "styled-components";
import { Input, Button, Tooltip } from "antd";
const Item = styled(Tooltip)`
  .title-info {
    display: flex;
    justify-content: space-between;
    padding-left: 16px;
    padding-right: 16px;
    margin: 32px 0px 0 0px;
    & > span {
      display: inline-block;
      //   height: 17px;
      text-align: right;
      letter-spacing: 0.1px;
      font-size: 12px;
      color: #3f3f3f;
      font-weight: 500;
      line-height: 17px;
    }
  }
  .buttonDiv {
    width: 392px;
    height: 44px;
    padding-left: 16px;
    padding-right: 16px;
    margin: 8px 0px 15px 16px;
  }
`;

interface BottomItemProps {
  children?: React.ReactNode;
  className?: string;
  name?: string;
  label?: string;
  value?: string;
}
function BottomItem({
  children,
  className = "",
  name,
  label,
  value,
}: BottomItemProps): React.ReactElement<BottomItemProps> {
  function openDialog() {
    debugger;
  }
  return (
    <Item>
      <div></div>
      <div className="title-info">
        <span>{name}</span>
        <span>{value}</span>
      </div>
      <Button type="primary" className="buttonDiv" onClick={openDialog}>
        {label}
      </Button>
    </Item>
  );
}

export default BottomItem;

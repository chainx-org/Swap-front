import React from "react";
import styled from "styled-components";
import { Input, Button, Tooltip } from "antd";
const Item = styled(Tooltip)`
  .title-info {
    display: flex;
    justify-content: space-between;
    margin: 16px 16px 0 16px;
    & > span {
      display: inline-block;
      height: 20px;
      text-align: right;
      letter-spacing: 0.1px;
      font-size: 12px;
      color: #3f3f3f;
      font-weight: 500;
      line-height: 20px;
    }
  }
  .buttonDiv {
    width: 392px;
    margin: 16px 0px 0 16px;
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
  return (
    <Item>
      <div></div>
      <div className="title-info">
        <span>{name}</span>
        <span>{value}</span>
      </div>
      <Button type="primary" className="buttonDiv">
        {label}
      </Button>
    </Item>
  );
}

export default BottomItem;

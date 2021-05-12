import React from "react";
import styled from "styled-components";
import { Button, Tooltip } from "antd";

const Item = styled(Tooltip)`
  .title-info {
    display: flex;
    justify-content: space-between;
    margin: 32px 0 0 0;
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
    margin: 16px 0 0 0;
  }
`;
interface BottomItemProps {
  children?: React.ReactNode;
  className?: string;
  name?: string;
  label?: string;
  value?: string;
}
function BottomItem({name, label, value}: BottomItemProps): React.ReactElement<BottomItemProps> {
  return (
    <Item>
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

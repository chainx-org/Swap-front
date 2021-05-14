import React, { useState } from "react";
import styled from "styled-components";
import { Button, Tooltip } from "antd";
import NormalButton from "../../../components/Button/index";
import ConfirmModal from "../../../components/Modal/ConfirmModal/ConfirmModal";

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
    position: static;
    .ant-btn {
    }
  }
`;

interface BottomItemProps {
  children?: React.ReactNode;
  className?: string;
  name: string;
  btnLabel: string;
  value: string;
}
function BottomItem({
  name,
  btnLabel,
  value,
}: BottomItemProps): React.ReactElement<BottomItemProps> {
  const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false);
  return (
    <Item>
      <div className="title-info">
        <span>{name}</span>
        <span>{value}</span>
      </div>
      <NormalButton
        label={btnLabel}
        className="buttonDiv"
        onClick={() => setIsConfirmOpen(true)}
      />
      {isConfirmOpen && (
        <ConfirmModal
          onCancel={setIsConfirmOpen}
          confirmType={"transactionStatus"}
        />
      )}
    </Item>
  );
}

export default BottomItem;

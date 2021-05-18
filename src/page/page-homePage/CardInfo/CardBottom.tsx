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
  .cannot-swap {
    width: 392px;
    height: 44px;
    padding-left: 16px;
    padding-right: 16px;
    margin: 8px 0px 15px 16px;
    position: static;
    background: #b8b8b9;
    border-radius: 12px;
  }
`;

interface BottomItemProps {
  children?: React.ReactNode;
  className?: string;
  name: string;
  btnLabel: string;
  value: string;
  swapCoinInfo?: any;
  setIsShowSwapInfo?: any;
}
function BottomItem({
  name,
  btnLabel,
  value,
  className,
  swapCoinInfo,
  setIsShowSwapInfo
}: BottomItemProps): React.ReactElement<BottomItemProps> {
  const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false);
  const [transferStatus, setTransferStatus] =
    useState<"priceInfo" | "waiting" | "transactionStatus">("priceInfo");
  const [statusValue, setStatusValue] = useState<"success" | "fail">("success");
  console.log('isConfirmOpen',isConfirmOpen)
  return (
    <Item>
      <div className="title-info">
        <span>{name}</span>
        <span>{value}</span>
      </div>
      {className === "buttonDiv" && (
        <NormalButton
          label={btnLabel}
          className={className}
          onClick={() => {
            setIsConfirmOpen(true);
            setTransferStatus("priceInfo");
          }}
        />
      )}
      {className === "cannot-swap" && (
        <NormalButton label={btnLabel} className={className} />
      )}

      {isConfirmOpen && (
        <>
        <ConfirmModal
          onCancel={setIsConfirmOpen}
          // "priceInfo" | "waiting" | "transactionStatus"
          statusValue={statusValue}
          setStatusValue={setStatusValue}
          transferStatus={transferStatus}
          setTransferStatus={setTransferStatus}
          confirmType={transferStatus}
          swapCoinInfo={swapCoinInfo}
          setIsShowSwapInfo={setIsShowSwapInfo}
        />
        </>
      )}
    </Item>
  );
}

export default BottomItem;

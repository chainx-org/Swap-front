import React, { useState } from "react";
import NormalButton from "../../../components/Button/index";
import ConfirmModal from "../../../components/Modal/ConfirmModal/ConfirmModal";
import Item from "./styles/Item";

interface BottomItemProps {
  children?: React.ReactNode;
  className?: string;
  name: string;
  btnLabel: string;
  value: string;
  swapCoinInfo?: () => void;
  setIsShowSwapInfo?: React.Dispatch<boolean>;
  onClick?: () => void;
  isConfirmOpen?: boolean;
  setIsConfirmOpen?: React.Dispatch<boolean>;
  transferStatus?: "priceInfo" | "waiting" | "transactionStatus";
  setTransferStatus?: React.Dispatch<
    "priceInfo" | "waiting" | "transactionStatus"
  >;
}
function BottomItem({
  name,
  btnLabel,
  value,
  className,
  swapCoinInfo,
  setIsShowSwapInfo,
  onClick,
  isConfirmOpen,
  setIsConfirmOpen,
  transferStatus,
  setTransferStatus,
}: BottomItemProps): React.ReactElement<BottomItemProps> {
  const [statusValue, setStatusValue] = useState<"success" | "fail">("success");
  return (
    <Item>
      <div className="title-info">
        <span>{name}</span>
        <span>{value}</span>
      </div>

      <NormalButton label={btnLabel} className={className} onClick={onClick} />
      {isConfirmOpen && (
        <ConfirmModal
          onCancel={setIsConfirmOpen}
          statusValue={statusValue}
          setStatusValue={setStatusValue}
          transferStatus={transferStatus}
          setTransferStatus={setTransferStatus}
          confirmType={transferStatus}
          swapCoinInfo={swapCoinInfo}
          setIsShowSwapInfo={setIsShowSwapInfo}
        />
      )}
    </Item>
  );
}

export default BottomItem;

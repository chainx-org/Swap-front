import React from "react";
import NormalButton from "../../Button";
import PriceField from "./PriceField";
import { PriceWrapper } from "./style";
interface Props {
    confirmSwap:()=>void
}
interface PriceFieldItem {
    fieldName: string;
    fieldContent: string;
  }
  
const BackPriceContent = ({confirmSwap}: Props): React.ReactElement<Props> => {
  const PriceFieldList: PriceFieldItem[] = [
    {
      fieldName: "Price",
      fieldContent: "15.83 XDOGE/XETH",
    },
    {
      fieldName: "Minimum Received",
      fieldContent: "15.83 XDOGE",
    },
    {
      fieldName: "Price Impact",
      fieldContent: "< 0.01%",
    },
    {
      fieldName: "Liquidity Provider Fee",
      fieldContent: "0.03926 XETH",
    },
  ];
  return (
    <PriceWrapper>
      {PriceFieldList.map((item, index) => (
        <PriceField
          key={index}
          name={item.fieldName}
          content={item.fieldContent}
        />
      ))}
      <NormalButton
        className="confirmButton"
        label="Confirm Swap"
        onClick={() => confirmSwap()}
      />
    </PriceWrapper>
  );
};

export default BackPriceContent;

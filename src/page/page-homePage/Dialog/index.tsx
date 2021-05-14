import React from "react";
import { DialogItem, DivDialog } from "./style";
import ContainerCard from "../../../components/Card/ContainerCard";
import { ReactComponent as DogIcon } from "../../../assets/symbols_DOGE.svg";
import Mask from "../../../components/Mask";
import { AnyAaaaRecord } from "node:dns";

interface DialogCardProps {
  index?: Number;
  onCancel: React.Dispatch<boolean>;
  addCoinItem: any;
}
// const DialogCard = ({OpenDialog }) => {
function DialogCard({
  index,
  onCancel,
  addCoinItem,
}: DialogCardProps): React.ReactElement<DialogCardProps> {
  const accounts = [
    {
      coinName: "XBTC",
      type: "Bitcoin",
      coinIcon: <DogIcon />,
      value: "234.0024",
    },
    {
      coinName: "XBCH",
      type: "Bitcoin Cash",
      coinIcon: <DogIcon />,
      value: "12.0024",
    },
    {
      coinName: "XDOGE",
      type: "Dogecoin",
      coinIcon: <DogIcon />,
      value: "12.0024",
    },
    {
      coinName: "XBTC",
      type: "Bitcoin",
      coinIcon: <DogIcon />,
      value: "234.0024",
    },
    {
      coinName: "XETH",
      type: "Ether",
      coinIcon: <DogIcon />,
      value: "0.0",
    },
    {
      coinName: "XDOT",
      type: "Polkadot",
      coinIcon: <DogIcon />,
      value: "12.0024",
    },
  ];
  const clickItem = (item: any, index: any) => {
    addCoinItem(item, index);
    onCancel(false);
    // () => addCoinItem(item);
  };
  return (
    <div>
      <DivDialog>
        <Mask />
        <div className="content">
          <ContainerCard
            onCancel={onCancel}
            title="Select a token"
            className={"card-list-content"}
          >
            {accounts.map((item, i) => {
              return (
                <DialogItem>
                  <div
                    className="item"
                    key={i}
                    onClick={() => clickItem(item, { index })}
                  >
                    <div className="left-item">
                      <div className="left-coinIcon">{item.coinIcon}</div>
                      <div className="right-info">
                        <span>{item.coinName}</span>
                        <span>{item.type}</span>
                      </div>
                    </div>
                    <div className="right-item">{item.value}</div>
                  </div>
                </DialogItem>
              );
            })}
          </ContainerCard>
        </div>
      </DivDialog>
    </div>
  );
}

export default DialogCard;

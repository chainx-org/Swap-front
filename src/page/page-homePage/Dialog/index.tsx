import React from "react";
import { DialogItem, DivDialog } from "./style";
import ContainerCard from "../../../components/Card/ContainerCard";
import { ReactComponent as DogIcon } from "../../../assets/symbols_DOGE.svg";
import Mask from "../../../components/Mask";

interface DialogCardProps {
  isOpen?: Boolean;
  onCancel: React.Dispatch<boolean>;
}
// const DialogCard = ({OpenDialog }) => {
function DialogCard({
  isOpen,
  onCancel,
}: DialogCardProps): React.ReactElement<DialogCardProps> {
  const accounts = [
    {
      name: "XBTC",
      type: "Bitcoin",
      icon: <DogIcon />,
      value: "234.0024",
    },
    {
      name: "XBCH",
      type: "Bitcoin Cash",
      icon: <DogIcon />,
      value: "12.0024",
    },
    {
      name: "XDOGE",
      type: "Dogecoin",
      icon: <DogIcon />,
      value: "12.0024",
    },
    {
      name: "XBTC",
      type: "Bitcoin",
      icon: <DogIcon />,
      value: "234.0024",
    },
    {
      name: "XETH",
      type: "Ether",
      icon: <DogIcon />,
      value: "0.0",
    },
    {
      name: "XDOT",
      type: "Polkadot",
      icon: <DogIcon />,
      value: "12.0024",
    },
  ];
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
            {accounts.map((item, index) => {
              return (
                <DialogItem>
                  <div className="item" key={index}>
                    <div className="left-item">
                      <div className="left-icon">{item.icon}</div>
                      <div className="right-info">
                        <span>{item.name}</span>
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

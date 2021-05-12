import React, { Component } from "react";
import { DivDialog } from "./style";
import ContainerCard from "../../../components/Card/ContainerCard";
import DialogItem from "./DialogItem";
function DialogCard() {
  return (
    <DivDialog>
      <div className="mask"></div>
      <div className="content">
        <ContainerCard exitOption={true} title="Select a token">
          <DialogItem />
        </ContainerCard>
      </div>
    </DivDialog>
  );
}

export default DialogCard;

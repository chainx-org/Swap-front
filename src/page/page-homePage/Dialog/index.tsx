import React, { Component } from "react";
import { DivDialog } from "./style";
function Dialog() {
  return (
    <DivDialog>
      <div className="mask">
        <div className="content">123</div>
      </div>
    </DivDialog>
  );
}

export default Dialog;

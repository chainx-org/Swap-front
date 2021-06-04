import React, { useState, createContext, FC } from "react";
interface DialogData {
  isMaskShow?: any;
  setIsMaskShow?: any;
}

export const DialogContext = createContext<DialogData>({} as DialogData);
export const DialogProvider: FC = ({ children }) => {
  let [isMaskShow, setIsMaskShow] = useState(0);
  //   setIsMaskShow(1);
  //   console.log("ata", isMaskShow);
  return (
    <DialogContext.Provider
      value={{
        isMaskShow,
        setIsMaskShow,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};

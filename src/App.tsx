import React from "react";
import "./App.css";
import styled from "styled-components";
import ApiProvider from "./hooks/ApiProvider";
import HomePage from "./page/page-homePage";
import { AccountsProvider } from "./hooks/AccountsProvider";
import { TokenProvider } from "./hooks/TokenProvider";
import TransferProvider from "./hooks/TransferProvider";
import { PriceProvider } from "./hooks/PriceProvider";
import { DialogProvider } from "./hooks/DialogProvider";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const App: React.FC = () => {
  return (
    <>
      <LayoutWrapper id={"LayoutWrapper"}>
        <ApiProvider url="wss://xbridge.spiderx.pro/ws">
          <AccountsProvider>
            <TokenProvider>
              <TransferProvider>
                <PriceProvider>
                  <DialogProvider>
                    <HomePage />
                  </DialogProvider>
                </PriceProvider>
              </TransferProvider>
            </TokenProvider>
          </AccountsProvider>
        </ApiProvider>
      </LayoutWrapper>
    </>
  );
};
export const bridgeStatusContext = React.createContext("");

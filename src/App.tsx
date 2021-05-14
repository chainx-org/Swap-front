import React  from 'react';
import './App.css';
import styled from 'styled-components';
import ApiProvider from './hooks/ApiProvider';
import HomePage from './page/page-homePage';
import { AccountsProvider } from './hooks/AccountsProvider';
import { TokenProvider } from './hooks/TokenProvider';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const App: React.FC = () => {

  return (
    <>
      <LayoutWrapper id={'LayoutWrapper'}>
        <ApiProvider url='ws://127.0.0.1:9999'>
          <AccountsProvider>
            <TokenProvider>
              <HomePage/>
            </TokenProvider>
          </AccountsProvider>
        </ApiProvider>
      </LayoutWrapper>
    </>
  );
};
export const bridgeStatusContext = React.createContext('');

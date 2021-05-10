import React  from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import styled from 'styled-components';
import ApiProvider from './hooks/ApiProvider';
import HomePage from './page/page-homePage';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const App: React.FC = () => {
  const {t} = useTranslation();

  return (
    <>
      <LayoutWrapper id={'LayoutWrapper'}>
        <ApiProvider url='wss://chainx.supercube.pro/ws'>
          <HomePage/>
        </ApiProvider>
      </LayoutWrapper>
    </>
  );
};
export const bridgeStatusContext = React.createContext('');

import React, { lazy, Suspense } from 'react';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import Loading from '../../components/Loading';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

const Content = styled.main`
  display: flex;
  padding: 30px 40px;
`;

// const homePage = lazy(() => import('../page-homePage'));

const HomePage = (): React.ReactElement => {
  return (
    <>
      <Header/>
      <Content>
        <SideBar/>
        {/*<Suspense fallback={<Loading/>}>*/}
        {/*  <Switch>*/}
        {/*    <Route path="/" exact component={homePage}/>*/}
        {/*  </Switch>*/}
        {/*</Suspense>*/}
      </Content>
    </>
  );
};

export default HomePage;

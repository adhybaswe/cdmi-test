/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  background-color:#f3f3f3;
  width:100%;
  display:inline-block;
  padding-top:66px;
  padding-left:250px;
  min-height:100vh;
`;

const ContentWrapper = styled.div`
	padding: 16px 40px;
`;

export default function App() {
  return (
    <AppWrapper>
    	<Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="Codemi Test"
      >
      </Helmet>
		<Header />
		<Sidebar />
		<ContentWrapper>
			<Switch>
		        <Route exact path="/" component={HomePage} />
		        <Route component={NotFoundPage} />
	      	</Switch>
      	</ContentWrapper>
      	<GlobalStyle />
    </AppWrapper>
  );
}

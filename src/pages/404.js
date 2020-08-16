import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato');

  body {
    padding: 0;
    margin: 0;
    font-family: 'Lato';
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`

const NotFoundPageWrapper = styled.div`
	text-align: center;
	color: #fff;
	position: relative;
	background: inherit;
	padding: 10vh 0 0 0;
  text-shadow: 0 0 3px black;
`;



const NotFoundPage = () => (
  <>
    <GlobalStyle />
    <Layout>
      <SEO title="404: Not found" />
      <NotFoundPageWrapper>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </NotFoundPageWrapper>
    </Layout>
  </>
);

export default NotFoundPage;

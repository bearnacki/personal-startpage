import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/seo';

const NotFoundPageWrapper = styled.div`
  margin: 80px 5px 0 5px;
	text-align: center;
	color: #fff;
	position: relative;
	background: inherit;
	padding: 10vh 0 0 0;
  text-shadow: 0 0 3px black;
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <NotFoundPageWrapper>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </NotFoundPageWrapper>
  </Layout>
);

export default NotFoundPage;

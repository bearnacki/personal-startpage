import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Navigation from './MenuFeatures/Navigation';
import backgroundImage from '../images/wallhaven-59564.jpg';

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


const StyledWrapper = styled.div`
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	background-image: url(${backgroundImage});
	background-size: cover;
	background-attachment: fixed;
`;

const Layout = ({ children }) => {
	return (
		<>
			<GlobalStyle />
			<StyledWrapper>
				<Navigation />
				<>
					{children}
				</>
			</StyledWrapper>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;

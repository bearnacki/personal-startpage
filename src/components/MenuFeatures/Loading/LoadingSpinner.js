import React from 'react';
import styled from 'styled-components';

const Spinner = styled.div`
	width: 50px;
	height: 50px;
	margin: 0 auto;
	border-radius: 50%;
	border: 3px solid #fff;
	border-top-color: #40addb;
	animation: spinner 0.7s linear infinite;

	@keyframes spinner {
		to {
			transform: rotate(360deg);
		}
	}
`;

const LoadingSpinner = () => <Spinner />;

export default LoadingSpinner;

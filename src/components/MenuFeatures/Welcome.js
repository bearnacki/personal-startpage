import React from 'react';
import styled from 'styled-components';
import Clock from './Clock';
import Weather from './Weather';
import Bookmarks from './Bookmarks/Bookmarks';

const WelcomeWrapper = styled.div`
	flex-basis: 100%;
	text-align: center;
	color: #fff;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	position: relative;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
	background: inherit;
	padding: 30px 0;

	&::before {
		content: "";
		background: inherit;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.1);
		filter: blur(5px);
	}
`;
const InitialWelcome = styled.p`
	font-size: 3em;
	display: block;
	text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
	margin: 0;
	padding: 10px 0;
	width: 100%;
	font-weight: bold;
	z-index: 2;
`;

const CheeringWelcome = styled.p`
	font-size: 1.5em;
	font-weight: bold;
	display: block;
	margin: 0;
	padding: 10px 0;
	text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
	width: 100%;
	z-index: 2;

	&::after {
		position: relative;
		content: "";
		width: 50%;
		left: 25%;
		display: block;
		margin-bottom: 10px;
		margin-top: 40px;
		border-bottom: 2px solid #fff;
		animation: lineMove 3s ease-in-out infinite;
	}

	@keyframes lineMove {
		0% {
			width: 50%;
			left: 25%;
		}
		25% {
			width: 60%;
			left: 20%;
		}
		50% {
			width: 70%;
			left: 15%;
		}
		75% {
			width: 60%;
			left: 20%;
		}
		100% {
			width: 50%;
			left: 25%;
		}
	}
`;

const Welcome = () => {
	return (
		<WelcomeWrapper>
			<InitialWelcome>Hello Patryk</InitialWelcome>
			<CheeringWelcome>Hope you have a great day</CheeringWelcome>
			<Clock />
			<Weather />
			<Bookmarks />
		</WelcomeWrapper>
	);
};

export default Welcome;

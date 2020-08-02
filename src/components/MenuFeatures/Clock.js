import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TimeWrapper = styled.div`
	flex: 0 0 50%;
	text-align: center;
	color: #fff;
	font-weight: bold;
	padding: 0 10px;
	margin: auto 0;
	z-index: 2;
`;

const TimeParagraph = styled.p`
	font-size: 3em;
	display: block;
	text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
	margin: 0;
	padding: 10px 0;
`;

const DateParagraph = styled.p`
	font-size: 1.5em;
	display: block;
	height: 30px;
	text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
	margin: 0;
	padding: 0;
`;

const Clock = () => {
	const [ time, setTime ] = useState(new Date());

	function tick() {
		setTime(new Date());
	}

	useEffect(() => {
		let interval = setInterval(() => tick(), 1000);

		return function cleanup() {
			clearInterval(interval);
		};
	});

	return (
		<TimeWrapper>
			<TimeParagraph>{time.toLocaleTimeString()}</TimeParagraph>
			<DateParagraph>{time.toLocaleDateString()}</DateParagraph>
		</TimeWrapper>
	);
};

export default Clock;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const WeatherWrapper = styled.div`
	flex: 1 0 200px;
	text-align: center;
  display: flex;
  justify-content: center;
	color: #fff;
	font-weight: bold;
`;

const WeatherIcon = styled.img`
  display: inline-block;
  width: 50%;
  margin: 0;
  padding: 0;
`

const WeatherParagraph = styled.p`
	font-size: 1em;
	display: inline-block;
	text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
	margin: 0;
	padding: 10px 0;
`;

const Weather = () => {
	const [ weatherData, setWeatherData ] = useState({});

	useEffect(() => {
		fetch(`https://api.openweathermap.org/data/2.5/weather?id=${process.env.GATSBY_OPENWEATHER_API_CITYID}&APPID=${process.env.GATSBY_OPENWEATHER_API_KEY}`)
			.then((response) => response.json())
			.then((resultData) => {
				setWeatherData(resultData);
      })
      .catch((err) => { console.log(err)});
	}, []);

	return (
		<WeatherWrapper>
			{weatherData.weather ? (
        <>
				<WeatherIcon src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="weather-icon" />
        <WeatherParagraph>MAX: {weatherData.main.temp_max}</WeatherParagraph>
        <WeatherParagraph>MIN: {weatherData.main.temp_min}</WeatherParagraph>
        </>
      ) : (
				<p>Loading</p>
			)}
		</WeatherWrapper>
	);
};

export default Weather;

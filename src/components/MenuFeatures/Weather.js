import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const WeatherWrapper = styled.div`
	flex: 0 0 45%;
	text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
	color: #fff;
	font-weight: bold;
  padding: 0 10px;
`;

const WeatherIcon = styled.img`
  display: block;
  max-width: 50%;
  max-height: 50%;
  margin: 0 30%;
`

const WeatherParagraph = styled.p`
	font-size: 1em;
  flex-basis: 20%;
	display: inline-block;
	text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
	padding: 0 10px;
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
        <WeatherParagraph>FEEL: {weatherData.main.feels_like}</WeatherParagraph>
        <WeatherParagraph>HUM: {weatherData.main.humidity}%</WeatherParagraph>
        </>
      ) : (
				<p>Loading</p>
			)}
		</WeatherWrapper>
	);
};

export default Weather;

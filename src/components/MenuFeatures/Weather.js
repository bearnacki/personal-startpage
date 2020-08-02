import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const WeatherWrapper = styled.div`
	flex: 0 0 50%;
	text-align: center;
  display: flex;
	flex-direction: column;
  justify-content: center;
	color: #fff;
	font-weight: bold;
  padding: 0 10px;
	z-index: 2;
`;

const WeatherIcon = styled.img`
	flex-basis: 100%;
	padding: 0 35%;
`
const WeatherInfo = styled.div`
	flex-basis: 100%;
`

const WeatherInfoParagraph = styled.p`
	font-size: 1em;
  width: 20%;
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

	const setCelsiusDegree = (calvinTemp) => (
		Math.round((calvinTemp - 273.15) * 10) / 10
	)

	return (
		<WeatherWrapper>
			{weatherData.weather ? (
        <>
					<WeatherIcon src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="weather-icon" />
					<WeatherInfo>
						<WeatherInfoParagraph>MAX: {setCelsiusDegree(weatherData.main.temp_max)} &deg;C</WeatherInfoParagraph>
						<WeatherInfoParagraph>MIN: {setCelsiusDegree(weatherData.main.temp_min)} &deg;C</WeatherInfoParagraph>
						<WeatherInfoParagraph>FEEL: {setCelsiusDegree(weatherData.main.feels_like)} &deg;C</WeatherInfoParagraph>
						<WeatherInfoParagraph>HUM: {weatherData.main.humidity}%</WeatherInfoParagraph>
					</WeatherInfo>
        </>
      ) : (
				<p>Loading</p>
			)}
		</WeatherWrapper>
	);
};

export default Weather;

import React from 'react';

function Weather(props) {
	return (
		<div>
			<h1
				className={'hotOrNot'}
				style={{
					animationName: `${props.hotOrNot === 'HOT' ? 'hot' : 'not'}`,
				}}>
				{props.hotOrNot}
			</h1>
			<h3>It's {props.hotOrNot}.</h3>
			<h2>
				It feels like {props.weather.feels_like} degrees in {props.weather.name}
			</h2>
			<h3>Is it wet?</h3>
			<h4>Sky Status: {props.weather.skies}</h4>
			<h5>source: openweathermap.org/api</h5>
		</div>
	);
}

export default Weather;
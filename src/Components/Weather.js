import React from 'react';

// Hou comment: if you wanted to, you could destructure your arguments
// function Weather({hotOrNot, weather}) {}
// Then you can just use `hotOrNot` and `weather` without having to access them on props
// As a follow-up challenge, you could try to refactor your other functional components 
// as well to use destructured arguments
function Weather(props) {
	return (
		// Hou comment: you can use a React fragment <></> here instead of creating an unnecessary div tag: https://reactjs.org/docs/fragments.html
		<>
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
		</>
	);
}

export default Weather;
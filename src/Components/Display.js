import React, { useState, useEffect } from 'react';

function Display(props) {
	const weatherKey = process.env.REACT_APP_WEATHER_KEY;

	let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${props.zip}&units=imperial&appid=${weatherKey}`;

	let date = new Date();
	date.toUTCString();

	let [weather, setWeather] = useState({
		name: '',
		feels_like: '',
		skies: '',
	});
	let [hotOrNot, setHotOrNot] = useState('');
	let [advice, setAdvice] = useState('');
	let [retro, setRetro] = useState('');
	let [dog, setDog] = useState('');

	useEffect(() => {
		fetch(weatherUrl)
			.then((res) => res.json())
			.then((json) => {
				setWeather({
					name: json.name,
					feels_like: json.main.feels_like,
					skies: json.weather[0].main,
				});
				setHotOrNot(json.main.feels_like < 65 ? 'NOT' : 'HOT');
			})
			.catch(() => props.showError());
		fetch('https://api.adviceslip.com/advice')
			.then((res) => res.json())
			.then((json) => setAdvice(json.slip.advice));
		fetch(`https://mercuryretrogradeapi.com?date=${date}`)
			.then((res) => res.json())
			.then((json) => {
				if (json.is_retrograde) {
					setRetro('Good news! Mercury is in retrograde! You can stay home.');
				}
				setRetro(
					'Unfortunately, Mercury is not in retrograde...looks like you have to go outside.'
				);
			});
		fetch('https://dog.ceo/api/breeds/image/random')
			.then((res) => res.json())
			.then((json) => {
				setDog(json.message);
			});
	}, []);

	return (
		<div>
			<main>
				<div className='weather'>
					<h1>{hotOrNot}</h1>
					<h2>
						Feels exactly like {weather.feels_like} degrees in good ol'
						{weather.name}
					</h2>
					<h3>Is it wet?</h3>
					<h2>WHO CARES?</h2>
					<h4>jk - skies: {weather.skies}</h4>
				</div>
				<div className='advice'>
					<h2>You know what they say...</h2>
					<h3>"{advice}"</h3>
				</div>
				<div className='retro'>
					<h2>Need an excuse?</h2>
					<h3>{retro}</h3>
				</div>
				<div className='animals'>
					<h2>Here is a dog:</h2>
					<img className='dog' src={dog} />
				</div>
			</main>
		</div>
	);
}

export default Display;

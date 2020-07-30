import React, { useState, useEffect } from 'react';
import LyricForm from './LyricForm';
import ReactPlayer from 'react-player';

function Display(props) {
	const weatherKey = process.env.REACT_APP_WEATHER_KEY;

	let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${props.zip}&units=imperial&appid=${weatherKey}`;

		let date = new Date();
		date.toUTCString();
		const pokeNum = Math.floor(Math.random() * 807) + 1;

	let [weather, setWeather] = useState({
		name: '',
		feels_like: '',
		skies: '',
	});
	let [hotOrNot, setHotOrNot] = useState('');
	let [advice, setAdvice] = useState('');
	let [retro, setRetro] = useState('');
	let [dog, setDog] = useState('');
	let [poke, setPoke] = useState({
		name: '',
		pic: '',
	});

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
		fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`)
			.then((res) => res.json())
			.then((json) =>
				setPoke({ name: json.species.name, pic: json.sprites.front_default })
			);
	}, []);

	return (
		<div>
			<main>
				<div className='weather'>
					<h1>{hotOrNot}</h1>
					<h2>
						Feels exactly like {weather.feels_like} degrees in good ol'{' '}
						{weather.name}
					</h2>
					<h3>Is it wet?</h3>
					<h2>WHO CARES?</h2>
					<h4>jk - Skies: {weather.skies}</h4>
				</div>
				<div className='advice'>
					<h2>Not feeling it? You know what they say...</h2>
					<h3>"{advice}"</h3>
				</div>
				<div className='retro'>
					<h2>Need an excuse?</h2>
					<h3>{retro}</h3>
				</div>
				<div className='animals'>
					<h2>Let this dog motivate you:</h2>
					<img className='dog' src={dog} />
				</div>
				<div>
					<h2>...how about a pokemon?</h2>
					<img src={poke.pic} />
					<h3>{poke.name.toUpperCase()} #{pokeNum}</h3>
				</div>
				<div>
					<LyricForm />
				</div>
				<div>
					<h2>
						Sometimes, when I'm feeling low, I'll watch the music video for She
						Wolf by Shakira. Please enjoy.
					</h2>
					<ReactPlayer url='https://www.youtube.com/watch?v=booKP974B0k' />
				</div>
			</main>
		</div>
	);
}

export default Display;

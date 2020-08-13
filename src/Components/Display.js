import React, { useState, useEffect } from 'react';
import Weather from './Weather';
import Color from './Color';
import Advice from './Advice';
import Retrograde from './Retrograde';
import Dog from './Dog';
import Kitty from './Kitty';
import Pokemon from './Pokemon';
import LyricForm from './LyricForm';
import SheWolf from './SheWolf';

// Hou comment: great job learning about and applying hooks in your project!
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
	let [color, setColor] = useState('white');
	let [hotOrNot, setHotOrNot] = useState('');
	let [advice, setAdvice] = useState('');
	let [retro, setRetro] = useState('');
	let [dog, setDog] = useState('');
	let [poke, setPoke] = useState({
		name: '',
		pic: '',
	});

	useEffect(() => {
		// Hou comment: You could potentially refactor your multiple fetch calls and make them more succinct by using the Promise.all() method: https://gomakethings.com/waiting-for-multiple-all-api-responses-to-complete-with-the-vanilla-js-promise.all-method/

		// Hou comment: as a follow up challenge, read about the async/await pattern and try to refactor
		// your fetch call to use that pattern: https://dev.to/shoupn/javascript-fetch-api-and-using-asyncawait-47mp
		fetch(weatherUrl)
			.then((res) => res.json())
			.then((json) => {
				setWeather({
					name: json.name,
					feels_like: json.main.feels_like,
					skies: json.weather[0].main,
				});
				setHotOrNot(json.main.feels_like < 60 ? 'NOT' : 'HOT');
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

	// Hou comment: add a comment here to explain the purpose of lines 80-82
	while (!hotOrNot) {
		return <h1></h1>;
	}
	return (
		<main
			// Hou comment: again, favor external stylesheets/styled-components over inline styles
			style={{
				backgroundColor: color,
				backgroundSize: 'cover',
				transition: 'background-color',
				transitionDuration: '1s',
			}}>
			{/* Hou comment: I'd probably just move the container tags (i.e., <section>) into the sub-components themselves (like what you've done with the Dog and Retrogade components), to keep this render function clean*/}
			<section className='weather'>
				<Weather weather={weather} hotOrNot={hotOrNot} />
			</section>
			<section>
				<Color setColor={setColor} />
			</section>
			<section className='advice'>
				<Advice advice={advice} setAdvice={setAdvice} />
			</section>
			<Retrograde retro={retro} />
			<Dog dog={dog} setDog={setDog} />
			<section className='kitty'>
				<Kitty />
			</section>
			<section className='poke'>
				<Pokemon poke={poke} pokeNum={pokeNum} setPoke={setPoke} />
			</section>
			<LyricForm />
			<SheWolf showError={props.showError} item={'shakira'} />
		</main>
	);
}

export default Display;
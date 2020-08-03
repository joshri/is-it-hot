import React, { useState, useEffect } from 'react';
import Weather from './Weather';
import Color from './Color'
import Advice from './Advice';
import Retrograde from './Retrograde';
import Dog from './Dog';
import Kitty from './Kitty';
import Pokemon from './Pokemon';
import LyricForm from './LyricForm';
import SheWolf from './SheWolf';

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
    let [color, setColor] = useState('white')
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

	while (!hotOrNot) {
		return <h1></h1>;
	}
	return (
		<div
			style={{
				backgroundColor: color,
				backgroundSize: 'cover',
				transition: 'background-color',
				transitionDuration: '1s',
			}}>
			<div>
				<div className='weather'>
					<Weather weather={weather} hotOrNot={hotOrNot} />
				</div>
				<div>
					<Color setColor={setColor} />
				</div>
				<div className='advice'>
					<Advice advice={advice} setAdvice={setAdvice} />
				</div>
				<div>
					<Retrograde retro={retro} />
				</div>
				<div>
					<Dog dog={dog} setDog={setDog} />
				</div>
				<div className='kitty'>
					<Kitty />
				</div>
				<div className='poke'>
					<Pokemon
						poke={poke}
						pokeNum={pokeNum}
						setPoke={setPoke}
					/>
				</div>
				<div>
					<LyricForm />
				</div>
				<div>
					<SheWolf showError={props.showError} item={'shakira'} />
				</div>
			</div>
		</div>
	);
}

export default Display;

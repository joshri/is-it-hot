import React from 'react';
import Button from './Button';

function Pokemon(props) {
	const changePoke = () => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokeNum}`)
			.then((res) => res.json())
			.then((json) =>
				props.setPoke({
					name: json.species.name,
					pic: json.sprites.front_default,
				})
			);
	};

	return (
		<div>
			<h2>...how about a pokemon?</h2>
			<img className='pokeImg' src={props.poke.pic} />
			<h3>
				{props.poke.name.toUpperCase()} #{props.pokeNum}
			</h3>
			<h5>source: pokeapi.co</h5>
			<Button onClick={changePoke}>CHANGE IT!</Button>
		</div>
	);
}

export default Pokemon;

import React from 'react';

function Pokemon(props) {
    return (
			<div>
				<h2>...how about a pokemon?</h2>
				<img src={props.poke.pic} />
				<h3>
					{props.poke.name.toUpperCase()} #{props.pokeNum}
				</h3>
			</div>
		);
}

export default Pokemon;
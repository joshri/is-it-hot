import React from 'react';
import ChangeIt from './ChangeIt'

function Pokemon(props) {
    return (
			<div>
				<h2>...how about a pokemon?</h2>
				<img className='pokeImg' src={props.poke.pic} />
				<h3>
					{props.poke.name.toUpperCase()} #{props.pokeNum}
				</h3>
				<h5>source: pokeapi.co</h5>
				<ChangeIt changeIt={props.changeIt} item={props.item} />
			</div>
		);
}

export default Pokemon;
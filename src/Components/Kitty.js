import React, { useState } from 'react';
import Button from './Button';

function Kitty(props) {
	let [random, setRandom] = useState(Math.floor(Math.random() * 220) + 180);

	let url = `https://placekitten.com/${random}/200`;

	return (
		<section className='kitty'>
			<h3 className='dogh2'>or this cat:</h3>
			<img className='kittyImg' src={url} />
			<h5>source: placekitten.com</h5>
			<Button onClick={() => setRandom(Math.floor(Math.random() * 220) + 180)}>
				CHANGE IT!
			</Button>
		</section>
	);
}

export default Kitty;
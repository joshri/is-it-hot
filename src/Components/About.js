import React from 'react';
import Button from './Button';

function About(props) {
	return (
		<div style={{ display: `${props.display}` }} className='modal'>
			<p>This React experiment was created with:</p>
			<ul>
				<li>fonts.google.com</li>
				<li>openweathermap.org/api</li>
				<li>mercuryretrogradeapi.com</li>
				<li>api.adviceslip.com</li>
				<li>dog.ceo/dog-api/</li>
				<li>placekitten.com</li>
				<li>lyricsovh.docs.apiary.io/#reference</li>
				<li>pokeapi.co/</li>
			</ul>
			<p>By Joshua Israel</p>
			<Button onClick={props.showModal}>COOL</Button>
		</div>
	);
}

export default About;

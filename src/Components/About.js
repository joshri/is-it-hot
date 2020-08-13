import React from 'react';
import Button from './Button';

// Hou comment: you can destructure your props like line 5
function About({ display, showModal}) {
	return (
		<div style={{ display: `${display}` }} className='modal'>
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
			<Button onClick={showModal}>COOL</Button>
		</div>
	);
}

export default About;
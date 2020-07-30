import React from 'react';

function About(props) {
	return (
		<div style={{display: `${props.display}`}}className='modal'>
			<p>This app was created in React with:</p>
			<ul>
				<li>fonts.google.com</li>
				<li>framer.com/api/motion/</li>
				<li>openweathermap.org/api</li>
				<li>mercuryretrogradeapi.com</li>
				<li>api.adviceslip.com</li>
				<li>dog.ceo/dog-api/</li>
				<li>lyricsovh.docs.apiary.io/#reference</li>
				<li>pokeapi.co/</li>
			</ul>
			<p>By Joshua Israel</p>
			<button onClick={props.showModal}>COOL</button>
		</div>
    );
    }


export default About;

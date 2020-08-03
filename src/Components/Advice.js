import React from 'react';
import Button from './Button'



function Advice(props) {

const adviceChange = () => {
	fetch('https://api.adviceslip.com/advice')
		.then((res) => res.json())
		.then((json) => props.setAdvice(json.slip.advice));
};

	return (
		<div>
			<h2>Not feeling it? You know what they say...</h2>
			<h3>"{props.advice}"</h3>
			<h5>source: api.adviceslip.com</h5>
			<Button onClick={adviceChange}>CHANGE IT!</Button>
		</div>
	);
}

export default Advice;

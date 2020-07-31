import React from 'react';
import ChangeIt from './ChangeIt'

function Advice(props) {
	return (
		<div>
			<h2>Not feeling it? You know what they say...</h2>
			<h3>"{props.advice}"</h3>
			<h5>source: api.adviceslip.com</h5>
			<ChangeIt changeIt={props.changeIt} item={props.item} />
		</div>
	);
}

export default Advice;

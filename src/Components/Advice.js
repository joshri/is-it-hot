import React from 'react';

function Advice(props) {
	return (
		<div>
			<h2>Not feeling it? You know what they say...</h2>
			<h3>"{props.advice}"</h3>
		</div>
	);
}

export default Advice;

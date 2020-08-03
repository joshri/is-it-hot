import React from 'react';

function Retrograde(props) {
	return (
		<div className='retro' style={{margin: 20}}>
			<h2>Need an excuse?</h2>
			<h3 style={{width: '80vw'}}>{props.retro}</h3>
			<h5>source: mercuryretrogradeapi.com</h5>
		</div>
	);
}

export default Retrograde;

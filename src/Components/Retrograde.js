import React from 'react';

function Retrograde(props) {
	return (
		<section className='retro' style={{ margin: 20 }}>
			<h2>Need an excuse?</h2>
			{/* Hou comment: consider applying styles with a css selector in an external stylesheet rather than inlining the styles */}
			<h3 style={{ width: '80vw' }}>{props.retro}</h3>
			<h5>source: mercuryretrogradeapi.com</h5>
		</section>
	);
}

export default Retrograde;
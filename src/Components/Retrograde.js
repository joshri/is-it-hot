import React from 'react';

function Retrograde(props) {
    return (
			<div className='retro'>
				<h2>Need an excuse?</h2>
				<h3 className='retroResult'>{props.retro}</h3>
			</div>
		);
}

export default Retrograde;
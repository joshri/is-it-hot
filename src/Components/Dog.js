import React from 'react';

function Dog(props) {
    return (
			<div>
				<h2>Let this dog motivate you:</h2>
				<img className='dogImg' src={props.dog} />
			</div>
		);
}

export default Dog;
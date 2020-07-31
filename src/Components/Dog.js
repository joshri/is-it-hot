import React from 'react';
import ChangeIt from './ChangeIt'

function Dog(props) {
    return (
			<div>
				<h2>Let this dog motivate you:</h2>
				<img className='dogImg' src={props.dog} />
				<ChangeIt changeIt={props.changeIt} item={props.item} />
			</div>
		);
}

export default Dog;
import React from 'react';
import ChangeIt from './ChangeIt'

function Dog(props) {
    return (
			<div className='dog'>
				<h2 className='dogh2'>Let this dog motivate you:</h2>
				<img className='dogImg' src={props.dog} />
				<h5>source: dog.ceo/dog-api/</h5>
				<ChangeIt
					className='dogButton'
					changeIt={props.changeIt}
					item={props.item}
				/>
			</div>
		);
}

export default Dog;
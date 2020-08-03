import React from 'react';
import Button from './Button';

function Dog(props) {
	const dogChange = () => {
		fetch('https://dog.ceo/api/breeds/image/random')
			.then((res) => res.json())
			.then((json) => {
				props.setDog(json.message);
			});
	};

	return (
		<div className='dog'>
			<h2 className='dogh2'>Let this dog motivate you:</h2>
			<img className='dogImg' src={props.dog} />
			<h5>source: dog.ceo/dog-api/</h5>
			<Button onClick={dogChange}>CHANGE IT!</Button>
		</div>
	);
}

export default Dog;

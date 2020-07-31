import React, {useState} from 'react';

function Kitty(props) {
    
    let [random, setRandom] = useState(Math.floor(Math.random() * 220) + 180)

	let url = `https://placekitten.com/${random}/200`;

	return (
		<div className='kitty'>
			<h3 className='dogh2'>or this cat:</h3>
			<img className='kittyImg' src={url} />
            <h5>source: placekitten.com</h5>
            <button className='kittyButton' onClick={() => setRandom(Math.floor(Math.random() * 220) + 180)}>
				CHANGE IT!
			</button>
		</div>
	);
}

export default Kitty;

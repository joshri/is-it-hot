import React, {useState} from 'react';
import ChangeIt from './ChangeIt';

function Kitty(props) {
    
    let [random, setRandom] = useState(Math.floor(Math.random() * 220) + 180)

	let url = `https://placekitten.com/${random}/200`;

	return (
		<div>
			<h3>or this cat:</h3>
			<img className='kitty' src={url} />
            <button onClick={() => setRandom(Math.floor(Math.random() * 220) + 180)}>
				CHANGE IT!
			</button>
		</div>
	);
}

export default Kitty;

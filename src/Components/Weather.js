import React, {useState} from 'react';
import { motion } from 'framer-motion';

function Weather(props) {

	// let [color, setColor] = useState('red')
	// if (props.hotOrNot === 'hot') {
	// 	setColor('red');
	// } else {
	// 	setColor('aqua');
	// }

    return (
				<div>
					<h1 className={'hotOrNot'} style={{animationName: `${props.hotOrNot === 'HOT' ? 'hot' : 'not'}`}}>{props.hotOrNot}</h1>
					{/* <motion.h1
						className='hotOrNot'
						animate={{ color: ['black', color], opacity: [0, 1] }}
						transition={{ ease: 'easeIn', duration: 2 }}>
						{props.hotOrNot}
					</motion.h1> */}
					<h3>It's {props.hotOrNot}.</h3>
					<h2>
						It feels like {props.weather.feels_like} degrees in {props.weather.name}
					</h2>
					<h3>Is it wet?</h3>
					<h4>Sky Status: {props.weather.skies}</h4>
				</div>
		);
}

export default Weather;
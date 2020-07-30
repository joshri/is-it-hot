import React from 'react';
import { motion } from 'framer-motion';

function Weather(props) {
    return (
				<div>
					<motion.h1
						className='hotOrNot'
						animate={{ opacity: [0.1, 1] }}
						transition={{ ease: 'easeIn', duration: 2 }}>
						{props.hotOrNot}
					</motion.h1>
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
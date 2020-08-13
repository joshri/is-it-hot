import React from 'react';
import ReactPlayer from 'react-player';
import Button from './Button';

function SheWolf(props) {
	return (
		<div className='sheWolf'>
			<h2>Final Thought:</h2>
			<h2 className='lyricIntro'>
				...sometimes, when I'm feeling low, I'll watch the music video for She
				Wolf by Shakira.<br></br>
				Don't even think about changing it.<br></br>Good Luck out there in the
				world today champ.
			</h2>
			<ReactPlayer
				controls
				className='video'
				// adding the query params below should fix the console error you see in the browser
				url='https://www.youtube.com/watch?v=booKP974B0k&enablejsapi=1&origin=https://is-it-hot-daily.herokuapp.com/'
			/>
			{/* Hou comment: consider applying styles with a css selector in an external stylesheet rather than inlining the styles */}
			<Button style={{ marginTop: 20 }} onClick={props.showError}>
				CHANGE IT!
			</Button>
		</div>
	);
}

export default SheWolf;
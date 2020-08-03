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
				url='https://www.youtube.com/watch?v=booKP974B0k'
			/>
			<Button style={{ marginTop: 20 }} onClick={props.showError}>
				CHANGE IT!
			</Button>
		</div>
	);
}

export default SheWolf;

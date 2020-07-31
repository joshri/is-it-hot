import React from 'react';
import ReactPlayer from 'react-player';
import ChangeIt from './ChangeIt';

function SheWolf(props) {
    return (
			<div className='sheWolf'>
				<h2>Final Thought:</h2>
				<h2 className='confession'>
					...sometimes, when I'm feeling low, I'll watch the music video for She
					Wolf by Shakira.<br></br>This is literally the best I've got.<br></br>Don't even think about changing it.<br></br>Good Luck out
					there in the world today champ.
				</h2>
				<ReactPlayer
					className='video'
					url='https://www.youtube.com/watch?v=booKP974B0k'
				/>
				<ChangeIt changeIt={props.changeIt} item={props.item} />
			</div>
		);
}

export default SheWolf;
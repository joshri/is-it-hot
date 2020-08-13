import React from 'react';
import Button from './Button';

// Hou comment: nice job using a functional component here! Color is a great candidate for the functional component pattern because it does not rely on state.
function Color(props) {
	const changeColor = (event) => {
		event.preventDefault();
		props.setColor(event.target.id);
	};

	return (
		<div className='color'>
			<h2>How does that make you feel?</h2>
			<form
				// Hou comment: try to avoid inline styles; use class selectors or style-components instead
				style={{
					width: '80vw',
					display: 'flex',
					justifyContent: 'space-evenly',
				}}>
				<Button onClick={changeColor} type='submit' id='#ff8080'>
					ANGRY
				</Button>

				<Button onClick={changeColor} type='submit' id='#99ccff'>
					UPSET
				</Button>

				<Button onClick={changeColor} type='submit' id='#ffff66'>
					DELIGHTED
				</Button>

				<Button onClick={changeColor} type='submit' id='#99ff99'>
					CONTEMPLATIVE
				</Button>

				<Button onClick={changeColor} type='submit' id='grey'>
					EMPTY
				</Button>
			</form>
			<Button
				style={{ marginTop: 20 }}
				onClick={changeColor}
				type='submit'
				id='white'>
				RESET
			</Button>
		</div>
	);
}

export default Color;
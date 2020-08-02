import React from 'react';

function Color(props) {

    const changeColor = (event) => {
        event.preventDefault();
        props.setColor(event.target.id);
    }

    return (
			<div className='color'>
				<h2>How does that make you feel?</h2>
				<form >
					
					<button onClick={changeColor} type='submit' id='#ff8080'>
						ANGRY
					</button>
					
					<button onClick={changeColor} type='submit' id='#99ccff'>
						UPSET
					</button>
					
					<button onClick={changeColor} type='submit' id='#ffff66'>
						DELIGHTED
					</button>
					
					<button onClick={changeColor} type='submit' id='#99ff99'>
						CONTEMPLATIVE
					</button>
					
					<button onClick={changeColor} type='submit' id='grey'>
						EMPTY
					</button>
				</form>
			</div>
		);
}

export default Color;
import React, { Component } from 'react';
import Button from './Button';

class Error extends Component {
	render() {
		return (
			<div className='error'>
				<h1 className='error1'>HEY!</h1>
				<h3 className='error2'>
					Something has gone horribly wrong.<br></br>Maybe you tried to change my Shakira video at the end...or even put in a fake zip... If so, you know what you did.
				</h3>
				<Button onClick={this.props.askAgain}>TRY AGAIN</Button>
			</div>
		);
	}
}

export default Error;
import React, { Component } from 'react';
import Button from './Button';

class Header extends Component {
	render() {
		return (
			<div className='header'>
				<h1 style={{ marginLeft: 20 }}>
					Is It Hot?<br></br>Your Instant Guide.
				</h1>
				<Button style={{ marginRight: 20 }} onClick={this.props.askAgain}>
					ASK AGAIN?
				</Button>
			</div>
		);
	}
}

export default Header;
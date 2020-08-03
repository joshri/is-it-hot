import React, { Component } from 'react';
import './App.css';
import Button from './Button';

class Header extends Component {
	render() {
		return (
			<div className='header'>
				<h1 className='title'>
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

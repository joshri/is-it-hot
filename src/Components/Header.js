import React, { Component } from 'react';
import './App.css';

class Header extends Component {
	render() {
		return (
			<div className='header'>
				<h1 className='title'>
					Is It Hot?<br></br>Your Instant Guide.
				</h1>
				<button id='about' className='askAgain' onClick={this.props.showModal}>ABOUT</button>
				<button className='askAgain' onClick={this.props.askAgain}>
					ASK AGAIN
				</button>
			</div>
		);
	}
}

export default Header;

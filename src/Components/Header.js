import React, { Component } from 'react';
import './App.css'

class Header extends Component {
	render() {
		return (
			<div className='header'>
				<h1>Is It Hot? Your Daily Guide.</h1>
				<button className='askAgain' onClick={this.props.askAgain}>
					ASK AGAIN
				</button>
			</div>
		);
	}
}

export default Header;

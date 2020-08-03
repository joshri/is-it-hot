import React, { Component } from 'react';
import Button from './Button';

class Home extends Component {
	render() {
		return (
			<div className='home'>
				<h2 className='prompt'>is it hot? or is it not?</h2>
				<form className='zipForm' onSubmit={this.props.handleSubmit}>
					<label htmlFor='zip'>Zip Code: </label>
					<input
						id='zip'
						type='text'
						placeholder='Zip Code Here!!'
						onChange={this.props.handleChange}></input>

					<Button type='submit'>HOT OR NOT?</Button>
				</form>
				<Button id='about' onClick={this.props.showModal}>
					ABOUT
				</Button>
			</div>
		);
	}
}

export default Home;

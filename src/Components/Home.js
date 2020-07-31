import React, { Component } from 'react';

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

					<button className='submit' type='submit'>
						HOT OR NOT
					</button>
				</form>

				<button
					id='about'
					className='aboutButton'
					onClick={this.props.showModal}>
					ABOUT
				</button>
			</div>
		);
	}
}

export default Home;

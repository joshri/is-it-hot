import React, { Component } from 'react';
import Button from './Button';

// Hou comment: As a follow-up challenge, how would you refactor Home to use a functional component + Hooks? In general, how would you refactor your class components that don't rely state to use functional components, like you have done for some other components?
class Home extends Component {
	render() {
		return (
			// Hou comment: I can see you're using a mix of styled-components and classNames to 
			// style your components. As a follow-up challenge, try refactoring your entire 
			// application to only use styled-components. In real world development, we try to avoid 
			// mixing styling approaches in a single codebase to reduce developer confusion.
			<section className='home'>
				<h2 className='prompt'>is it hot? or is it not?</h2>
				<form className='zipForm' onSubmit={this.props.handleSubmit}>
					<label htmlFor='zip'>Zip Code: </label>
					<input
						id='zip'
						type='text'
						placeholder='Zip Code Here!!'
						onChange={this.props.handleChange} />
					<Button type='submit'>HOT OR NOT?</Button>
				</form>
				<Button id='about' onClick={this.props.showModal}>
					ABOUT
				</Button>
			</section>
		);
	}
}

export default Home;
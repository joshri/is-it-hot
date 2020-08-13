import React from 'react';
import './App.css';
import Header from './Header';
import About from './About';
import Home from './Home';
import Display from './Display';
import Error from './Error';

class App extends React.Component {
	// Hou comment: No need to pass props into your constructor() and super() since
	// you're not accessing this.props inside the constructor()
	constructor() {
		super();
		this.state = {
			showDisplay: false,
			showError: false,
			display: 'none',
			zip: '',
		};
	}

	handleChange = (event) => {
		this.setState({ [event.target.id]: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ showDisplay: true });
	};

	askAgain = () => this.setState({ showDisplay: false, showError: false });

	showError = () => this.setState({ showError: true, showDisplay: false });

	showModal = (event) => {
		if (event.target.id === 'about') {
			this.setState({ display: 'flex' });
		} else {
			this.setState({ display: 'none' });
		}

		// Hou comment: You can refactor lines 36-40 to:
		// this.setState({ display: event.target.id === 'about' ? 'flex' : 'none'});
	};

	render() {
		// Hou comment: you could use destructuring to extract your state into variables at the top of the function, so you don't have to access them repeatedly in this.state
		// const {
		//  color,
		// 	showDisplay,
		// 	showError,
		//  zip
		// } = this.state
		if (!this.state.showDisplay && !this.state.showError) {
			return (
				// Hou comment: you can use a React fragment <></> here instead of creating an unnecessary div tag: https://reactjs.org/docs/fragments.html
				<>
					<Header askAgain={this.askAgain} />
					<About display={this.state.display} showModal={this.showModal} />
					<Home
						showModal={this.showModal}
						handleChange={this.handleChange}
						handleSubmit={this.handleSubmit}
					/>
				</>
			);
		} else if (this.state.showDisplay) {
			return (
				<div
					style={{
						backgroundColor: this.state.color,
						borderColor: this.state.color,
					}}>
					<Header askAgain={this.askAgain} />
					<Display showError={this.showError} zip={this.state.zip} />
				</div>
			);
		} else if (this.state.showError) {
			return (
				<>
					<Header askAgain={this.askAgain} />
					<Error showError={this.state.showError} askAgain={this.askAgain} />
				</>
			);
		}
	}
}

export default App;

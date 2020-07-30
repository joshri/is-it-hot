import React from 'react';
import './App.css';
import { motion } from 'framer-motion';
import { Route } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Home from './Home';
import Display from './Display';
import Error from './Error';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showDisplay: false,
			showError: false,
			display: 'none',
			zip: '',
		};
	}

	handleChange = (event) => {
		let propertyName = event.target.id;
		this.setState({ [propertyName]: event.target.value });
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
	};

	render() {
		return (
			<div className='App'>
				<Header askAgain={this.askAgain} />
				<About display={this.state.display} showModal={this.showModal} />
				<Route
					exact
					path='/'
					render={() => {
						if (!this.state.showDisplay && !this.state.showError) {
							return (
								<Home
									display={this.state.display}
									showModal={this.showModal}
									handleChange={this.handleChange}
									handleSubmit={this.handleSubmit}
								/>
							);
						}
					}}
				/>
				<Route
					path='/'
					render={() => {
						if (this.state.showDisplay) {
							return (
								<Display
									showDisplay={this.state.showDisplay}
									showError={this.showError}
									zip={this.state.zip}
								/>
							);
						}
					}}
				/>
				<Route
					path='/'
					render={() => {
						if (this.state.showError) {
							return (
								<Error
									showError={this.state.showError}
									askAgain={this.askAgain}
								/>
							);
						}
					}}
				/>
			</div>
		);
	}
}

export default App;

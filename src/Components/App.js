import React from 'react';
import './App.css';
import Header from './Header';
import About from './About';
import Home from './Home';
import Display from './Display';
import Error from './Error';
import styled from 'styled-components';

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
		if (!this.state.showDisplay && !this.state.showError) {
			return (
				<div>
					<Header askAgain={this.askAgain} />
					<About display={this.state.display} showModal={this.showModal} />
					<Home
						showModal={this.showModal}
						handleChange={this.handleChange}
						handleSubmit={this.handleSubmit}
					/>
				</div>
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
				<div>
					<Header askAgain={this.askAgain} />
					<Error showError={this.state.showError} askAgain={this.askAgain} />
				</div>
			);
		}
	}
}

export default App;

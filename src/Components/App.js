import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Display from './Display';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showDisplay: false,
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

	askAgain = () => {
		this.setState({ showDisplay: false });
	};

	render() {
		return (
			<div className='App'>
				<Header askAgain={this.askAgain} />
				<Route
					exact
					path='/'
					render={() => {
						if (!this.state.showDisplay) {
							return (
								<Home
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
									zip={this.state.zip}
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

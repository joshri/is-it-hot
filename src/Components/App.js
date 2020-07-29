import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Display from './Display';


const weatherKey = process.env.REACT_APP_WEATHER_KEY;

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showDisplay: false,
			zip: '',
			weather: {
        name: '',
        feels_like: '',
      },
			hotOrNot: null,
		};
	}

	handleChange = (event) => {
		console.log(event.target.value);
		let propertyName = event.target.id;
		this.setState({ [propertyName]: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ showDisplay: true });
	};

  askAgain = () => {
    this.setState({ showDisplay: false });
  }

	setWeather = (json) => {
		this.setState({ weather: {
      name: json.main.name,
      feels_like: json.main.feels_like
    }});
	};

	hotOrNot = (weather) => {
		if (weather.feels_like < 65) {
			return this.setState({ hotOrNot: 'NOT' });
		}
		return this.setState({ hotOrNot: 'HOT' });
	};

	render() {
		return (
			<div className='App'>
				<Header askAgain={this.askAgain}/>
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
									weatherKey={weatherKey}
									showDisplay={this.state.showDisplay}
									zip={this.state.zip}
									setWeather={this.setWeather}
                  weather={this.state.weather}
                  hotOrNot={this.hotOrNot}
                  heat={this.state.hotOrNot}
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

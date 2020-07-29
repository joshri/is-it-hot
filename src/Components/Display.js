import React, { Component } from 'react';

const weatherKey = process.env.REACT_APP_WEATHER_KEY;

class Display extends Component {
	constructor(props) {
		super(props);
		this.state = {
			weather: {
				name: '',
				feels_like: '',
			},
			hotOrNot: null,
			advice: '',
		};
	}

	setWeather = (json) => {
		this.setState({
			weather: {
				name: json.name,
				feels_like: json.main.feels_like,
			},
		});
	};

	setAdvice = (advice) => {
		this.setState({ advice: advice });
	};

	hotOrNot = (weather) => {
		if (weather.feels_like < 65) {
			return this.setState({ hotOrNot: 'NOT' });
		}
		return this.setState({ hotOrNot: 'HOT' });
	};

	componentDidMount() {
		let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${this.props.zip}&units=imperial&appid=${weatherKey}`;
		fetch(weatherUrl)
			.then((res) => res.json())
			.then((json) => {
                return this.setWeather(json), this.hotOrNot(json.main);
			})
			.catch((error) => {
				console.log(error);
			});
		fetch('https://api.adviceslip.com/advice')
			.then((res) => res.json())
			.then((json) => {
                this.setAdvice(json.slip.advice)
            });
	}

	render() {
		return (
			<main>
				<div className='weather'>
					<h1>{this.state.hotOrNot}</h1>
					<h2>
						Feels exactly like {this.state.weather.feels_like} degrees in good
						ol' {this.state.weather.name}
					</h2>
				</div>
				<div className='advice'>
                    <h2>You know what they say...</h2>
                    <h3>"{this.state.advice}"</h3>
                </div>
			</main>
		);
	}
}

export default Display;

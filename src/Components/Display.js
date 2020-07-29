import React, { Component } from 'react';



class Display extends Component {

	componentDidMount() {
		let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${this.props.zip}&units=imperial&appid=${this.props.weatherKey}`;
		fetch(weatherUrl)
			.then((res) => res.json())
			.then((json) => {
                console.log(json);
                return (this.props.setWeather(json), this.props.hotOrNot(json.main))
			})
			.catch((error) => {
				console.log(error);
			});
	}
   
	render() {
		return (
			<div>
				<h1>{this.props.heat}</h1>
				<h2>Feels Like: {this.props.weather.feels_like}F</h2>
			</div>
		);
	}
}

export default Display;
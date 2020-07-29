import React, { Component } from 'react';

const weatherKey = process.env.REACT_APP_WEATHER_KEY;
let date = new Date();
date.toUTCString();

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
            retro: null,
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
    
    setRetro = (json) => {
        if (json.is_retrograde) {
        this.setState({ retro: 'Good news! Mercury is in retrograde'})
        } 
        this.setState( {retro: 'Unfortunately, Mercury is not in retrograde...'} )
    }

	hotOrNot = (weather) => {
		if (weather.feels_like < 65) {
			return this.setState({ hotOrNot: 'IT\'S NOT' });
		}
		return this.setState({ hotOrNot: 'IT\'S HOT' });
	};

	componentDidMount() {
		let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${this.props.zip}&units=imperial&appid=${weatherKey}`;
		fetch(weatherUrl)
			.then((res) => res.json())
			.then((json) => {
                 this.setWeather(json);
                 this.hotOrNot(json.main);
			})
			.catch(() => {
				this.props.showError();
			});
		fetch('https://api.adviceslip.com/advice')
			.then((res) => res.json())
			.then((json) => {
                this.setAdvice(json.slip.advice)
            });
        fetch(`https://mercuryretrogradeapi.com?date=${date}`)
        .then(res => res.json())
        .then(json => {
            this.setRetro(json)
        })
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
                <div className='retro'>
                    <h2>Need an excuse?</h2>
                    <h3>{this.state.retro}</h3>
                </div>
			</main>
		);
	}
}

export default Display;

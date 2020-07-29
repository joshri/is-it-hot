import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Home extends Component {
   
    render() {
        return (
					<div>
						<h2>Type out your Zip Code to KNOW</h2>
						<form onSubmit={this.props.handleSubmit}>
							<label htmlFor='zip'>Zip Code: </label>
							<input
								id='zip'
								type='text'
								placeholder='Zip Code Here!!'
								onChange={this.props.handleChange}></input>
							
								<button type='submit'>HOT OR NOT</button>
							
						</form>
					</div>
				);
    }
}

export default Home;
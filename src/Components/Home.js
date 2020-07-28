import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Type in your city to get started!</h2>
                <form>
                    <label for='city'>City:</label>
                    <input 
                    id='city'
                    type='text' placeholder='City'>
                    </input>
                </form>
            </div>
        );
    }
}

export default Home;
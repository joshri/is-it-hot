import React, { Component } from 'react';

class Error extends Component {
    render() {
        return (
            <div className='error'>
                <h1>HEY!</h1>
                <h3>Type in a real zip next time bub.</h3>
                <button onClick={this.props.askAgain}>SAY SORRY</button>
            </div>
        );
    }
}

export default Error;
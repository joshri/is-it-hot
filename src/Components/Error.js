import React, { Component } from 'react';

class Error extends Component {
    render() {
        return (
            <div className='error'>
                <h1>HEY!</h1>
                <h3>You have done something horribly wrong. I hope you know what you did.</h3>
                <button onClick={this.props.askAgain}>SAY SORRY</button>
            </div>
        );
    }
}

export default Error;
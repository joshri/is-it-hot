import React from 'react';


function Kitty(props) {
    let random = Math.floor(Math.random() * 220) + 180;
    return (
        <div>
            <h3>or this cat:</h3>
            <img className='kitty' src={`https://placekitten.com/${random}/200`} />
        </div>
    );
}

export default Kitty;
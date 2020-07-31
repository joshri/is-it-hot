import React from 'react';

function ChangeIt(props) {
    return (
        <div className='changeIt'>
            <button onClick={() => props.changeIt(props.item)}>CHANGE IT!</button>
        </div>
    );
}

export default ChangeIt;
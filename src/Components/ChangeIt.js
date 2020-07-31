import React from 'react';

function ChangeIt(props) {
    return (
        <div>
            <button onClick={() => props.changeIt(props.item)}>CHANGE IT!</button>
        </div>
    );
}

export default ChangeIt;
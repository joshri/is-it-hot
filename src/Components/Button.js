import React from 'react';
import styled from 'styled-components';

// Nice job using styled-components to style your buttons!
Button = styled.button`
	font-family: 'Montserrat', sans-serif;
	border-radius: 15px;
	padding: 10px;
	margin: 10px;
	background: transparent;
	border: 2px solid black;
	&:hover {
		font-size: 15px;
	}
`;

// Let's destructure our props
function Button({type, id, onClick}) {
	return (
		<Button type={type} id={id} onClick={onClick}></Button>
	);
}

export default Button;
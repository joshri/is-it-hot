import React from 'react';
import styled from 'styled-components';

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

function Button(props) {
	return (
		<div>
			<Button type={props.type} id={props.id} onClick={props.onClick}></Button>
		</div>
	);
}

export default Button;
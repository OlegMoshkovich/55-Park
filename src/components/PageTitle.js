import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
	display: ${(props) => props.display || 'flex'};
	position: ${(props) => props.position || 'fixed'};
	top: ${(props) => props.top || '0px'};
	flex-direction: ${(props) => props.direction || 'column'};
	justify-content: ${(props) => props.justify || 'center'};
	align-items: ${(props) => props.align || 'center'};
	width: ${(props) => props.width || '100vw'};
	height: ${(props) => props.height || '100px'};
	border: 1px solid ${(props) => props.border || 'transparent'};
	z-index: 95;
`;

const Text = styled.div`
	font-size: ${(props) => props.font || '20px'};
	font-weight: ${(props) => props.weight || '100'};
	margin: 0px 10px 10px 10px;
	border: 1px solid ${(props) => props.border || 'transparent'};
	color: white;
`;

export const Title = (props) => {
	return (
		<Container position={props.position} top={props.top} border={props.border}>
			{/* <Container border={'red'}> */}
			<Text font={'30px'} weight={'200'} border={props.border}>
				{props.title}
			</Text>
			<Text font={'20px'} weight={'200'} border={props.border}>
				{props.subtitle}
			</Text>
			{/* </Container> */}
		</Container>
	);
};

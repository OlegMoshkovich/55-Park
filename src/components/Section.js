import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background-color: ${(props) => props.color};
	// border: 1px solid red;
`;
const LocalContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 100vw;
	height: ${(props) => props.height || '400px'};
	//  border: 1px solid blue;
`;
const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 400px;
	height: 800px;
	background-color: ${(props) => props.color};
	color: ${(props) => props.titleColor || ''};
	font-size: ${(props) => props.fontSize || '60px'};
	line-height: 70px;
	margin: 30px;
	text-align: center;
	// border: 1px solid red;
`;
const DescriptionContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 440px;
	height: 800px;
	background-color: ${(props) => props.color};
	font-size: ${(props) => props.fontSize || '20px'};
	color: ${(props) => props.titleColor || ''};
	line-height: 22px;
	margin: 30px;
	text-align: center;
	// border: 1px solid red;
`;

export const Section = (props) => {
	return (
		<Container ref={props.refProp} color={props.color}>
			<LocalContainer>
				<TitleContainer titleColor={props.titleColor}>{props.title}</TitleContainer>
				<DescriptionContainer titleColor={props.titleColor}>{props.description}</DescriptionContainer>
			</LocalContainer>
		</Container>
	);
};

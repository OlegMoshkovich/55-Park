import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	position: fixed;
	top: 80px;
	left: 4%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: auto;
	height: 350px;
	z-index: 103;
	// border: 1px solid red;
`;

const CircleContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30px;
	height: 30px;
	// border:1px solid #EF5030;
`;

const Circle = styled.div`
	width: ${(props) => props.proportion * 12 + 'px'};
	height: ${(props) => props.proportion * 12 + 'px'};
	border-radius: 50%;
	background-color: ${(props) => props.color};
	font-size: 1px;
	// color: #ef5030;
	// color: ${(props) => props.color};
	cursor: pointer;
	z-index: 104;
`;

const MenuWrapperContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	// width:300px;
	height: 100%;
	z-index: 103;
	//  border: 1px solid red;
	margin: 0px 0px 0px 0px;
`;
const VerticleLine = styled.div`
	height: 100%;
	border: 1px solid rgba(239, 80, 48, .4);
`;

const VerticleLineContainer = styled.div`
	height: 90%;
	position: absolute;
`;

export const SideNav = (props) => {
	const elements = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ];
	const titles = [ 'design', , , , , , 'construction' ];
	const sections = [ 0, 5, 9 ];
	elements.splice(props.page, 1, 2);
	return (
		<Container>
			<MenuWrapperContainer>
				{elements.map((el, i) => (
					<CircleContainer key={i + 'circleContainer plus'}>
						{' '}
						<Circle
							color={sections.includes(i) ? '	white' : '#ef5030'}
							key={i + 'circle'}
							proportion={el}
							onClick={(e) => props.pageToNav(e.target.innerHTML)}
						>
							{i}
						</Circle>
						{/* <div style={{ display: 'flex', border: '1px solid green', width: '70px' }}>{titles[i]}</div> */}
					</CircleContainer>
				))}
			</MenuWrapperContainer>
			<VerticleLineContainer>
				<VerticleLine />
			</VerticleLineContainer>
		</Container>
	);
};

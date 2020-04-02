import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
// import logo from '../img/logo.png';
import { useNavigate } from '@reach/router';

const Container = styled.div`
	position: fixed;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100vw;
	z-index: 101;
	// border: 1px solid red;
`;
const AdjustableContainer = styled.div`
	position: fixed;
	top: 15px;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	// align-items: flex-start;
	width: 95vw;
	z-index: 95;
	// border: 1px solid red;
`;
const LocalContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: ${(props) => props.position || 'space-around'};
	align-items: center;
	width: ${(props) => props.width || 'auto'};
	height: 100 %;
	font-size: 20px;
	// border: 1px solid red;
	z-index: 95;
`;
const LinksContainer = styled.div`
	position: fixed;
	bottom: 15px;

	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: space-around;
	width: 120px;
	height: 100 %;
	font-size: 20px;
	z-index: 95;
	// border: 1px solid red;
`;
const Image = styled.img`
	display: block;
	width: 50px;
	cursor: pointer;
	z-index: 101;
`;

export const Nav = (props) => {
	const navigate = useNavigate();
	return (
		<Container>
			<AdjustableContainer>
				<LinksContainer>
					<Link style={{ color: '#EF5030' }} to="/">
						glossary
					</Link>
					{/* <Link style={{ color: '#EF5030' }} to="/2">
						v2
					</Link>
					<Link style={{ color: '#EF5030' }} to="/questions">
						Qs
					</Link>
					<Link style={{ color: '#EF5030' }} to="/dashboard">
						dash1
					</Link>
					<Link style={{ color: '#EF5030' }} to="/dashboard2">
						dash2
					</Link> */}
				</LinksContainer>
				{/* {props.logo ? (
					<LocalContainer position={'center'}>
						<Image src={logo} onClick={() => navigate('/', { replace: true })} />
					</LocalContainer>
				) : (
					''
				)} */}
			</AdjustableContainer>
		</Container>
	);
};

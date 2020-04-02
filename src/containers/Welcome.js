import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Nav } from '../components/Nav';
import { SideNav } from '../components/SideNav';
import { Title } from '../components/PageTitle';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useNavigate } from '@reach/router';
import { Section } from '../components/Section';
import { Modal } from '../components/Modal';

const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100vw;
	background:#6a7483;
	overflow:fixed;
`;


export const Welcome = (props) => {
	const [ page, setPage ] = useState(0);
	const [ disabled, setDisabled ] = useState(true);
	const [ code, setCode ] = useState('');
	const [ modal, setModal ] = useState(true);
	const [ qualified, setQualified ] = useState(false);
	const [ modalType, setModalType ] = useState('form');
	const navigate = useNavigate();
	useEffect(() => {
		setModal(false);
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	}, []);

	const section_0 = useRef();
	const section_1 = useRef();
	const section_2 = useRef();
	const section_3 = useRef();
	const section_4 = useRef();
	const section_5 = useRef();
	const section_6 = useRef();
	const section_7 = useRef();
	const section_8 = useRef();
	const section_9 = useRef();
	const section_10 = useRef();
	const height = window.innerHeight;

	useScrollPosition(({ currPos }) => {
		// console.log("current position: ", currPos)
		let currentPage = Math.floor(Math.abs(currPos.y / height));
		setPage(currentPage);
	});

	const scrollToRef = (ref) =>
		window.scrollTo({
			top: ref.current.offsetTop,
			left: 0,
			behavior: 'smooth'
		});

	const executeScroll = (page) => {
		console.log('in the execute scroll', page);
		switch (page) {
			case '0':
				console.log('here');
				scrollToRef(section_0);
				break;
			case '1':
				scrollToRef(section_1);
				break;
			case '2':
				scrollToRef(section_2);
				break;
			case '3':
				scrollToRef(section_3);
				break;
			case '4':
				scrollToRef(section_4);
				break;
			case '5':
				scrollToRef(section_5);
				break;
			case '6':
				scrollToRef(section_6);
				break;
			case '7':
				scrollToRef(section_7);
				break;
			case '8':
				scrollToRef(section_8);
				break;
			case '9':
				scrollToRef(section_9);
				break;
			case '10':
				scrollToRef(section_10);
				break;
			default:
				console.log('sorry something is wrong with the side nav component');
		}
	};
	const ActivateModal = (type) => {
		type === 'form' ? setModalType('form') : setModalType('description');
		setModal(!modal);
	};
	//snippet for the input button to be enabled/disabled
	if (code.length > 5 && disabled) {
		console.log('codes', props.codes);
		const parsedCode = parseInt(code);
		if (props.codes.includes(parsedCode)) {
			setDisabled(false);
			setQualified(true);
		} else {
			setDisabled(false);
			setQualified(false);
		}
	}

	if (code.length < 6 && !disabled) {
		setDisabled(true);
	}

	return (
		<PageContainer>
			{modal ? <Modal activateModal={ActivateModal} type={modalType} /> : ''}
			<Nav logo={false} />
			<Title title={'55 Park'} subtitle={'White Paper '} />
			<SideNav page={page} pageToNav={executeScroll} />

			<Section
				refProp={section_0}
				color={'#232c3b'}
				titleColor={'white'}
				title={'Design Phase '}
				description={
					'For the phase of the project a set of BIM products will be developed and the necessary set of BIM services implemented that will insure the on-going success of the BIM process which will result in great savings and increase quality throughout the life cycle of the building.'
				}
			/>
					 <Section
				refProp={section_1}
				color={'#6a7483'}
				title={'Reality Capture '}
				description={'In order to accurately capture the existing conditions the team will utilize spatial laser scanning at the start of the BIM process. This allows to establish the single source of truth and to link the phisycal reality to the digital design and coordintation space.'}
			/>
				<Section
				refProp={section_2}
				color={'#f0f0f0'}
				title={'BIM Authoring'}
				description={'Existing design documents will be translated it 3D BIM elements and over layedonto the existing conditions reality captured model.'}
			/>
				<Section
				refProp={section_3}
				color={'#6a7483'}
				title={'BIM Coordination'}
				description={
					'The team will organize and arrange weekly meetings and possibly longer working sessions to address with the project team all of the issues uncovered during BIM clash detection. Typically project issues  include but not limeted to ceiling height, system interferences, dimensional inaccuracies, etc. The intent is to eliminate the mistakes and change orders.'
				}
			/>
		
	

		

		

			<Section
				refProp={section_4}
				color={'#f0f0f0'}
				title={'BIM specification'}
				description={
					'A comprehensive set of guidelines need to be included in the bid package in order to structure the BIM centric process and to enable the 3D coordination as well as to make certain the selected contractor team is equipped with the necessary personnel to run the BIM process, specifically BIM coordination.'
				}
			/>

			<Section
				refProp={section_5}
				color={'#232c3b'}
				titleColor={'white'}
				title={'Construction Phase '}
				description={
					'During this phase of the project BIM product and documents generated in the design phase will be further augmented and brought to the next level of detail. Also during this phase all of the appropriate constcution related BIM services will be implemented.'
				}
			/>
			<Section
				refProp={section_6}
				color={'#6a7483'}
				title={'Development of the existing design BIM into construction BIM '}
				description={
					'At the begininng of the construction process the team will add  extra level of detail to the design BIM model in order to produce the model that adhers to the 400 level of detail - which is equivalent of shop drawings level of detail in the traditional process.'
				}
			/>
			<Section
				refProp={section_7}
				color={'#f0f0f0'}
				title={'BIM coordination '}
				description={
					'The team will organize and arrange weekly meetings and possibly longer working sessions to address with the project team all of the issues uncovered during BIM clash detection. These session will also bee used to aid discussions and resolution sessions.'
				}
			/>

			<Section
				refProp={section_8}
				color={'#6a7483'}
				title={'Construction Progress Reality Capture '}
				description={
					'Constuction phase reality capture will happen on recurring basis to make certain all of the progress is captured and integrated into the model in order to produce extremely accurate as build documentation and to validate that installation of the equipment is in accordance with the specifications.'
				}
			/>
			<Section
				refProp={section_9}
				color={'#232c3b'}
				titleColor={'white'}
				title={'Operations Phase '}
				description={
					'During this phase of the project all of the BIM products and documents generated in the construction phase will be converted to the appropriate artifacts to be used to efficiently operate the facility'
				}
			/>
			<Section
				refProp={section_10}
				color={'#f0f0f0'}d
				title={'Parallel Processes '}
				description={
					'Operations data and documentation is produced during construction parallel to the BIM process which collapses the timelines and effort associate with commissioning and operations of the project and has resulted in about 75% savings as compared to the traditional process'
				}
			/> 
		</PageContainer>
	);
};

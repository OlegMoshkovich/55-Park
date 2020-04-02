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
					'During this phase of the project a set of BIM products will be developed along with the implementation of BIM wservices that will insure insure the on going success of of the BIM process that will result in great savings and increase quality throughout the life cycle of the building.'
				}
			/>
			<Section
				refProp={section_1}
				color={'#6a7483'}
				title={'Reality Capture '}
				description={'Accurately captures the existing conditions using spacial laser scanning.'}
			/>

			<Section
				refProp={section_2}
				color={'#f0f0f0'}
				title={'BIM Authoring'}
				description={'over laying all of the design documents onto the existing conditions model'}
			/>

			<Section
				refProp={section_3}
				color={'#6a7483'}
				title={'Coordination - Constructability Review '}
				description={
					'set time to coordinate the issues on weekly meetings and possibly long work sessions in the beginning to address all of the issues uncovered during coordination of the project Issues to be mitigated: ceiling height, system interferences...The intent is to eliminate the mistakes and change orders'
				}
			/>

			<Section
				refProp={section_4}
				color={'#f0f0f0'}
				title={'BIM specification'}
				description={
					'needs to be included in the bid package in order to structure the BIM centric process and to enable the 3D coordination and to make sure that the contractor team is equipped with the necessary personnel to run the coordination.'
				}
			/>

			<Section
				refProp={section_5}
				color={'#232c3b'}
				titleColor={'white'}
				title={'Construction Phase '}
				description={
					'During this phase of the project all of the BIM product and documents generated in the design phase will further augmented and brought to the next level of detail. Also during this phase all of the appropriate BIM services will be implemented'
				}
			/>
			<Section
				refProp={section_6}
				color={'#6a7483'}
				title={'Development of the existing design BIM into construction BIM '}
				description={
					'At the begininng of the construction process the team will add the extra level of detail to the design bim model in order to produce a model that adhers to the 400 level of detail - which is equivalent of the shop drawings in the traditional process.'
				}
			/>
			<Section
				refProp={section_7}
				color={'#f0f0f0'}
				title={'BIM coordination '}
				description={
					'set time to coordinate the issues on weekly meetings and possibly long work sessions in the beginning to address all of the issues uncovered during coordination of the project.'
				}
			/>

			<Section
				refProp={section_8}
				color={'#6a7483'}
				title={'Construction Progress Reality Capture '}
				description={
					'At the begininng of the construction process the team will add the extra level of detail to the design bim model in order to produce a model that adhers to the 400 level of detail - which is equivalent of the shop drawings in the traditional process.'
				}
			/>
			<Section
				refProp={section_9}
				color={'#232c3b'}
				titleColor={'white'}
				title={'Operations Phase '}
				description={
					'During this phase of the project all of the BIM product and documents generated in the construction phase will be converted to the appropriate artifacts to be used in for operating the facility'
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

import styled from 'styled-components';

export const RightSideMenu = styled.div`
	max-width: 200px;
	width: 100%;
	margin: 40px auto 0 0;
	display: none;

	@media screen and (min-width: 1024px) {
		max-width: 200px;
		display: block;
	}
	@media screen and (min-width: 1220px) {
		max-width: 300px;
	}
`;

export const SideSection = styled.div`
	background-color: #fff;
	border: 1px solid #ccc;
	font-family: 'Lato', sans-serif;
	font-weight: 400;
	font-size: 13px;
	line-height: 1.6;
	padding: 10px;
	border-radius: 10px;
	margin-bottom: 20px;

	h3 {
		border-bottom: 1px solid #ccc;
		font-size: 18px;
	}

	p {
		font-size: 14px;
	}

	span {
		margin-left: 10px;
		font-size: 10px;
	}
`;

export const Accordion = styled.div`
	cursor: pointer;
`;

export const AccordionText = styled.div<{ accordionOpen: boolean }>`
	display: ${props => (props.accordionOpen ? 'block' : 'none')};
`;

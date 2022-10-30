import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const ProfileNavBar = styled.div`
	width: 100%;
	padding: 20px 0;
	display: flex;
	justify-content: center;

	a,
	a:visited {
		text-decoration: none;
		color: #fff;
		background-color: #4267b2;
		display: block;
		padding: 5px 20px;
		border-radius: 25px;
		border: 1px solid #4267b2;
	}
`;

export const ProfileWrapper = styled.div`
	background-color: #fff;
	width: 100%;
	padding: 80px 0;
	border: 1px solid grey;
	border-radius: 25px;
	box-shadow: 2px 2px 10px #eee;
	position: relative;
	overflow: hidden;
`;

export const ProfilePic = styled.img`
	border-radius: 5px;
	position: relative;
	z-index: 1;
`;

export const ProfileName = styled.div`
	margin-top: 20px;
	font-weight: 800;
	font-size: 30px;
	font-family: 'Lato', sans-serif;
	position: relative;
	z-index: 1;
`;

export const ProfileHeader = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	padding-top: 60px;
`;

export const infoDesign = css`
	margin-top: 20px;
	font-weight: 200;
	font-size: 15px;
	font-family: 'Lato', sans-serif;
`;

export const ProfileAddress = styled.div`
	border-top: 1px solid #ccc;
	padding-top: 20px;
	${infoDesign};
`;

export const ProfileDetails = styled.div`
	${infoDesign};
	position: relative;
	z-index: 1;
`;

export const BackgroundImage = styled.div<{ src: string }>`
	background-image: url(${props => props.src});
	height: 250px;
	width: 100%;
	position: absolute;
	top: 0;
	z-index: 0;
`;

export const ClosingButton = styled(Link)`
	position: absolute;
	top: 20px;
	right: 20px;
	font-size: 30px;
	z-index: 10;
	color: white;
`;

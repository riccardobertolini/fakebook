import styled, { css } from 'styled-components';

export const ProfileNavBar = styled.div`
	width: 100%;
	padding: 20px 0;
	display: flex;
	justify-content: center;

	a,
	a:visited {
		text-decoration: none;
		color: #000;
		background-color: #fff;
		display: block;
		padding: 5px 20px;
		border-radius: 25px;
		border: 1px solid #000;
	}
`;

export const ProfileWrapper = styled.div`
	background-color: #fff;
	max-width: 500px;
	width: 100%;
	margin: auto;
	padding: 80px 0;
	border: 1px solid grey;
	border-radius: 25px;
	box-shadow: 2px 2px 10px #eee;
`;

export const ProfilePic = styled.img`
	border-radius: 5px;
`;

export const ProfileName = styled.div`
	margin-top: 20px;
	font-weight: 200;
	font-size: 30px;
	font-family: 'Lato', sans-serif;
`;

export const ProfileHeader = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
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
`;

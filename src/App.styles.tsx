import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Root = styled.div`
	background-color: #eee;
	min-height: 100vh;
`;

export const Body = styled.div`
	background-color: #eee;
`;

export const SocialWall = styled.div`
	width: 100%;
	margin: auto;
`;

export const NavBar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: sticky;
	height: 80px;
	background-color: #4267b2;
	box-shadow: 2px 2px 10px #eee;
`;

export const Logo = styled(Link)`
	font-size: 30px;
	letter-spacing: 6px;
	text-decoration: none;
	font-family: 'Lato', sans-serif;
	font-weight: 400;
	color: white;
	text-shadow: 1px 1px 2px cornflowerblue;

	span {
		font-weight: 800;
	}
`;

export const SideChat = styled.div`
	display: none;
	width: 300px;
	margin: 0 0 0 auto;

	@media screen and (min-width: 1024px) {
		display: block;
		margin: 40px 0 0 auto;
	}

	@media screen and (min-width: 1400px) {
		margin: 40px 0 0 auto;
	}
`;

export const UserStatus = styled.div<{ active: boolean }>`
	width: 12px;
	height: 12px;
	position: absolute;
	bottom: 0;
	border-radius: 45px;
	border: 2px solid white;
	display: block;
	background-color: ${props => (props.active ? '#5ccf4d' : 'indianred')};
`;

export const SideChatUsers = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0 20px;
	h3 {
		border-bottom: 1px solid #ccc;
		font-size: 18px;
		font-family: 'Lato', sans-serif;
		font-weight: 600;
	}
`;

export const UserThumbnail = styled.li`
	position: relative;
	padding: 5px;
	font-family: 'Lato', sans-serif;
	font-weight: 500;
	margin: 0 0 2px 0;

	a,
	a:visited {
		color: black;
		text-decoration: none;
	}
`;

export const InnerThumbnail = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: left;
	gap: 10px;

	img {
		border-radius: 45px;
	}
`;

export const ShowMoreBtn = styled.button`
	text-decoration: none;
	color: #fff;
	background-color: #4267b2;
	display: block;
	padding: 5px 20px;
	border-radius: 25px;
	border: 1px solid #4267b2;
	cursor: pointer;
`;

export const Footer = styled.div`
	display: flex;
	justify-content: center;
	padding: 10px;
`;

export const BodyComponent = styled.div`
	display: flex;
	justify-content: center;
	padding: 10px;
`;

export const CentralContent = styled.div`
	width: 450px;

	@media screen and (min-width: 800px) {
		display: block;
		margin: 40px;
	}
`;

import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Root = styled.div`
	background-color: #eee;
	min-height: 100vh;
`;

export const Body = styled.div`
	background-color: #eee;
`;

export const SocialWall = styled.div`
	max-width: 500px;
	margin: auto;
	padding: 20px 5px;

	@media screen and (min-width: 1024px) {
		width: 100%;
		padding: 40px;
	}
`;

export const NavBar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: sticky;
	height: 80px;
	background-color: #fff;
	box-shadow: 2px 2px 10px #eee;
`;

export const Logo = styled.div`
	font-size: 45px;
	font-family: 'Lato', sans-serif;
	font-weight: 200;
	color: cornflowerblue;
	text-shadow: 1px 1px 1px cornflowerblue;
	span {
		font-weight: 900;
	}
`;

export const SideChat = styled.div`
	float: left;
	display: none;
	margin: 20px;
	width: 200px;
	position: absolute;

	@media screen and (min-width: 1024px) {
		display: block;
		margin: 40px 0 0 5%;
	}
	@media screen and (min-width: 1400px) {
		margin: 40px 0 0 15%;
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
	background-color: ${props => (props.active ? 'red' : 'chartreuse')};
`;

export const SideChatUsers = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0 20px;
`;

export const UserThumbnail = styled.li`
	position: relative;
	padding: 5px;
	font-family: 'Lato', sans-serif;
	font-weight: 200;
	border: 1px solid #eee;
	margin: 0 0 2px 0;

	a,
	a:visited {
		color: black;
	}
`;

export const InnerThumbnail = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: left;
	gap: 10px;
`;

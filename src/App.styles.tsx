import styled from 'styled-components';

export const Root = styled.div`
	background-color: #eee;
	min-height: 100vh;
`;

export const Body = styled.div`
	background-color: #eee;
`;

export const SocialWall = styled.div`
	width: 100%;
	max-width: 500px;
	margin: auto;
	padding: 40px;
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

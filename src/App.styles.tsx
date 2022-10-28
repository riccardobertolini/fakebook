import styled from 'styled-components';

export const Body = styled.div`
	background-color: #eee;
	padding: 20px;
`;

export const SocialWall = styled.div`
	width: 100%;
	max-width: 400px;
	margin: auto;
`;

export const NavBar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: sticky;
	height: 80px;
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

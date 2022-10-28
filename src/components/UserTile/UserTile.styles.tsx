import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const commonMargin = css`
	padding-bottom: 15px;
`;

export const SocialWallTile = styled.div`
	border: 1px solid #ccc;
	background-color: #fff;
	border-radius: 10px;
	padding: 20px 10px;
	margin-bottom: 20px;
`;

export const UserInfo = styled.div`
	display: flex;
	align-content: center;
	align-items: center;
	gap: 10px;
	font-weight: 300;
	font-family: 'Lato', sans-serif;
	font-size: 14px;
	${commonMargin};

	img {
		border-radius: 50%;
		width: 40px;
		height: 40px;
		object-fit: contain;
	}
`;

export const ImageContainer = styled.div`
	position: relative;
	overflow: hidden;
	max-height: 400px;
`;

export const ImagePosted = styled.img`
	width: 100%;
	transition: 0.3s;
	object-fit: contain;

	&:hover {
		transform: scale(1.1);
	}
`;

export const Quote = styled.div`
	font-weight: 400;
	font-size: 18px;
	font-family: 'Lato', sans-serif;
	${commonMargin};
`;

export const SocialInteractions = styled.div`
	display: flex;
	position: relative;
	gap: 2px;
`;

const InteractionButtonsDesign = css`
	width: 50%;
	height: 40px;
	font-size: 16px;
	font-family: 'Lato', sans-serif;
	font-weight: 700;
	background-color: #f3f3f3;
	border: 1px solid #eee;
	border-radius: 5px;
`;

export const LikeButton = styled.button`
	${InteractionButtonsDesign};
	cursor: pointer;
`;

export const CommentButton = styled(Link)`
	${InteractionButtonsDesign};
	display: flex;
	align-items: center;
	justify-content: center;
	color: black;
	text-decoration: none;
`;

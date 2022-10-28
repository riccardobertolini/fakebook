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
  
  span {
    display: block;
	background-color: #ccc;
	width: 40px;
	height: 14px;
    &:nth-child(2) {

	  width: 60px;
	}
  }
}`;

export const EmptyProfileImage = styled.div`
	border-radius: 50%;
	width: 40px;
	height: 40px;
	background-color: dimgrey;
	object-fit: contain;
`;
export const QuoteLoading = styled.div`
	font-weight: 400;
	font-size: 18px;
	width: 100%;
	height: 40px;
	margin-bottom: 20px;
	background-color: #ccc;
	font-family: 'Lato', sans-serif;
	${commonMargin};
`;

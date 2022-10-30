import styled from 'styled-components';

export const InteractiveWrapper = styled.div`
	border: 1px solid #ccc;
	background-color: #fff;
	border-radius: 10px;
	padding: 20px 10px;
	margin-bottom: 20px;
	display: flex;
`;

export const InteractiveInput = styled.input`
	width: 100%;
	border: 1px solid #eee;
	background-color: #eee;
	height: 30px;
	font-size: 15px;
	border-radius: 10px;
	padding: 0 10px;

	&,
	&:focus {
		outline: none;
		outline: 0;
		border-color: inherit;
		-webkit-box-shadow: none;
		box-shadow: none;
	}
`;

export const InteractivePicture = styled.div`
	width: 33px;
	height: 33px;
	object-fit: cover;
	margin-right: 10px;
	img {
		position: relative;
		width: 33px;
		min-height: 33px;
	}
`;

export const SubmitButton = styled.button`
	width: 80px;
	height: 32px;
	background-color: #fff;
	border: 1px solid #ccc;
	border-radius: 5px;
	margin-left: 10px;
	font-size: 16px;
	padding: 5px;

	&:hover {
		border: 1px solid #aaa;
		background-color: #eee;
	}
`;

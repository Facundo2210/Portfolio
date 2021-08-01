import styled from 'styled-components';
export const StyledContainer = styled.div`
	display: flex;
	position: fixed;
	z-index: 1;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 2.8rem;
	overflow: hidden;
	background-color: ${({theme}) => theme.navBar};
	box-shadow: 0px 1px 15px 2px rgba(0, 0, 0, 0.2);
	a {
		text-decoration: none;
		color: ${({theme}) => theme.text};
	}
	.div_container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		width: 90%;
		height: 2.8rem;
		.div_buttons {
			margin-left: 16rem;
			width: 40%;
			display: flex;
			justify-content: space-between;
			.div_link {
				&:hover {
					transform: translateY(-0.1rem);
				}
			}
		}
		.div_switch {
			width: 7%;
			display: flex;
			justify-content: space-between;
			span {
				margin-top: 4px;
			}
		}
	}
	.icon_anim {
		animation: bouncee 2s ease;
		@keyframes bouncee {
			0% {
				transform: scale(1, 1) translateY(0);
			}
			10% {
				transform: scale(1.1, 0.9) translateY(0);
			}
			30% {
				transform: scale(0.9, 1.1) translateY(-10px);
			}
			50% {
				transform: scale(1.05, 0.95) translateY(0);
			}
			57% {
				transform: scale(1, 1) translateY(0px);
			}
			64% {
				transform: scale(1, 1) translateY(0);
			}
			100% {
				transform: scale(1, 1) translateY(0);
			}
		}
	}
	@media (min-width: 720px) and (max-width: 1126px) {
		.div_container {
			.div_buttons {
				margin-left: 8rem;
			}
			.div_switch {
				width: 14%;
				display: flex;
				justify-content: space-around;
				span {
					margin-top: 10px;
				}
			}
		}
	}
	@media screen and (max-width: 719px) {
		overflow: hidden;
		.div_container {
			position: absolute;
			width: 90%;
			.div_buttons {
				margin-left: 0;
				width: 90%;
				display: flex;
				justify-content: space-between;
			}
			.div_switch {
				width: 12%;
				position: relative;
				left: 3%;
				top: 6%;
				span {
					display: none;
				}
			}
		}
	}
`;

export const CheckBoxWrapper = styled.div`
	margin-top: 0.182rem;
	position: relative;
	span {
	}
	@media screen and (max-width: 719px) {
		margin-top: 0;
	}
	@media (min-width: 720px) and (max-width: 1126px) {
		margin-top: 0.6rem;
	}
`;
export const CheckBoxLabel = styled.label`
	position: absolute;
	top: 0;
	left: 0;
	width: 1.909rem;
	height: 1.182rem;
	border-radius: 0.545rem;
	background: #bebebe;
	cursor: pointer;
	&::after {
		content: '';
		display: block;
		border-radius: 50%;
		width: 0.818rem;
		height: 0.818rem;
		margin: 0.136rem;
		background: #ffffff;
		box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
		transition: 0.2s;
	}
`;
export const CheckBox = styled.input`
	opacity: 0;
	z-index: 1;
	border-radius: 0.682rem;
	width: 1.909rem;
	height: 1.182rem;
	&:checked + ${CheckBoxLabel} {
		background: #4fbe79;
		&::after {
			content: '';
			display: block;
			border-radius: 50%;
			width: 0.818rem;
			height: 0.818rem;
			margin-left: 0.955rem;
			transition: 0.2s;
		}
	}
`;

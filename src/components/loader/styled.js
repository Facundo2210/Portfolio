import styled from 'styled-components';
export const StyledContainer = styled.div`
	width: 99vw;
	height: 99vh;
	z-index: 3;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background: #f5f5f5;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	.logo {
		animation: loading 1s 0s 1 cubic-bezier(0, 0, 0.67, 1) forwards;
		opacity: 1;
		transform: scale(1);
	}
	@keyframes loading {
		43% {
			animation-timing-function: cubic-bezier(0.8, 0, 0.2, 1);
			transform: scale(1.8);
		}
		60% {
			animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
			transform: translateY(-16px) scale(1.8);
		}
		77% {
			animation-timing-function: cubic-bezier(0.16, 0, 0.2, 1);
			transform: translateY(0px) scale(1.8);
		}
		89% {
			animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
			transform: translateY(-5px) scale(1.8);
		}
		100% {
			transform: translateY(0px) scale(1.8);
		}
	}
`;

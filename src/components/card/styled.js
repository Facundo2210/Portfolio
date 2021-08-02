import styled from 'styled-components';
export const StyledContainer = styled.div`
	iframe {
		height: 12.909rem;
		width: 20rem;
	}
	a {
		color: ${({theme}) => theme.text};
		text-decoration: none;
	}
	.div_project_title {
		width: fit-content;
		padding-bottom: 0.6rem;
		hr {
			margin-top: 0.1rem;
			background-color: rgba(222, 226, 230, 0.7);
			border: 1px solid rgba(222, 226, 230, 0.7);
		}
		h3 {
			font-size: 1.1rem;
		}
	}
	.div_card {
		width: 20.1rem;
		height: auto;
		border: 1.5px solid ${({theme}) => theme.border};
		display: flex;
		flex-direction: column;
		place-items: center;
		background: ${({theme}) => theme.card};
		border-radius: 0.455rem;
		padding: 0.909rem 0 0.5rem 0;
		box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);
		-webkit-box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);
		-moz-box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);
		margin: 0 2rem 0 0;
		.div_text {
			margin: 0 0 0 0;
			font-size: 0.7rem;
			line-height: 1.5;
			padding: 0 0.5rem 0 0.5rem;
			text-align: center;
			width: 20.1rem;
			height: 4rem;
		}
		.div_icons {
			width: 50%;
			padding-top: 0.7rem;
			display: flex;
			justify-content: space-around;
			.span_icon {
				font-size: 1.1rem;
				&:hover {
					cursor: pointer;
					transform: translateY(-0.1rem);
				}
			}
			span {
				font-size: 0.7rem;
			}
		}
	}
	@media screen and (max-width: 719px) {
		overflow: hidden;
		iframe {
			height: 12.909rem;
			width: 19rem;
		}
		.div_project_title {
			width: fit-content;
			padding-bottom: 0.8rem;
			hr {
				margin-top: 0.1rem;
				background-color: rgba(222, 226, 230, 0.7);
				border: 1px solid rgba(222, 226, 230, 0.7);
			}
			h3 {
				font-size: 1.1rem;
			}
		}
		.div_card {
			margin: 0 0 2rem 0;
			width: 19.2rem;
			height: auto;
			.div_text {
				width: 19rem;
			}
		}
	}
`;

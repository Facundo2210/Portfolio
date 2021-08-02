import styled from 'styled-components';
export const StyledContainer = styled.div`
	width: 99vw;
	height: fit-content;
	display: grid;
	padding-top: 9rem;
	grid-template-areas:
		'title'
		'frontend'
		'backend';
	.title {
		grid-area: title;
		justify-self: start;
		padding-left: 16rem;
		padding-bottom: 3rem;
	}
	.frontend {
		grid-area: frontend;
		justify-self: center;
	}
	.backend {
		grid-area: backend;
		justify-self: center;
	}
	.div_title {
		font-size: 2rem;
	}
	.div_content {
		display: flex;
		flex-direction: column;
		place-self: center;
		font-size: 0.8rem;
		img {
			width: 4rem;
			height: 4rem;
			transition: transform 0.5s;
			&:hover {
				transform: translateY(-10px) scale(1.2);
			}
		}

		.div_skills_title {
			width: fit-content;
			padding-bottom: 1.5rem;
			hr {
				margin-top: 0.1rem;
				background-color: rgba(222, 226, 230, 0.7);
				border: 1px solid rgba(222, 226, 230, 0.7);
			}
			h2 {
				font-size: 1.3rem;
			}
		}
		.div_frontend_container {
			padding-bottom: 2.5rem;
			width: fit-content;
			display: flex;
			flex-direction: column;
			.div_frontend {
				display: flex;
				font-size: 0.7rem;
				div {
					text-align: center;
					padding-left: 3.136rem;
				}
			}
		}
		.div_backend_container {
			width: fit-content;
			height: fit-content;
			display: flex;
			flex-direction: column;
			.div_backend {
				display: flex;
				font-size: 0.7rem;
				div {
					text-align: center;
					padding-left: 3.136rem;
				}
			}
		}
	}
	@media screen and (max-width: 719px) {
		padding-top: 4rem;
		.title {
			grid-area: title;
			padding-left: 0;
			padding-bottom: 0;
		}
		.div_component_open {
			margin-left: 0rem;
			padding-bottom: 3rem;
			padding-left: 0.5rem;
		}
		.div_content {
			height: fit-content;
			width: 90%;
			display: flex;
			flex-direction: row;
			justify-content: center;
			img {
				width: 3.182rem;
				height: 3.182rem;
			}
			.div_skills_title {
				display: flex;
				flex-direction: column;
				text-align: center;
				width: 100%;
				padding-bottom: 1rem;
				hr {
					margin-top: 0.1rem;
					width: 60%;
					margin-left: 1.7rem;
					background-color: rgba(222, 226, 230, 0.7);
					border: 1px solid rgba(222, 226, 230, 0.7);
				}
				h2 {
					font-size: 1.4rem;
				}
			}
			.div_frontend_container {
				padding: 0 1rem;
				.div_frontend {
					display: flex;
					flex-direction: column;
					padding: 0;
					font-size: 0.8rem;
					div {
						padding: 0 0 0.8rem 0;
						text-align: center;
					}
				}
			}
			.div_backend_container {
				padding: 0;
				.div_backend {
					display: flex;
					flex-direction: column;
					padding: 0;
					font-size: 0.8rem;
					div {
						padding: 0 0 0.8rem 0;
						text-align: center;
					}
				}
			}
		}
	}
`;

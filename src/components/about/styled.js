import styled from 'styled-components';
export const StyledContainer = styled.div`
	width: 99vw;
	height: fit-content;
	display: grid;
	padding-top: 4rem;
	grid-template-areas:
		'header header'
		'photo about '
		'photo about';
	.photo {
		grid-area: photo;
		align-self: center;
		justify-self: center;
	}
	.about {
		grid-area: about;
	}
	.header {
		grid-area: header;
	}
	.div_component_open {
		padding-left: 16rem;
	}
	.div_avatar {
		width: fit-content;
		height: fit-content;
		padding-top: 20px;
		.img_avatar {
			border-radius: 15px;
			width: 19.364rem;
		}
		.img_avatar2 {
			display: none;
		}
	}
	.div_about {
		width: 22rem;
		height: fit-content;
		.div_greetings {
			padding-bottom: 2.5rem;
			width: fit-content;
			height: fit-content;
			font-size: 0.9rem;
			hr {
				margin-top: 0.1rem;
				background-color: rgba(222, 226, 230, 0.7);
				border: 1px solid rgba(222, 226, 230, 0.7);
			}
		}
		.div_title {
			padding-bottom: 2.5rem;
			.span_about {
				line-height: 5rem;
				font-weight: 900;
				font-size: 5.5rem;
				.span_title {
					color: #01caf4;
				}
			}
		}
		.div_description {
			width: fit-content;
			font-size: 0.9rem;
			line-height: 1.5;
			.span_mode {
				color: #4188cf;
			}
		}
	}
	@media screen and (max-width: 719px) {
		grid-template-areas:
			'header'
			'photo'
			'about ';
		.div_component_open {
			margin-left: 0rem;
			padding-bottom: 1rem;
			padding-left: 0.5rem;
		}
		.div_avatar {
			.img_avatar {
				display: none;
			}
			.img_avatar2 {
				display: block;
				width: 120px;
				height: auto;
				border-radius: 100%;
			}
		}
		.div_about {
			width: auto;
			height: fit-content;
			.div_greetings {
				text-align: center;
				padding-top: 1rem;
				padding-bottom: 2rem;
				width: 100%;
				height: fit-content;
				font-size: 0.9rem;
				hr {
					background-color: rgba(222, 226, 230, 0.7);
					border: 1px solid rgba(222, 226, 230, 0.7);
					margin-left: 1.5rem;
					width: 80%;
					margin-top: 0.1rem;
				}
			}
			.div_title {
				padding-bottom: 1.6rem;
				padding-left: 0.5rem;
				.span_about {
					line-height: 4rem;
					font-weight: 900;
					font-size: 3.7rem;
					.span_title {
						color: #01caf4;
					}
				}
			}
			.div_description {
				padding-left: 0.8rem;
			}
		}
	}
`;

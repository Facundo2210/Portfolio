import styled from 'styled-components';
export const StyledContainer = styled.div`
	width: 99vw;
	height: fit-content;
	display: grid;
	padding-top: 7rem;
	grid-template-areas:
		'title'
		'content';
	.title {
		grid-area: title;
		justify-self: start;
		padding-left: 16rem;
		padding-bottom: 2.5rem;
	}
	.content {
		grid-area: content;
		justify-self: center;
		padding-bottom: 2rem;
	}
	.div_title {
		font-size: 2rem;
	}
	.tooltip {
		border: 1px solid ${({theme}) => theme.border};
		font-size: 0.67rem;
		visibility: hidden;
		width: 10rem;
		background: ${({theme}) => theme.card};
		color: ${({theme}) => theme.text};
		text-align: center;
		border-radius: 6px;
		padding: 0.5rem 0.3rem 0 0.3rem;
		position: absolute;
		z-index: 1;
		bottom: 115%;
		left: -113%;
		opacity: 0;
		transition: opacity 0.3s;
		box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);
		-webkit-box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);
		-moz-box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);
		img {
			width: 2rem;
			height: auto;
			border-radius: 100%;
		}
		i {
			text-align: center;
			font-size: 1.3rem;
		}
		.arrow {
			font-size: 1rem;
			margin-left: -0.9rem;
			animation: bounce 0.5s infinite alternate ease-in-out;
		}
		a {
			color: ${({theme}) => theme.text};
			text-decoration: none;
		}
		&:after {
			content: '';
			position: absolute;
			top: 100%;
			left: 50%;
			margin-left: -0.5rem;
			border-width: 0.5rem;
			border-style: solid;
			border-color: ${({theme}) => theme.card} transparent transparent
				transparent;
		}
	}
	.div_contact {
		width: 20rem;
		display: flex;
		justify-content: space-between;
		font-size: 3rem;
		color: #1c1c1c;
		.div_icon {
			position: relative;
			transition: all 0.5s;
			&:hover {
				cursor: pointer;
				transform: translateY(-0.5rem);
			}
			.icon_gmail {
				color: #ca372d;
			}
			.icon_linkedin {
				color: ${({theme}) => theme.icon_linkedin};
			}
			.icon_github {
				color: ${({theme}) => theme.text};
			}
			&:hover .tooltip {
				visibility: visible;
				opacity: 1;
			}
		}
	}
	@keyframes bounce {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-0.4rem);
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
		.tooltip {
			border: 1px solid ${({theme}) => theme.border};
			visibility: hidden;
			font-size: 0.7rem;
			background: ${({theme}) => theme.card};
			color: ${({theme}) => theme.text};
			text-align: center;
			border-radius: 6px;
			padding: 0.5rem 0.1rem 0 0.1rem;
			position: absolute;
			z-index: 1;
			bottom: 115%;
			left: -113%;
			opacity: 0;
			transition: opacity 0.3s;
			box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);
			-webkit-box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);
			-moz-box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);
			img {
				width: 2rem;
				height: auto;
				border-radius: 100%;
			}
			i {
				font-size: 1.3rem;
			}
			a {
				color: ${({theme}) => theme.text};
				text-decoration: none;
			}
			&:after {
				content: '';
				position: absolute;
				top: 100%;
				left: 50%;
				margin-left: -0.5rem;
				border-width: 0.5rem;
				border-style: solid;
				border-color: ${({theme}) => theme.card} transparent transparent
					transparent;
			}
		}
		.div_contact {
			width: 12rem;
		}
	}
`;

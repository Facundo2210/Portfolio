import styled from 'styled-components';
export const StyledContainer = styled.div`
	width: 99vw;
	height: fit-content;
	display: grid;
	padding-top: 7rem;
	grid-template-areas:
		'title'
		'project';
	.title {
		grid-area: title;
		justify-self: start;
		padding-left: 16rem;
		padding-bottom: 3rem;
	}
	.project {
		grid-area: project;
		padding-left: 5rem;
		justify-self: center;
	}
	.div_title {
		font-size: 2rem;
	}
	.div_project_container {
		display: flex;
		flex-direction: row;
	}
	@media screen and (max-width: 719px) {
		padding-top: 4rem;
		.title {
			grid-area: title;
			justify-self: start;
			padding-left: 0;
			padding-bottom: 2rem;
		}
		.project {
			grid-area: project;
			padding-left: 0;
			justify-self: center;
		}
		.div_component_open {
			margin-left: 0rem;
			padding-bottom: 2rem;
			padding-left: 0.5rem;
		}
		.div_project_container {
			display: flex;
			flex-direction: column;
		}
	}
`;

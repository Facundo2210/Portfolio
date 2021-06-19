import styled from 'styled-components';
const GridArea = styled.div`
	width: 100%;
	height: fit-content;
	display: grid;

	grid-template-areas:
		'navBar     navBar    navBar'
		'about    about   about'
		'skills   skills   skills'
		'projects   projects   projects'
		'contact     contact      contact'
		'footer footer footer';

	.navBar {
		grid-area: navBar;
	}
	.about {
		grid-area: about;
	}
	.skills {
		grid-area: skills;
	}
	.projects {
		grid-area: projects;
	}
	.contact {
		grid-area: contact;
	}
	.footer {
		grid-area: footer;
	}
`;

export default GridArea;

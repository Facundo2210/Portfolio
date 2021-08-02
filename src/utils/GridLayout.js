import styled from 'styled-components';
const GridLayout = styled.div`
	width: 100%;
	height: fit-content;
	display: grid;
	grid-template-areas:
		'nav     nav    nav'
		'main    main   main'
		'skills   skills   skills'
		'projects   projects   projects'
		'contact     contact      contact'
		'footer footer footer';
	.nav {
		grid-area: nav;
	}
	.main {
		grid-area: main;
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

export default GridLayout;

import React, {useState, useEffect} from 'react';
import GridArea from './grid/GridArea';
import {GlobalStyle} from './grid/GlobalStyled';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import About from './components/About/About';

function App() {
	return (
		<div>
			<GlobalStyle />
			<GridArea>
				<About />
				<NavBar />
				<Footer />
				<Contact />
				<Projects />
				<Skills />
			</GridArea>
		</div>
	);
}

export default App;

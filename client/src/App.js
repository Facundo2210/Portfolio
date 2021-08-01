import React, {useState, useEffect} from 'react';
import GridLayout from './utils/GridLayout';
import {GlobalStyles} from './GlobalStyles';
import storage from 'local-storage-fallback';
import {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from './utils/Themes';
import {getInitialTheme} from './controllers';
import About from './Components/About/About.js';
import Skills from './Components/Skills/Skills.js';
import Projects from './Components/Projects/Projects.js';
import Contact from './Components/Contact/Contact.js';
import Footer from './Components/Footer/Footer.js';
import Nav from './Components/Nav/Nav.js';

function App() {
	const [theme, setTheme] = useState(getInitialTheme);
	const themeToggler = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light');
	};

	useEffect(() => {
		storage.setItem('theme', JSON.stringify(theme));
	}, [theme]);

	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<GridLayout>
				<GlobalStyles />
				<Nav themeToggler={themeToggler} theme={theme} />
				<About />
				<Skills />
				<Projects />
				<Contact />
				<Footer />
			</GridLayout>
		</ThemeProvider>
	);
}

export default App;

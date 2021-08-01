import React, {useState, useEffect} from 'react';
import GridLayout from './utils/GridLayout';
import {GlobalStyles} from './GlobalStyles';
import storage from 'local-storage-fallback';
import {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from './utils/Themes';
import {getInitialTheme} from './controllers';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Nav from './Components/Nav';

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

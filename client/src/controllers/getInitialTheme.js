import storage from 'local-storage-fallback';

const getInitialTheme = () => {
	const savedTheme = storage.getItem('theme');
	return savedTheme ? JSON.parse(savedTheme) : 'light';
};

export default getInitialTheme;

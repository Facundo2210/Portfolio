import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyledContainer} from './styled.js';

const Quote = () => {
	const [Result, SetResult] = useState([]);
	const [Quote, SetQuote] = useState({quote: '', author: ''});

	const getQuotes = async () => {
		let result = await axios.get(
			'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
		);
		SetResult(result.data);
	};

	useEffect(() => {
		getQuotes();
	}, []);

	useEffect(() => {
		getQuote();
	}, [Result]);

	const getRandomQuote = () => {
		if (Result.quotes)
			return Result.quotes[Math.floor(Math.random() * Result.quotes.length)];
	};
	const getQuote = () => {
		let randomQuote = getRandomQuote();
		randomQuote &&
			SetQuote({quote: randomQuote.quote, author: randomQuote.author});
	};

	console.log(Quote.quote);

	return (
		<div className='quote'>
			<StyledContainer>
				<div className='div_quote'>
					<div className='div_text'>
						<span>
							{Quote.quote}
							<div className='div_quote_author'>-{Quote.author}</div>
						</span>
					</div>
				</div>
			</StyledContainer>
		</div>
	);
};
export default Quote;

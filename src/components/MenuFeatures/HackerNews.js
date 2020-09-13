import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LoadingSpinner from './Loading/LoadingSpinner';

const HakerNewsWrapper = styled.div`
	margin: 10px 0;
	width: 100%;
	height: 50%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	z-index: 2;

  h3 {
    font-size: 1.5em;
    display: block;
    width: 100%;
		margin-top: 0;
  }
`;

const News = styled.div`
	flex: 0 0 50%;
	color: #fff;
	font-weight: bold;
	padding: 0 10px;
	margin: 0 0 auto 0;
	text-align: left;

	a {
		text-decoration: none;
		color: inherit;
	}
`;

const NewsParagraph = styled.p`
	font-size: 0.8em;
	display: block;
	text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
	margin: 0;
	padding: 10px 10px;
	min-height: 40px;
`;

const HakerNews = () => {
	const [ hackerNewsData, setHackerNewsData ] = useState();

	useEffect(() => {
		const fetchNews = async () => {
			let newsIdListFetch = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');

			if (newsIdListFetch.ok) {
				let newsIdList = await newsIdListFetch.json();
				let cuttedNewsIdList = newsIdList.slice(0, 8);
				let newsData = await Promise.all(
					cuttedNewsIdList.map(async (newsId) => {
						let news = await fetch(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json`);
						if (news.ok) {
							news = await news.json();
							return news;
						}
						else {
							return {};
						}
					})
        );
        
				setHackerNewsData(newsData);
			}
		};

		fetchNews();
	}, []);

	return (
		<HakerNewsWrapper>
      <h3>Latest Hacker News</h3>
			{hackerNewsData ? (
				hackerNewsData.map((news) => (
					<News key={news.title}>
						<a href={news.url} target="_blank" rel="noopener noreferrer">
							<NewsParagraph>{news.title} (Score {news.score})</NewsParagraph>
						</a>
					</News>
				))
			) : (
				<LoadingSpinner />
			)}
		</HakerNewsWrapper>
	);
};

export default HakerNews;

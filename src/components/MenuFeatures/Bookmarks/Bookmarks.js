import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { bookmarksList } from '../../../utils/bookmarks-data';

const BookmarksWrapper = styled.div`
	margin: 20px 0;
	width: 100%;
	height: 50%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const BookmarkWrapper = styled.div`
	width: 7%;
	margin: 15px;
`;

const Bookmarks = () => {
	const icons = useStaticQuery(graphql`
		query {
			allFile(filter: { relativeDirectory: { eq: "bookmark-icon" } }) {
				edges {
					node {
						id
						base
						childImageSharp {
							fluid {
								aspectRatio
								src
								srcSet
								sizes
							}
						}
					}
				}
			}
		}
	`);

	return (
		<BookmarksWrapper>
			{bookmarksList.map((bookmark) => (
				<BookmarkWrapper key={bookmark.bookmarkUrl}>
					<a href={bookmark.bookmarkUrl} target="_blank" rel="noopener noreferrer">
						{icons.allFile.edges
							.filter(({ node }) => node.base.includes(bookmark.bookmarkName))
							.map(({ node }) => <Img key={bookmark.bookmarkName} fluid={node.childImageSharp.fluid} />)}
					</a>
				</BookmarkWrapper>
			))}
		</BookmarksWrapper>
	);
};

export default Bookmarks;

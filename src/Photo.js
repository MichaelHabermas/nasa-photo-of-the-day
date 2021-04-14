import React from 'react';

export default function Photo(props) {
	const { photoOfTheDay } = props;

	if (!photoOfTheDay) return <h3>Loading...</h3>;

	console.log('B');
	console.log(photoOfTheDay);

	return (
		<>
			<h2>{photoOfTheDay.title}</h2>
			<img src={photoOfTheDay.url} alt={'Astro'} />
			<p>{photoOfTheDay.explanation}</p>
		</>
	);
}

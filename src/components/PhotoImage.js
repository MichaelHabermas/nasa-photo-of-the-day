import React from 'react';

export default function PhotoImage(props) {
	const { photoOfTheDay } = props;

	return (
		<>
			<img src={photoOfTheDay.url} alt={'Astro'} />
		</>
	);
}

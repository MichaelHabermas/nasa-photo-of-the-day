import React from 'react';
import PhotoHeader from './PhotoHeader';
import PhotoImage from './PhotoImage';
import PhotoDetails from './PhotoDetails';

export default function PhotoCard(props) {
	const { photoOfTheDay } = props;

	if (!photoOfTheDay) return <h3>Loading...</h3>;

	return (
		<>
			<PhotoHeader photoOfTheDay={photoOfTheDay} />
			<PhotoImage photoOfTheDay={photoOfTheDay} />
			<PhotoDetails photoOfTheDay={photoOfTheDay} />
		</>
	);
}

import React from 'react';

export default function PhotoDetails({ photoOfTheDay }) {
	return (
		<>
			<p>{photoOfTheDay.explanation}</p>
		</>
	);
}

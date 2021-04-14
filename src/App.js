import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Photo from './Photo.js';

function App() {
	const [photoOfTheDay, setPhotoOfTheDay] = useState({});

	useEffect(() => {
		axios
			.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY') // NOT FINISHED
			.then(res => {
				console.log('C');
				console.log(res);
				// setPhotoOfTheDay(res);
				// setPhotoOfTheDay({ ...res });
				setPhotoOfTheDay(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	if (!photoOfTheDay) return <h3>Loading...</h3>;

	console.log('A');
	console.log(photoOfTheDay);

	return (
		<div className="App">
			<h1>NASA Photo of the Day</h1>
			<Photo photoOfTheDay={photoOfTheDay} />
		</div>
	);
}

export default App;

import React, { useState, useEffect } from 'react';

function LyricForm(props) {
	let [artist, setArtist] = useState('D4L');
	let [title, setTitle] = useState('Laffy Taffy');
	let [url, setUrl] = useState(`https://api.lyrics.ovh/v1/${artist}/${title}`);
	let [lyrics, setLyrics] = useState('');

	const artistChange = (event) => {
		setArtist(event.target.value);
	};

	const titleChange = (event) => {
		setTitle(event.target.value);
	};

	const lyricSubmit = (event) => {
		event.preventDefault();
		setUrl(`https://api.lyrics.ovh/v1/${artist}/${title}`);
	};

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((json) => setLyrics(json.lyrics));
	});

	return (
		<div>
            <h2>Read the Pulitzer Prize winning lyrics of D4L's Laffy Taffy. Or Look up the lyrics to a lesser piece.</h2>

			<form onSubmit={lyricSubmit}>
				<label htmlFor='artist'>Artist: </label>
				<input
					id='artist'
					type='text'
					placeholder='artist'
					onChange={artistChange}
				/>
				<label htmlFor='title'>Title: </label>
				<input
					id='title'
					type='text'
					placeholder='title'
					onChange={titleChange}
				/>
				<button type='submit'>CHANGE IT</button>
			</form>
            <h3>LYRICS:</h3>
			<p className='lyrics'>{lyrics}</p>
		</div>
	);
}

export default LyricForm;

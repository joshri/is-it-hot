import React, { useState, useEffect } from 'react';
import Button from './Button';

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
			.then((json) => {
				setLyrics(json.lyrics);
			})
			.catch(() => {
				props.showError()
			})
	}, [url]);

	return (
		<div className='lyricForm'>
			<h2 className='lyricIntro'>
				Read the Pulitzer Prize winning lyrics of D4L's Laffy Taffy.<br></br>Let
				them wash over you.<br></br>Or look up the lyrics to a lesser piece.
			</h2>
			<h5>source: lyricsovh.docs.apiary.io/#reference</h5>

			<form className='lyricSubmit' onSubmit={lyricSubmit}>
				<label htmlFor='artist'>Artist: </label>
				<input
					id='artist'
					type='text'
					defaultValue='D4L'
					onChange={artistChange}
				/>
				<label htmlFor='title'>Title: </label>
				<input
					id='title'
					type='text'
					defaultValue='Laffy Taffy'
					onChange={titleChange}
				/>
				<Button type='submit'>CHANGE IT!</Button>
			</form>
			<h3>LYRICS:</h3>
			<div className='lyrics'>
				{lyrics.split('\n').map((x) => (
					<p>{x}</p>
				))}
			</div>
		</div>
	);
}

export default LyricForm;
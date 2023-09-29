import { React, useState } from 'react'
import './meme.css'
import memesData from '../../memesData.js'

const Meme = () => {

	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		imgUrl: null,
	});

	const [allMemeImages, setAllMemeImages] = useState(memesData);

	const memesArray = allMemeImages.success
		? memesData.data.memes
		: null;

	const getRandomMeme = () => {
		const rnd = Math.floor(Math.random() * memesArray.length);
		const rndUrl = memesArray[rnd].url

		setMeme(prevMeme => ({
			topText: "",
			bottomText: "",
			imgUrl: rndUrl,
		}));
	}


	return (
		<main className='meme--container'>

			<input className='meme--input' type="text" placeholder='Top Text' />
			<input className='meme--input' type="text" placeholder='Bottom Text' />
			<button
				className='meme--button'
				onClick={() => getRandomMeme()}
			>
				Get a new meme image  🖼
			</button>
			{meme.imgUrl && <img className="meme--image" src={meme.imgUrl} alt="meme" />}
		</main>
	)
}

export default Meme


// "data": {
// 	"memes": [
// 		{
// 			"id": "181913649",
// 			"name": "Drake Hotline Bling",
// 			"url": "https://i.imgflip.com/30b1gx.jpg",
// 			"width": 1200,
// 			"height": 1200,
// 			"box_count": 2
// 		},
import { React, useState, useEffect } from 'react'
import './meme.css'

const Meme = () => {
	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		imgUrl: null,
	});

	const [allMeme, setAllMeme] = useState([]);

	const [formData, setFormData] = useState({
		top: "",
		bottom: "",
	})

	useEffect(() => {
		async function getMemes() {
			const response = await fetch("https://api.imgflip.com/get_memes")
			const data = await response.json()
			setAllMeme(data)
		}
		getMemes()
	}, []);

	const memesArray = allMeme.success
		? allMeme.data.memes
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

	function handleChange(e) {
		const { name, value } = e.target;
		setFormData(prevFormData => ({
			...prevFormData,
			[name]: value
		}))
	}

	return (
		<main className='main--container'>

			<input
				className='meme--input'
				type="text"
				placeholder='Top Text'
				name='top'
				value={formData.top}
				onChange={handleChange} />
			<input
				className='meme--input'
				type="text"
				placeholder='Bottom Text'
				name='bottom'
				value={formData.bottom}
				onChange={handleChange} />
			<button
				className='meme--button'
				onClick={() => getRandomMeme()}
				type='submit'
			>
				Get a new meme image  🖼
			</button>

			{meme.imgUrl &&
				<div className='meme--container'>
					<img className="meme--image" src={meme.imgUrl} alt="meme" />
					<h2 className='meme--text top'>{formData.top}</h2>
					<h2 className='meme--text bottom'>{formData.bottom}</h2>
				</div>
			}

		</main >
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
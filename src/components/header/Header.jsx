import React from 'react'
import './header.css'
import headerLogo from '../../assets/troll-face.svg'

const Header = () => {
	return (
		<header>
			<img src={headerLogo} />
			<h2>Meme Generator</h2>
			<h4>Hehe</h4>
		</header>
	)
}

export default Header
import React from 'react'
import Image from 'next/image'
import HomeIcon from '../../images/HomeIcon.svg'
import GithubLogo from '../../images/GithubLogo.svg'

function Navbar() {
  return (
	<div>
		<div id="Navbar">
			<div><a href="/"><Image src={HomeIcon} alt="Home Icon"/></a></div>
			<div>
				<a href="https://github.com/bannev1/Notes/" target="_blank"><Image src={GithubLogo} alt=""/></a>
			</div>
		</div>
		<div id="navFill"></div>
	</div>
  )
}

export default Navbar

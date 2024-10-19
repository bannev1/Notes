import React from 'react'
import Image from 'next/image'
import HomeIcon from '../../images/HomeIcon.svg'

function Navbar() {
  return (
	<div>
		<div id="Navbar">
			<div><a href="/"><Image src={HomeIcon} alt="Home Icon"/></a></div>
			<div>
				<a href="https://github.com/realhuman101/Notes/" target="_blank"></a>
			</div>
		</div>
		<div id="navFill"></div>
	</div>
  )
}

export default Navbar
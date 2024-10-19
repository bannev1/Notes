import React from 'react'
import { HomeIcon } from '../Icons'

function Navbar() {
  return (
	<div>
		<div id="Navbar">
			<div><a href=""><img src={HomeIcon()}/></a></div>
			<div></div>
		</div>
		<div id="navFill"></div>
	</div>
  )
}

export default Navbar
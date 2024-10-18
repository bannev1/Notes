import React from 'react'
import Markdown from 'react-markdown'

interface Props {
	children: string,
}

function Notes({children}: Props) {
	return (
		<div>
			<Markdown>{children}</Markdown>
		</div>
	)
}

export default Notes
import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface Props {
	children: string,
}

function Notes({children}: Props) {
	return (
		<div>
			<Markdown remarkPlugins={[remarkGfm]}>{children}</Markdown>
		</div>
	)
}

export default Notes
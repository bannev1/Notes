import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface Props {
	children: string,
}

function Notes({children}: Props) {
	return (
		<div className='markdown'>
			<Markdown 
				rehypePlugins={[rehypeRaw]} 
				remarkPlugins={[remarkGfm]}
				components={{
					code({ node, inline, className, children, ...props }: any) {
					  const match = /language-(\w+)/.exec(className || '');
			
					  return !inline && match ? (
						<SyntaxHighlighter style={nightOwl} PreTag="div" language={match[1]} {...props}>
						  {String(children).replace(/\n$/, '')}
						</SyntaxHighlighter>
					  ) : (
						<code className={className} {...props}>
						  {children}
						</code>
					  );
					},
				  }}
			>{children}</Markdown>
		</div>
	)
}

export default Notes
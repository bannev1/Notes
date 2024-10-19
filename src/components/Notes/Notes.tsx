"use client"

import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import CopyCode from './CopyCode'
import { Toaster } from 'react-hot-toast'

interface Props {
	children: string,
}

function Notes({children}: Props) {
	//@ts-expect-error
	const Pre = ({children}) => <pre>
		<CopyCode>{children}</CopyCode>
		{children}
	</pre>

	return (
		<div className='markdown'>
			<Toaster position="bottom-left" reverseOrder={false}/>

			<Markdown 
				rehypePlugins={[rehypeRaw]} 
				remarkPlugins={[remarkGfm]}
				components={{
					//@ts-expect-error
					pre: Pre,
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
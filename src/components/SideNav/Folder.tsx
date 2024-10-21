"use client";

import Link from "next/link";
import { useState } from "react";

interface Props {
	folder: { name: string, path: string[], isDirectory: boolean, children?: any[] },
	padding: number
}

const Folder = ({ folder, padding=0 }: Props) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const paddingWidth = 10;
  
	const toggleFolder = () => {
	  setIsExpanded(!isExpanded);
	};
  
	return (
	  <div style={{ marginLeft: padding }}>
		<button onClick={toggleFolder} style={{ cursor: 'pointer', border: 'none', fontWeight: 700 }}>
		  {isExpanded ? '▼' : '▶'} {folder.name}
		</button>
		{isExpanded && (
			<ul className="sideNavBar" style={{paddingLeft: padding+paddingWidth}}>
			{folder.children ? folder.children.map((child: { name: string, path: string[], isDirectory: boolean, children?: any[] }, index: number) => (
				<li key={index}>
				{child.isDirectory ? (
					<Folder folder={child} padding={padding+paddingWidth} />
				) : (
					<Link href={`/IB/${child.path.join('/')}`}>
					{child.name.replace(/-/g, ' ')} 
				  </Link>
				)}
			  </li>
			)) : false}
		  </ul>
		)}
	  </div>
	);
};

export default Folder
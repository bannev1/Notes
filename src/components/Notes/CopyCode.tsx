import React from 'react'
import CopyIcon from '../../images/CopyIcon.svg'
import Image from 'next/image'
import toast from 'react-hot-toast'

interface Props {
	children: React.ReactElement
}

function CopyCode({ children }: Props) {
    const handleClick = () => {
        navigator.clipboard.writeText(children.props.children);
		toast.success('Copied!')
    }

    return (
        <div className="copyCode">
            <button onClick={handleClick} className="copyIcon"><Image src={CopyIcon} alt="" /></button>
		</div>
    )
}

export default CopyCode
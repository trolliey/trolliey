import React, { useState } from 'react'
import './style.css'

// const src = 'https://images.unsplash.com/photo-1444065381814-865dc9da92c0'

const ZoomImage = ({src}) => {
    const [state, setState] = useState({
        backgroundImage: `url(${src})`,
        backgroundPosition: '0% 0%'
    })
    const handleMouseMove = e => {
        const { left, top, width, height } = e.target.getBoundingClientRect()
        const x = (e.pageX - left) / width * 100
        const y = (e.pageY - top) / height * 100
        setState({ backgroundPosition: `${x}% ${y}%` })
    }
    return (
        <figure onMouseMove={handleMouseMove} style={state}>
            <img src={src} alt="zoom on hiver item" className="w-full h-full object-center object-cover sm:rounded-lg" />
        </figure>
    )
}

export default ZoomImage
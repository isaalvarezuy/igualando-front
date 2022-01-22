import React from 'react'
import Lottie from 'react-lottie';
import animationData from './files/curved-line.json'

const CurvedLineLottie = () => {

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
        },
    };

    return (
        <div>
            <Lottie options={defaultOptions} />
        </div>
    )
}

export default CurvedLineLottie

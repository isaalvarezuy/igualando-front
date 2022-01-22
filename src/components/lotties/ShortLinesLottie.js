import React from 'react'
import Lottie from 'react-lottie';
import animationData from './files/short-lines.json'

const ShortLinesLottie = () => {

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

export default ShortLinesLottie

import React, { useState } from 'react';
import ReactPlayer from 'react-player'

const Video = () => {

    const [sonido, setSonido] = useState(0)
    const toggleSonido = () => {

    }
    return (
        <div className="relative pt-20 md:pt-0">
            <div className="absolute bottom-2 left-2 md:bottom-10 md:left-10 z-40">
                {sonido === 0 ?
                    <svg onClick={() => {

                        setSonido(1)
                    }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                    </svg> :
                    <svg onClick={() => { setSonido(0) }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                }


            </div>
            <div className="md:hidden -mt-20">
                <ReactPlayer playing={true} volume={sonido} height="auto" width="100%" loop={true} url='https://res.cloudinary.com/isita/video/upload/v1642283212/static/video_Vertical_uhrb9z.mp4' />
            </div>
            <div className="hidden md:block">
                <ReactPlayer playing={true} volume={sonido} height="auto" width="100%" loop={true} url='https://res.cloudinary.com/isita/video/upload/v1637525748/static/Untitled_sxpxnt.mp4' />
            </div>

        </div >
    )
}

export default Video

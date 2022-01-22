import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { Player } from "@remotion/player";
import { MyComp } from '../../remotion/MyComp';

const RemotionTest = () => {

    const [tema1, setTema1] = useState("")
    const [tema2, setTema2] = useState("")
    const [tema3, setTema3] = useState("")
    const [dia, setDia] = useState("")
    const [hora, setHora] = useState("")
    const [video, setVideo] = useState("")

    const renderVideo = () => {
        fetch(`http://localhost:8000/?temaUno=${tema1}&temaDos=${tema2}&temaTres=${tema3}&dia=${dia}&hora=${hora}`, {
            method: "GET",
        }).then(response => response.json())
            .then(r => {
                console.log(r)
                setVideo(r.url)
            })
    }

    useEffect(() => {

    }, [])

    return (
        <>
            <ReactPlayer playing={true} volume={0} height="500px" loop={true} url={video} />
            {/*  <Player
                component={MyComp}
                durationInFrames={300}
                compositionWidth={1080}
                compositionHeight={1920}
                fps={30}
                style={{
                    width: 270,
                    height: 480,
                }}
                controls
                inputProps={{
                    nombre,
                }}
            /> */}


            <input type="text" className="bg-orange mx-2" onChange={e => setTema1(e.currentTarget.value)} />
            <input type="text" className="bg-orange mx-2" onChange={e => setTema2(e.currentTarget.value)} />
            <input type="text" className="bg-orange mx-2" onChange={e => setTema3(e.currentTarget.value)} />
            <input type="text" className="bg-orange my-2 mx-2" onChange={e => setDia(e.currentTarget.value)} />
            <input type="text" className="bg-orange my-2 mx-2" onChange={e => setHora(e.currentTarget.value)} />
            <button className="bg-orange mx-2" onClick={renderVideo} >render</button>
        </>
    );



}
export default RemotionTest;
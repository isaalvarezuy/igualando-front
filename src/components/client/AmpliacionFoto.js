import React, { useState, useEffect } from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from 'evergreen-ui'
import Footer from './Footer'
const AmpliacionFoto = (props) => {

    console.log(props)
    let fotoActual = props.fotoActual
    let fotos = props.fotos
    const [posActual, setPosActual] = useState(0)


    /* saber que foto se amplio */
    useEffect(() => {

        for (let i = 0; i < fotos.length; i++) {
            if (fotoActual === fotos[i].source
            ) {
                console.log(i)
                setPosActual(i)
            }
        }
    }, [])

    const cerrar = () => {
        props.cerrarFotoPadre()
    }

    return (
        <div>
            <svg className=" h-6 w-6 z-70 fixed top-4 right-4 text-white stroke-current" onClick={cerrar} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <div className="h-full w-full fixed top-0 z-60 bg-black bg-opacity-80 flex items-center justify-center">

                <ArrowLeftIcon color="white" onClick={() => { (posActual > 0) ? setPosActual(posActual - 1) : setPosActual(fotos.length - 1) }} />
                <img className=" mx-2 md:mx-12 w-9/12 md:w-1/2 " alt="Foto del partido" src={fotos[posActual].source} />
                <ArrowRightIcon color="white" onClick={() => { (posActual !== fotos.length - 1) ? setPosActual(posActual + 1) : setPosActual(0) }} />
            </div>
            <Footer />
        </div>
    )
}

export default AmpliacionFoto

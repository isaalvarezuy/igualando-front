import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Integrante from './Integrante'
import TitleArrowLottie from '../lotties/TitleArrowLottie'
import { Waypoint } from 'react-waypoint'

export const Quienes = (props) => {

    let {usuarios} = props
    const [usuariosMostrar, setUsuariosMostrar] = useState([])
    let [renderLottie, setRenderLottie] = useState(false);

    useEffect(() => {
       setUsuariosMostrar(usuarios.filter(usuario=>usuario.visible===true))
    }, [usuarios])


    return (
        <div className="w-full md:w-10/12 mx-auto md:py-8 ">
            <div className="grid grid-cols-1  p-4 md:grid-cols-12 md:p-0 ">
                <div className="self-center col-span-1 md:col-span-6">


                    <h2 className="py-4 md:p-0 font-title text-5.5xl lg:text-hero relative">¿Quiénes somos?
                  
                        <div className="absolute bottom-6 md:bottom-2 lg:bottom-6 right-8 lg:left-96" style={{ width: '118px' }}> {renderLottie && <TitleArrowLottie />}</div>
                        
                    </h2>
                </div>
                <div className="self-center col-span-1 md:col-span-12 lg:col-start-5 lg:col-span-7">

                    <p className="font-body text-base mb-4 ">
                        Igualando la Cancha nace de la iniciativa de cinco estudiantes de Comunicación con el fin de <b>lograr una mayor difusión del deporte femenino a través del periodismo.</b>
                        Somos el primer medio dedicado 100% a los deportes femeninos: incluyendo basketball, futbol, handball, volleyball, hockey y rugby.

                        </p>
                    <Waypoint onEnter={() => setRenderLottie(true)} />
                </div>
                <div className="col-span-1 flex-wrap md:col-span-12 flex flex-col md:flex-row md:justify-around">
                    {usuariosMostrar.map(usuario => <Integrante key={usuario.avatar} usuario={usuario} />)}
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({
    usuarios: state.usuarios
})

export default connect(mapStateToProps)(Quienes)

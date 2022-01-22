import React, { useState } from 'react'
import { connect } from 'react-redux'
import CambiarContrasena from '../admin/CambiarContrasena'

export const Avatar = (props) => {

    let { usuarioLogueado } = props
    const [showDropdown, setShowDropdown] = useState(false)
    const [popupCambiar, setPopupCambiar] = useState(false)

    const cerrarSesion = () => {
        props.dispatch({ type: "CERRAR_SESION" });
    }


    return (
        <div className="pl-8  relative " >
            <div className="flex items-center cursor-pointer " onClick={() => { setShowDropdown(!showDropdown) }}>
                <div className="bg-orange w-12 h-12 rounded-3xl" style={{ background: `url(${usuarioLogueado.avatar}) center center /cover`, backgroundSize: '50px 50px' }}>

                </div>
                <div className="m-0 px-2 w-auto">
                    <p className="text-base font-body opacity-70 w-auto inline whitespace-nowrap">{usuarioLogueado.nombreCompleto}</p>
                    {/*   <p className="text-sm font-body opacity-70">{usuarioLogueado.rol}</p> */}
                </div>
                <button className="group"  > <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                </button>
            </div>
            {showDropdown ?
                <div className="absolute w-48 top-12 bg-white right-0 py-2 px-4 rounded-md shadow text-right">
                    <p className="text-base font-body text-black pb-2 hover:text-opacity-80" onClick={() => setPopupCambiar(true)}>Cambiar contraseña</p>
                    <p className="text-base font-body text-red-500 pb-2 hover:text-opacity-80" onClick={cerrarSesion} >Cerrar sesión</p>
                </div>
                :
                null

            }
            {popupCambiar ?
                <CambiarContrasena funcionPopup={setPopupCambiar} funcionDropdown={setShowDropdown} />
                : null

            }


        </div>
    )
}

const mapStateToProps = (state) => ({
    usuarioLogueado: state.usuarioLogueado
})


export default connect(mapStateToProps)(Avatar)

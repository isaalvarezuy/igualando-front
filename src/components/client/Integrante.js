import React from 'react'


const Integrante = (props) => {
    let usuario = props.usuario;
    return (
        <div key={usuario._id} className="flex flex-col justify-center py-4 md:py-8 lg:pb-24">
            <div style={{ borderRadius: '100%', width: "169px", height: "169px", background: `url(${usuario.avatar}) center center/cover`, backgroundSize: '171px 171px' }} className="mx-auto"></div>
            <p className="font-body text-center font-semibold text-2xl">{usuario.nombreCompleto}</p>
            <p className="font-body text-center text-base">{usuario.rol}</p>
            <p className="font-body text-center italic">{usuario.apodo}</p>
        </div >
    )
}


export default (Integrante)

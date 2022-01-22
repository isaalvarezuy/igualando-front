import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = (props) => {

    let paginaSeleccionada;
    useEffect(() => {
        if (props.paginaSeleccionada === undefined) {
            paginaSeleccionada = "nuevoPosteo"
        } else {
            paginaSeleccionada = props.paginaSeleccionada
        }

        let links = document.getElementsByClassName("navlink");

        for (let i = 0; i < links.length; i++) {
            links[i].classList.remove("bg-black-900");
            links[i].classList.remove("text-white");
            links[i].classList.add("text-black-600");

        }
        let elegido = document.getElementById(paginaSeleccionada);
        elegido.classList.add("bg-black-900")
        elegido.classList.remove("text-black-600")
        elegido.classList.add("text-white")


    }, [props.paginaSeleccionada])

    return (
        <div className="h-full bg-black pt-32 flex flex-col px-4">
            <NavLink id="nuevoPosteo" className="navlink text-white font-regular font-body hover:opacity-70 transition-all  rounded-md mx-4 my-2 px-4  pr-10 py-2 flex" to={{ pathname: "/admin", aboutProps: "nuevoPosteo" }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>Nuevo Posteo</NavLink>
            <NavLink id="nuestraGaleria" className="navlink  text-white font-regular font-body hover:opacity-70 transition-all rounded-md mx-4 my-2 px-4  pr-10 py-2 flex" to={{ pathname: "/admin", aboutProps: "nuestraGaleria" }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>Nuestra Galería</NavLink>
            <NavLink id="editarDatos" className="navlink  text-white font-regular font-body hover:opacity-70 transition-all flex rounded-md mx-4 my-2 px-4 pr-10  py-2" to={{ pathname: "/admin", aboutProps: "editarDatos" }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>Editar Datos</NavLink>
            <NavLink id="nuevaStory" className="navlink  text-white font-regular font-body hover:opacity-70 transition-all rounded-md mx-4 my-2 px-4  pr-10 py-2 flex" to={{ pathname: "/admin", aboutProps: "nuevaStory" }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>Nueva Story</NavLink>
            <NavLink id="gestionarUsuarios" className="navlink  text-white font-regular font-body hover:opacity-70 transition-all rounded-md mx-4 my-2 px-4 pr-10  py-2 flex" to={{ pathname: "/admin", aboutProps: "gestionarUsuarios" }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>  Usuarios</NavLink>
            <NavLink to={{ pathname: "/" }} className="bg-orange py-3 rounded-3xl text-white text-center m-2 mt-8 text-base">Ir al sitio</NavLink>
        </div>
    )
}

export default (Sidebar)

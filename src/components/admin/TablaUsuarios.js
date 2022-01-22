import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import BtnMostrar from './BtnMostrar'
import BtnOcultar from './BtnOcultar'

const TablaUsuarios = (props) => {

    let { url, usuarios } = props

    console.log(usuarios)



    const mostrarUsuario = (recibido) => {
        console.log(recibido)
        let usuarioModificar = { _id: recibido }
        fetch(`${url}/mostrarUsuario`, {
            method: "PUT",
            body: JSON.stringify(usuarioModificar),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json()).then(r => {
            console.log(r)
            props.dispatch({ type: "MOSTRAR_USUARIO", payload: r });
        }
        )

    }

    const ocultarUsuario = (recibido) => {
        console.log(recibido)
        let usuarioModificar = { _id: recibido }
        fetch(`${url}/ocultarUsuario`, {
            method: "PUT",
            body: JSON.stringify(usuarioModificar),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json()).then(r => {
            console.log(r)
            props.dispatch({ type: "OCULTAR_USUARIO", payload: r });
        }
        )

    }


    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="w-full py-2 align-middle inline-block  sm:px-6 lg:px-8">
                    <div className="w-full shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className=" table-auto break-words w-full divide-y divide-black-50">
                            <thead className="bg-white w-full">
                                <tr className="w-full">
                                    <th scope="col" className="text-xs px-6 py-3 text-left  font-body font-semibold text-black uppercase tracking-wider w-full"   >
                                        Nombre  </th>
                                    <th scope="col"
                                        className="hidden md:table-cell text-xs px-6 py-3 text-center  font-body  font-semibold text-black uppercase tracking-wider w-full  " >
                                        Rol  </th>
                                    <th scope="col" className="text-xs px-6 py-3 text-center  font-body  font-semibold text-black uppercase tracking-wider w-full "  >
                                        Acciones     </th>

                                </tr>
                            </thead>
                            <tbody className="w-full bg-white ">
                                {usuarios.map((usuario) =>
                                    <tr key={usuario._id} className="border-b border-black-50" >

                                        <td className="px-6 py-4 text-sm font-medium text-black text-opacity-70 w-auto flex items-center">   <div style={{ width: '30px', height: '30px', borderRadius: '100%', background: `url(${usuario.avatar}) center center`, backgroundSize: '32px 32px', marginRight: '4px' }}  ></div>{usuario.nombreCompleto}</td>
                                        <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center overflow-hidden ">{usuario.rol}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 text-center  overflow-hidden flex items-center justify-center">
                                            <button className="group flex items-center" onClick={(e) => { props.abrirPopup(e) }} data-accion="borrar" data-id={usuario._id} data-nombre={usuario.nombreCompleto}><svg style={{ pointerEvents: "none" }} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black mx-auto text-opacity-60 group-hover:text-opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg> <span style={{ pointerEvents: "none" }} className="hidden md:inline  text-sm ml-2"> Eliminar </span>
                                            </button>
                                            {usuario.visible === true ? <BtnOcultar funcion={ocultarUsuario} usuario={usuario} /> : <BtnMostrar funcion={mostrarUsuario} usuario={usuario} />}


                                        </td>

                                    </tr>
                                )}
                                <tr>
                                    <td style={{ cursor: 'pointer' }} onClick={(e) => { props.setPopupRegistro(true) }} className="px-10 py-4 whitespace-nowrap text-base font-regular text-orange text-opacity-100 hover:text-opacity-80  overflow-hidden flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ pointerEvents: "none" }} className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg> Agregar usuario</td>
                                    <td></td>
                                    <td></td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}

const mapStateToProps = (state) => ({
    usuarios: state.usuarios,
    url: state.url
})



export default connect(mapStateToProps)(TablaUsuarios)

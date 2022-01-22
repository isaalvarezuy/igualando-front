import React from 'react'
import { NavLink } from 'react-router-dom'

const Tabla = (props) => {

    let albums = props.albums

    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="w-full py-2 align-middle inline-block  sm:px-6 lg:px-8">
                    <div className="w-full shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className=" table-fixed break-words w-full divide-y divide-black-50">
                            <thead className="bg-white w-full">
                                <tr className="w-full">
                                    <th scope="col" className="text-xs px-6 py-3 text-left  font-body font-semibold text-black uppercase tracking-wider w-2/3 md:w-1/2"   >
                                        Título  </th>
                                    <th scope="col"
                                        className="hidden md:table-cell text-xs px-6 py-3 text-center  font-body  font-semibold text-black uppercase tracking-wider  md:w-1/4" >
                                        Fotos   </th>
                                    <th scope="col" className="text-xs px-6 py-3 text-center  font-body  font-semibold text-black uppercase tracking-wider w-1/3 md:w-1/4"  >
                                        Acciones     </th>

                                </tr>
                            </thead>
                            <tbody className="w-full bg-white">
                                {albums.map((album) =>
                                    <tr key={album._id} className="border-b border-black-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black text-opacity-70 hover:text-opacity-90  overflow-hidden"><NavLink to={{ pathname: '/ampliacion', aboutProps: { album: album } }}>{album.titulo}</NavLink></td>
                                        <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center overflow-hidden ">{album.fotos.length}</td>
                                        <td className="px-6 py-4  text-sm text-gray-500 text-center  ">
                                            <button className="group flex items-center justify-center mx-auto" onClick={(e) => { props.abrirPopup(e) }} data-id={album._id} data-titulo={album.titulo}><svg style={{ pointerEvents: "none" }} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black mx-auto text-opacity-60 group-hover:text-opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg><span style={{ pointerEvents: "none" }} className="hidden md:inline text-sm ml-2 text-black text-opacity-70 group-hover:text-opacity-100"> Eliminar </span>
                                            </button> </td>

                                    </tr>
                                )}
                                <tr>
                                    <td style={{ cursor: 'pointer' }} onClick={(e) => { props.setPopupAlbum(true) }} className="px-10 py-4 whitespace-nowrap text-base font-regular text-orange text-opacity-100 hover:text-opacity-80  overflow-hidden flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ pointerEvents: "none" }} className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg> Agregar album</td>
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



export default (Tabla)


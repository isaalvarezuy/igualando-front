import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

export const EditarUsuario = (props) => {

    let { idEditar, usuarios } = props;

    const [usuario, setUsuario] = useState([])

    useEffect(() => {
        let aux
        console.log(idEditar)
        console.log(usuarios)
        if (idEditar !== "") {
            aux = usuarios.filter(usuario => usuario._id === idEditar)
        }
        setUsuario(aux)

    }, [idEditar])

    return (
        <div className=" fixed h-full w-full flex items-center jusitfy-center z-50 bg-black bg-opacity-20">
            <div className="w-auto mx-auto bg-white text-black  top-20  rounded-md shadow-md p-8 ">
                <div className="">{usuario !== undefined ?
                    < div className=" flex flex-col items-center">
                        <h2 className="font-body font-semibold text-xl mb-4">Editar usuario</h2>
                        <img src={usuario[0].avatar} style={{ height: '200px', width: '200px' }} />
                        <p className="m-0 p-0 font-body font-semibold text-lg mt-4">{usuario[0].nombreCompleto}</p>
                        <p className=" m-0 p-0 text-sm font-normal text-opacity-70">@{usuario[0].user}</p>
                    </div> : null}
                </div>

                <p className="opacity-70 text-base">Estas por borrar  <span className="font-semibold">"{props.nombreBorrar}"</span>¿Deseas continuar?</p>
                <div className="flex flex-row justify-between mt-4">
                    <button className="mx-1 flex-1 text-center block md:inline-block bg-white border border-orange py-3 px-8 rounded-3xl text-orange text-base hover:border-orangelight hover:text-orangelight transition-all" onClick={props.cerrarPopup}>Cancelar</button>
                    <button className=" mx-1 flex-1 text-center block md:inline-block bg-orange py-3 px-8 rounded-3xl text-white text-base hover:bg-orangelight transition-all" onClick={(e) => { props.borrarAlbum(e) }} data-id={props.idBorrar}>Borrar</button>
                </div>
            </div>
        </div >
    )
}

const mapStateToProps = (state) => ({
    usuarios: state.usuarios
})

export default connect(mapStateToProps)(EditarUsuario)

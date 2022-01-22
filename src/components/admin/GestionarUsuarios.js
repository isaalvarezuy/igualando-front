import React, { useState } from 'react'
import { connect } from 'react-redux'
import Registro from './Registro'
import TablaUsuarios from './TablaUsuarios'
import Popup from './posteos/Popup'
import Alerta from './Alerta'

export const GestionarUsuarios = (props) => {

    let { url } = props;

    const [mensaje, setMensaje] = useState("")
    const [tipoMensaje, setTipoMensaje] = useState("")
    const [popup, setPopup] = useState(false)
    const [popupRegistro, setPopupRegistro] = useState(false)
    const [visible, setVisible] = useState("")
    const [idBorrar, setIdBorrar] = useState("")
    const [nombreBorrar, setNombreBorrar] = useState("")




    const borrarUsuario = (recibido) => {
        let idBorrar = recibido.target.dataset.id;
        fetch(`${url}/eliminarUsuario`, {
            method: "DELETE",
            body: JSON.stringify({ idBorrar: idBorrar }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json())
            .then(usuario => {
                /* console.log(usuario); */
                props.dispatch({ type: "ELIMINAR_USUARIO", payload: usuario });
                cerrarPopup();
                setMensaje("Usuario eliminado con éxito")
                setTipoMensaje("exito")
                setVisible(1)

            })
    }

    const abrirPopup = (recibido) => {
        /*   console.log(recibido.target.dataset) */
        setIdBorrar(recibido.target.dataset.id)
        setNombreBorrar(recibido.target.dataset.nombre)
        setPopup(true)


    }

    const cerrarPopup = () => {
        setPopup(false)
    }

    const cerrarPopupRegistro = () => {
        setPopupRegistro(false)
    }



    return (
        <div>

            {(popup !== false) ?
                < Popup className={`${popup}`} borrarAlbum={borrarUsuario} idBorrar={idBorrar} nombreBorrar={nombreBorrar} cerrarPopup={cerrarPopup} />
                : ""}

            {(popupRegistro !== false) ?
                < Registro cerrarPopupRegistro={cerrarPopupRegistro} />
                : ""}



            <div className="w-full p-4  md:p-0 md:w-10/12 mx-auto pt-24 md:pt-32 w-10/12 mx-auto ">
                <div className="grid grid-cols-1  gap-12">

                    <div className="col-span-1">
                        <h2 className="font-body font-semibold text-2xl mb-2" >Usuarios</h2>



                        <TablaUsuarios abrirPopup={abrirPopup} setPopupRegistro={setPopupRegistro} />
                        {/*    <button className=" mt-4 w-full md:w-auto  bg-orange py-2 px-4 rounded-3xl text-white text-base" onClick={() => setPopupRegistro(true)}>Agregar usuario </button> */}

                    </div>

                </div>
            </div>
            <Alerta tipo={tipoMensaje} mensaje={mensaje} visible={visible} funcion={setVisible} duracion={2000} />
        </div >
    )
}

const mapStateToProps = (state) => ({
    url: state.url
})


export default connect(mapStateToProps)(GestionarUsuarios)

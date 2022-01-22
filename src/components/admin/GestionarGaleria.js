import React, { useState } from 'react'
import { connect } from 'react-redux'
import Tabla from './Tabla'
import Popup from './posteos/Popup'
import Alerta from './Alerta'
import SubirAlbum from './SubirAlbum'

const GestionarGaleria = (props) => {

    let { albums, url } = props;

    const [popupAlbum, setPopupAlbum] = useState(false)

    const [popup, setPopup] = useState(false)
    const [albumElegidoId, setAlbumElegidoId] = useState("")
    const [albumElegidoNombre, setAlbumElegidoNombre] = useState("")

    const [visible, setVisible] = useState(0)
    const [tipoMensaje, setTipoMensaje] = useState(0)
    const [mensaje, setMensaje] = useState("")

    const abrirPopup = (recibido) => {
        console.log(recibido.target.dataset)
        setAlbumElegidoId(recibido.target.dataset.id)
        setAlbumElegidoNombre(recibido.target.dataset.titulo)
        setPopup(true)
    }

    const cerrarPopup = () => {
        setPopup(false)
    }

    const borrarAlbum = (recibido) => {
        let idBorrar = recibido.target.dataset.id;
        fetch(`${url}/eliminarAlbum`, {
            method: "DELETE",
            body: JSON.stringify({ idBorrar: idBorrar }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json())
            .then(album => {
                console.log(album);
                props.dispatch({ type: "ELIMINAR_ALBUM", payload: album });
                cerrarPopup();
                setMensaje("Album eliminado con éxito")
                setTipoMensaje("exito")
                setVisible(1)

            })
    }


    return (
        <div>
            {(popupAlbum !== false) ?
                <SubirAlbum setPopupAlbum={setPopupAlbum} setMensaje={setMensaje} setTipoMensaje={setTipoMensaje} setVisible={setVisible} /> : null
            }
            {(popup !== false) ?
                < Popup className={`${popup}`} borrarAlbum={borrarAlbum} idBorrar={albumElegidoId} nombreBorrar={albumElegidoNombre} cerrarPopup={cerrarPopup} />
                : ""}
            <div className="w-full p-4  md:p-0 md:w-10/12 mx-auto pt-32 md:pt-32 w-10/12 mx-auto ">
                <div className="grid grid-cols-1  gap-12">

                    <div className="col-span-1">
                        <h2 className="font-body font-semibold text-2xl mb-2" >Álbumes</h2>



                        <Tabla abrirPopup={abrirPopup} albums={albums} setPopupAlbum={setPopupAlbum} />
                        {/*    <button className=" mt-4 w-full md:w-auto  bg-orange py-2 px-4 rounded-3xl text-white text-base" onClick={() => setPopupRegistro(true)}>Agregar usuario </button> */}

                    </div>

                </div>
            </div>
            <Alerta tipo={tipoMensaje} mensaje={mensaje} visible={visible} funcion={setVisible} duracion={2000} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    albums: state.albums,
    url: state.url,
    deportes: state.deportes
})


export default connect(mapStateToProps)(GestionarGaleria)

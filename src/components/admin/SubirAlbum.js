import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import Axios from 'axios'
import Input from '../formComponents/Input'

const SubirAlbum = (props) => {

    useEffect(() => {
        setDeporte(deportes[0].id)
    }, [])


    let { albums, deportes, url } = props;
    const [selectedFile, setSelectedFile] = useState([]);
    const [titulo, setTitulo] = useState("");
    const [deporte, setDeporte] = useState("");
    const [fecha, setFecha] = useState("");


    useEffect(() => {
        if (titulo !== "" && deporte !== "" && fecha !== "" && selectedFile !== "") {
            document.getElementById("btn-upload").disabled = false;
            document.getElementById("btn-upload").style.opacity = "1";
        } else {
            document.getElementById("btn-upload").disabled = true;
            document.getElementById("btn-upload").style.opacity = "0.7";
        }
    }, [titulo, deporte, fecha, selectedFile])


    const guardarFecha = (e) => {
        console.log(e)
        let aux = new Date(`${e} GMT-3`);
        setFecha(aux);
    }


    const crearAlbum = async () => {
        console.log(selectedFile)
        const fotos = await uploadImages()
        console.log(fotos)

        let nuevoAlbum = {
            titulo: titulo,
            deporte: deporte,
            fecha: fecha,
            fotos: fotos
        }


        fetch(`${url}/crearAlbum`, {
            method: "POST",
            body: JSON.stringify(nuevoAlbum),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json())
            .then(r => {
                console.log(r);
                props.dispatch({ type: "AGREGAR_ALBUM", payload: r });
                props.setMensaje("Álbum subido con éxito")
                props.setTipoMensaje("exito")
                props.setVisible(1)
                props.setPopupAlbum(false)

            })

    }


    const uploadImages = () => {
        props.setMensaje("Subiendo fotos...")
        props.setTipoMensaje("loading")
        props.setVisible(1)
        const fotos = selectedFile.map(file => {
            const formData = new FormData()
            formData.append("file", file);
            formData.append("upload_preset", "igualando")
            return Axios.post(
                "https://api.cloudinary.com/v1_1/isita/image/upload",
                formData
            ).then((r) => {
                console.log(r)
                let foto = { source: r.data.url }
                return foto
            });
        });

        return Promise.all(fotos);
    }


    return (
        <div className="left-0 top-0 fixed h-full w-full flex items-center justify-center bg-black bg-opacity-60 " style={{ zIndex: 999999 }}>
            <div className="w-11/12 md:w-8/12 bg-black-50 p-6 md:py-8 md:px-12 rounded-xl ">
                <div className="w-full flex justify-end"><button className="group" onClick={(e) => { props.setPopupAlbum(false) }} >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                </div>
                <h2 className="font-body font-semibold text-2xl mb-2" >Subir album</h2>
                <Input type={"text"} label={"Título"} funcion={setTitulo} />


                <Input type={"select"} opciones={deportes} funcion={setDeporte} label={"Deporte"} />

                <Input type={"date"} label={"Fecha"} funcion={guardarFecha} />

                <Input type={"multiple files"} label={"Subir fotos"} funcion={setSelectedFile} />

                <button id="btn-upload" className="btn w-full md:w-auto block bg-orange py-2 px-4 rounded-3xl text-white text-base mt-4 " onClick={crearAlbum}>Subir Album</button>


            </div>
        </div >
    )
}
const mapStateToProps = (state) => ({
    albums: state.albums,
    deportes: state.deportes,
    url: state.url

})


export default connect(mapStateToProps)(SubirAlbum)
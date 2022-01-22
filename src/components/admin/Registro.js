import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Input from '../formComponents/Input'
import { removeBackgroundFromImageUrl } from "remove.bg";
import Axios from 'axios'
import domtoimage from 'dom-to-image';
import Alerta from './Alerta'

export const Registro = (props) => {
    let { url, fondos } = props


    const [mensaje, setMensaje] = useState("")
    const [tipoMensaje, setTipoMensaje] = useState("")
    const [visible, setVisible] = useState("")


    const [user, setUser] = useState("")
    const [nombreCompleto, setNombreCompleto] = useState("")
    const [rol, setRol] = useState("")
    const [apodo, setApodo] = useState("")
    const [fondo, setFondo] = useState("")
    const [base64img, setBase64img] = useState("")
    const [avatar, setAvatar] = useState("")

    useEffect(() => {
        console.log(avatar)

        if (user !== "" && nombreCompleto !== "" && rol !== "" && apodo !== "" && fondo !== "" && avatar !== "") {
            document.getElementById("btn-create").disabled = false;
            document.getElementById("btn-create").style.opacity = "1";
        } else {
            document.getElementById("btn-create").disabled = true;
            document.getElementById("btn-create").style.opacity = "0.7";
        }
    }, [user, nombreCompleto, rol, apodo, fondo, avatar])

    const crearUsuario = () => {

        setMensaje("Creando usuario...")
        setTipoMensaje("loading")
        setVisible(1)

        let userNuevo = {
            user: user,
            pass: "igualando",
            nombreCompleto: nombreCompleto,
            rol: rol,
            apodo: apodo,
            avatar: avatar
        }

        fetch(`${url}/insertar`, {
            method: "POST",
            body: JSON.stringify(userNuevo),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json())
            .then(resp => {
                console.log(resp);
                setMensaje("Usuario creado con éxito")
                setTipoMensaje("exito")
                setVisible(1)
                props.dispatch({ type: "AGREGAR_USUARIO", payload: resp });
                props.cerrarPopupRegistro();
            })

    }

    let subirFoto = (recibido) => {

        setVisible(1);
        setTipoMensaje("loading")
        setMensaje("Eliminando fondo de imagen")
        const file = recibido.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "fotosIntegrantes")

        Axios.post("https://api.cloudinary.com/v1_1/isita/image/upload", formData).then((r) => {
            console.log(r.data.url)
            borrarFondo(r.data.url)
        })
    }

    const borrarFondo = (imgUrl) => {
        return new Promise((resolve, reject) => {

            const url = imgUrl;
            removeBackgroundFromImageUrl({
                url,
                apiKey: "mPe1FAdtq8DKnhFnHgDT8VBi",
                size: "regular",
                type: "person",
            }).then((result) => {
                setBase64img(result.base64img)
                domtoimage.toJpeg(document.getElementById('avatar'), { quality: 0.95 })
                    .then(function (dataUrl) {
                        console.log(dataUrl)

                        /*2. subir a cloudinary */
                        const formData = new FormData();
                        formData.append("file", dataUrl);
                        formData.append("upload_preset", "fotosIntegrantes")
                        Axios.post("https://api.cloudinary.com/v1_1/isita/image/upload", formData).then((r) => {
                            console.log(r.data.url)
                            setAvatar(r.data.url)
                            setMensaje("Avatar creado")
                            setTipoMensaje("exito")
                            setVisible(1)
                        })
                    })


            }).catch((err) => {
                console.log(JSON.stringify(err));
                setMensaje("Hubo un error")
                setTipoMensaje("error")
                setVisible(1)
            });
        })

    }

    return (
        <div className=" left-0 fixed min-h-full w-full flex items-center jusitfy-center bg-black bg-opacity-60 " style={{ zIndex: '99999' }}>
            <div className="w-11/12 md:w-8/12 mx-auto bg-black-50 p-12 pt-6 h-auto rounded-xl">
                <div className="w-full flex justify-end"><button className="group" onClick={(e) => { props.cerrarPopupRegistro() }} >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                </div>
                <div className="grid-cols-1 grid lg:grid-cols-2">
                    <div className="grid-colspan-1">
                        <Alerta tipo={tipoMensaje} mensaje={mensaje} visible={visible} funcion={setVisible} duracion={3000} />
                        <h2 className="font-body font-semibold text-2xl mb-2" >Agregar Usuario</h2>
                        <Input type={"text"} label={"Nombre de Usuario"} funcion={setUser} />
                        <Input type={"text"} label={"Nombre Completo"} funcion={setNombreCompleto} />
                        <Input type={"text"} label={"Rol"} funcion={setRol} />
                        <Input type={"text"} label={"Apodo"} funcion={setApodo} />

                        <p className="font-body text-md">Elegí un fondo para el avatar</p>
                        <div className="flex flex-wrap mb-4">

                            {fondos.map(fondo => <img className="imgFondo h-14 w-14 m-2 md:h-20 md:w-20" onClick={(e) => {
                                let imagenes = document.getElementsByClassName("imgFondo");
                                for (let i = 0; i < imagenes.length; i++) {
                                    imagenes[i].classList.remove("border-orange");
                                    imagenes[i].classList.remove("border-2");
                                }
                                e.target.classList.add("border-orange")
                                e.target.classList.add("border-2")
                                setFondo(e.target.src)
                            }} style={{ borderRadius: '100%' }} key={fondo.id} data-id={fondo.id} src={fondo.src} />)}
                        </div>
                        <Input type={"file"} label={"Foto del Avatar"} funcion={subirFoto} />
                        <button className=" w-full md:w-auto  bg-orange py-2 px-4 rounded-3xl text-white text-base" id="btn-create" onClick={crearUsuario}>Crear usuario </button>
                    </div>

                    <div className="hidden lg:block lg:grid-colspan-1 pl-24">
                        <div id="avatar" style={{ width: '300px', height: '300px', borderRadius: '100%', background: `url(${fondo}) center center /cover` }}>
                            <div style={{ width: '300px', height: '300px', borderRadius: '100%', background: `url(data:image/png;base64,${base64img}) center center/contain no-repeat` }}></div>
                        </div></div>
                </div>
            </div>
        </div >

    )
}

const mapStateToProps = (state) => ({
    url: state.url,
    fondos: state.fondos,
    fotoSinFondo: state.fotoSinFondo

})


export default connect(mapStateToProps)(Registro)

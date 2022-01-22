import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Input from '../../../formComponents/Input'
import Switch from '../../../formComponents/Switch'


const Noticias = (props) => {

    let foto = "";
    let titulo = "";
    let darkMode = false;

    useEffect(() => {
        let last = document.getElementsByClassName("last")
        props.setAlturaForm(last[0].offsetTop)
    }, [])

    const [fotoSubida, setFotoSubida] = useState("")

    let guardarDatos = (foto, titulo, darkMode) => {
        props.dispatch({
            type: "NOTICIAS", payload: { "foto": foto, "titulo": titulo, "darkMode": darkMode }
        });
    }
    let guardarFoto = (recibido) => {
        const file = recibido.target.files[0];
        if (file !== undefined) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                foto = reader.result
                console.log(foto);
                guardarDatos(foto, titulo, darkMode);
            }

        }

    }

    let guardarTitulo = (recibido) => {
        console.log(recibido)
        titulo = recibido;
        guardarDatos(foto, titulo, darkMode);

    }

    let guardarDarkMode = (recibido) => {
        console.log(recibido)
        darkMode = recibido;
        guardarDatos(foto, titulo, darkMode);
    }

    return (

        <div>
            <Switch funcion={guardarDarkMode} />
            <Input label={"Titulo de la Noticia"} funcion={guardarTitulo} type={"text"} />
            <Input label={"Foto de la noticia"} funcion={guardarFoto} type={"file"} />
            <div className="last"></div>
        </div>
    )
}

const mapStateToProps = (state) => ({

})


export default connect(mapStateToProps)(Noticias)
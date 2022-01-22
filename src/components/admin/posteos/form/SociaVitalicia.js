import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Input from '../../../formComponents/Input'
import Switch from '../../../formComponents/Switch'


const SociaVitalicia = (props) => {

    useEffect(() => {
        var x = window.matchMedia("(min-width: 1024px)")
        if (x.matches) {
            let last = document.getElementsByClassName("last")
            props.setAlturaForm(last[0].offsetTop)
            console.log("entro a socia")
        }


    }, [])

    let fondo = "";
    let main = "";
    let nombre = "";
    let spCode = "";
    let profesion = "";
    let fecha = "";
    let frase = "";
    let darkMode = false;

    const [fotoFondoSubida, setFotoFondoSubida] = useState("")
    const [fotoMainSubida, setFotoMainSubida] = useState("")

    let guardarDatos = (fondo, main, nombre, profesion, fecha, spCode, frase, darkMode) => {
        props.dispatch({
            type: "SOCIA_VITALICIA", payload: { "fotoFondo": fondo, "fotoMain": main, "nombre": nombre, "profesion": profesion, "fecha": fecha, "spCode": spCode, "frase": frase, "darkMode": darkMode }
        });
    }

    let guardarFotoFondo = (recibido) => {
        const file = recibido.target.files[0];
        if (file !== undefined) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                fondo = reader.result
                guardarDatos(fondo, main, nombre, profesion, fecha, spCode, frase, darkMode);
            }

        }

    }

    let guardarFotoMain = (recibido) => {
        const file = recibido.target.files[0];
        if (file !== undefined) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                main = reader.result
                guardarDatos(fondo, main, nombre, profesion, fecha, spCode, frase, darkMode);
            }
        }
    }

    let guardarSpCode = (recibido) => {
        const file = recibido.target.files[0];
        if (file !== undefined) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                spCode = reader.result;
                guardarDatos(fondo, main, nombre, profesion, fecha, spCode, frase, darkMode);
            }
        }
    }

    let guardarNombre = (recibido) => {
        /*  console.log(recibido) */
        nombre = recibido;
        guardarDatos(fondo, main, nombre, profesion, fecha, spCode, frase, darkMode);

    }

    let guardarProfesion = (recibido) => {
        profesion = recibido;
        guardarDatos(fondo, main, nombre, profesion, fecha, spCode, frase, darkMode);
    }
    let guardarFecha = (recibido) => {
        /*  console.log(recibido); */
        let aux = new Date(`${recibido} GMT-3`);
        /*   console.log(aux) */
        let dia = aux.getDate();
        if (dia < 10) {
            dia = `0${dia}`
        }
        let mes = aux.getMonth() + 1;
        if (mes < 10) {
            mes = `0${mes}`
        }
        let anio = aux.getFullYear();

        fecha = `${dia}.${mes}.${anio}`
        /*   console.log(fecha) */
        guardarDatos(fondo, main, nombre, profesion, fecha, spCode, frase, darkMode);
    }

    let guardarFrase = (recibido) => {
        frase = recibido;
        guardarDatos(fondo, main, nombre, profesion, fecha, spCode, frase, darkMode);
    }
    let guardarDarkMode = (recibido) => {
        console.log(recibido)
        darkMode = recibido;
        guardarDatos(fondo, main, nombre, profesion, fecha, spCode, frase, darkMode);
    }

    return (

        <div>
            <Switch funcion={guardarDarkMode} />
            <Input label={"Nombre"} funcion={guardarNombre} type={"text"} />
            <Input label={"Profesión"} funcion={guardarProfesion} type={"text"} />
            <Input label={"Fecha"} funcion={guardarFecha} type={"date"} />

            <Input label={"Frase"} funcion={guardarFrase} type={"textarea"} />

            <Input label={"Foto de Fondo"} funcion={guardarFotoFondo} type={"file"} />

            <Input label={"Foto de la Socia"} funcion={guardarFotoMain} type={"file"} />

            <Input label={"Código de Spotify"} funcion={guardarSpCode} type={"file"} />


            <div className="last"></div>
        </div>
    )
}

const mapStateToProps = (state) => ({

})


export default connect(mapStateToProps)(SociaVitalicia)
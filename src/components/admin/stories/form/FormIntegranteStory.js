import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Input from '../../../formComponents/Input'
import Switch from '../../../formComponents/Switch'

export const FormIntegranteStory = (props) => {

    let { usuarios } = props

    const [usuariosSelect, setUsuariosSelect] = useState([])
    let integrante;
    let darkMode = false;
    let descripcion;

    let guardarDatos = (integrante, darkMode, descripcion) => {
        props.dispatch({
            type: "STORY_EQUIPO", payload: { "integrante": integrante, "darkMode": darkMode, "descripcion": descripcion }
        });
    }

    const guardarIntegrante = (recibido) => {
        integrante = recibido
        guardarDatos(integrante, darkMode, descripcion)
    }

    const guardarDarkMode = (recibido) => {
        darkMode = recibido
        guardarDatos(integrante, darkMode, descripcion)
    }

    const guardarDescripcion = (recibido) => {
        descripcion = recibido
        guardarDatos(integrante, darkMode, descripcion)
    }



    useEffect(() => {

        if (usuarios !== "") {
            let aux = usuarios.map((u, i) => {
                let newUser = {};
                newUser = { nombre: u.nombreCompleto, _id: u._id, key: u._id }
                return newUser
            })
            console.log(aux)
            setUsuariosSelect(aux)
        }
    }, [usuarios])

    return (

        <div>
            <Input type={"select"} label={"Integrante"} defaultValue={"Elegí un integrante"} opciones={usuariosSelect} funcion={guardarIntegrante} />
            <Switch funcion={guardarDarkMode} />
            <Input type={"textarea"} label={"Mini descripción"} funcion={guardarDescripcion} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    usuarios: state.usuarios,
})



export default connect(mapStateToProps)(FormIntegranteStory)

import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Switch from '../../../formComponents/Switch'
import Input from '../../../formComponents/Input'

const FinalPartido = (props) => {

    let { url } = props
    let filtro;

    useEffect(() => {
        let last = document.getElementsByClassName("last")
        props.setAlturaForm(last[0].offsetTop)
    }, [])

    const [equipos, setEquipos] = useState([])
    const [equiposFiltrados, setEquiposFiltrados] = useState([])

    let eqLocal = "";
    let eqVisitante = "";
    let pLocal = "";
    let pVisitante = "";
    let foto = "";

    const [deporteElegido, setDeporteElegido] = useState("");

    let darkMode = false;

    useEffect(() => {

        fetch(`${url}/listarEquipos`, {
            method: 'GET',
        }).then(r => r.json())
            .then(equipos => {
                console.log(equipos)
                setEquipos(equipos);
                setEquiposFiltrados(equipos)
            }).then(() => {
                /* buscarPorDeporte("61785cfa21299d6da5a1e2d7"); */
            }
            )
    }, [])
    useEffect(() => {
        guardarDatos(eqLocal, eqVisitante, pLocal, pVisitante, foto, deporteElegido, darkMode);
    }, [deporteElegido])

    let { deportes } = props

    let guardarDatos = (eqLocal, eqVisitante, pLocal, pVisitante, foto, deporteElegido, darkMode) => {

        props.dispatch({
            type: "FINAL_PARTIDO", payload: { "eqLocal": eqLocal, "eqVisitante": eqVisitante, "pLocal": pLocal, "pVisitante": pVisitante, "foto": foto, "deporte": deporteElegido, "darkMode": darkMode }
        });
    }
    let buscarPorDeporte = (recibido) => {
        console.log(recibido)
        setDeporteElegido(deportes.filter(d => d._id === recibido))
        setEquiposFiltrados(equipos.filter(eq => eq.deporte === recibido))
    }

    const guardarEqLocal = (recibido) => {
        console.log(deporteElegido)
        console.log(recibido) /* recibo id de equipo elegido */
        eqLocal = equipos.filter(eq => eq._id === recibido);

        guardarDatos(eqLocal, eqVisitante, pLocal, pVisitante, foto, deporteElegido, darkMode);
    }
    const guardarEqVisitante = (recibido) => {

        console.log(recibido) /* recibo id de equipo elegido */
        eqVisitante = equipos.filter(eq => eq._id === recibido);
        guardarDatos(eqLocal, eqVisitante, pLocal, pVisitante, foto, deporteElegido, darkMode);
    }
    let guardarDarkMode = (recibido) => {

        darkMode = recibido;

        guardarDatos(eqLocal, eqVisitante, pLocal, pVisitante, foto, deporteElegido, darkMode);
    }
    let guardarFoto = (recibido) => {
        const file = recibido.target.files[0];
        if (file !== undefined) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                foto = reader.result
                guardarDatos(eqLocal, eqVisitante, pLocal, pVisitante, foto, deporteElegido, darkMode);
            }

        }

    }


    let guardarPuntajeLocal = (recibido) => {
        pLocal = recibido;
        guardarDatos(eqLocal, eqVisitante, pLocal, pVisitante, foto, deporteElegido, darkMode);
    }
    let guardarPuntajeVisitante = (recibido) => {
        pVisitante = recibido;
        guardarDatos(eqLocal, eqVisitante, pLocal, pVisitante, foto, deporteElegido, darkMode);
    }

    return (
        <div>
            <Switch funcion={guardarDarkMode} />
            <Input label={"Deporte"} defaultValue={"Elige un deporte"} type={"select"} opciones={deportes} funcion={buscarPorDeporte} bgColor={"grey"} />
            <Input label={"Equipo local"} type={"select"} defaultValue={"Elige un equipo"} opciones={equiposFiltrados} funcion={guardarEqLocal} />
            <Input label={"Equipo visitante"} type={"select"} defaultValue={"Elige otro equipo"} opciones={equiposFiltrados} funcion={guardarEqVisitante} />
            <Input label={"Puntaje local"} type={"text"} funcion={guardarPuntajeLocal} />
            <Input label={"Puntaje visitante"} type={"text"} funcion={guardarPuntajeVisitante} />
            <Input label={"Foto del partido"} funcion={guardarFoto} type={"file"} />
            <div className="last"></div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    deportes: state.deportes,
    url: state.url
})


export default connect(mapStateToProps)(FinalPartido)

import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Switch from '../../../formComponents/Switch'
import Input from '../../../formComponents/Input'

const ProximoPartido = (props) => {

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
    let hora = "";
    let fecha = "";
    let lugar = "";
    let fotoLocal = "";
    let fotoVisitante = "";
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
        guardarDatos(eqLocal, eqVisitante, fecha, hora, lugar, fotoLocal, fotoVisitante, deporteElegido, darkMode);
    }, [deporteElegido])

    let { deportes } = props

    let guardarDatos = (eqLocal, eqVisitante, fecha, hora, lugar, fotoLocal, fotoVisitante, deporteElegido, darkMode) => {

        props.dispatch({
            type: "PROXIMO_PARTIDO", payload: { "eqLocal": eqLocal, "eqVisitante": eqVisitante, "fecha": fecha, "hora": hora, "lugar": lugar, "fotoLocal": fotoLocal, "fotoVisitante": fotoVisitante, "deporte": deporteElegido, "darkMode": darkMode }
        });
    }
    let buscarPorDeporte = (recibido) => {
        setDeporteElegido(deportes.filter(d => d._id === recibido))
        setEquiposFiltrados(equipos.filter(eq => eq.deporte === recibido))

    }


    const guardarEqLocal = (recibido) => {
        console.log(deporteElegido)
        console.log(recibido) /* recibo id de equipo elegido */
        eqLocal = equipos.filter(eq => eq._id === recibido);

        guardarDatos(eqLocal, eqVisitante, fecha, hora, lugar, fotoLocal, fotoVisitante, deporteElegido, darkMode);
    }
    const guardarEqVisitante = (recibido) => {

        console.log(recibido) /* recibo id de equipo elegido */
        eqVisitante = equipos.filter(eq => eq._id === recibido);
        guardarDatos(eqLocal, eqVisitante, fecha, hora, lugar, fotoLocal, fotoVisitante, deporteElegido, darkMode);
    }
    let guardarDarkMode = (recibido) => {

        darkMode = recibido;

        guardarDatos(eqLocal, eqVisitante, fecha, hora, lugar, fotoLocal, fotoVisitante, deporteElegido, darkMode);
    }
    let guardarFotoLocal = (recibido) => {
        const file = recibido.target.files[0];
        if (file !== undefined) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                fotoLocal = reader.result
                guardarDatos(eqLocal, eqVisitante, fecha, hora, lugar, fotoLocal, fotoVisitante, deporteElegido, darkMode);
            }

        }

    }

    let guardarFotoVisitante = (recibido) => {
        const file = recibido.target.files[0];
        if (file !== undefined) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                fotoVisitante = reader.result
                guardarDatos(eqLocal, eqVisitante, fecha, hora, lugar, fotoLocal, fotoVisitante, deporteElegido, darkMode);
            }
        }
    }

    let guardarFecha = (recibido) => {

        let aux = new Date(`${recibido} GMT-3`);

        let dia = aux.getDate();
        if (dia < 10) {
            dia = `0${dia}`
        }
        let mes = aux.getMonth() + 1;
        if (mes < 10) {
            mes = `0${mes}`
        }

        fecha = `${dia}.${mes}`
        guardarDatos(eqLocal, eqVisitante, fecha, hora, lugar, fotoLocal, fotoVisitante, deporteElegido, darkMode);

    }
    let guardarHora = (recibido) => {
        console.log(recibido)
        hora = recibido;
        guardarDatos(eqLocal, eqVisitante, fecha, hora, lugar, fotoLocal, fotoVisitante, deporteElegido, darkMode);
    }
    let guardarLugar = (recibido) => {
        console.log(recibido)
        lugar = recibido;
        guardarDatos(eqLocal, eqVisitante, fecha, hora, lugar, fotoLocal, fotoVisitante, deporteElegido, darkMode);
    }

    return (
        <div>
            <Switch funcion={guardarDarkMode} />
            <Input label={"Deporte"} defaultValue={"Elige un deporte"} type={"select"} opciones={deportes} funcion={buscarPorDeporte} />
            <Input label={"Equipo local"} type={"select"} defaultValue={"Elige un equipo"} opciones={equiposFiltrados} funcion={guardarEqLocal} />
            <Input label={"Equipo visitante"} type={"select"} defaultValue={"Elige otro equipo"} opciones={equiposFiltrados} funcion={guardarEqVisitante} />
            <Input label={"Fecha"} type={"date"} funcion={guardarFecha} />
            <Input label={"Hora"} type={"text"} funcion={guardarHora} />
            <Input label={"Ubicación"} type={"text"} funcion={guardarLugar} />
            <Input label={"Foto del equipo local"} funcion={guardarFotoLocal} type={"file"} />
            <Input label={"Foto del equipo visitante"} funcion={guardarFotoVisitante} type={"file"} />
            <div className="last"></div>



        </div>
    )
}

const mapStateToProps = (state) => ({
    deportes: state.deportes,
    url: state.url
})


export default connect(mapStateToProps)(ProximoPartido)

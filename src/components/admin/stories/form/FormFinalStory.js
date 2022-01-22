import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Input from '../../../formComponents/Input'
import Axios from 'axios'
import Alerta from '../../Alerta'

const FormFinalStory = (props) => {

    const [mensaje, setMensaje] = useState("")
    const [tipoMensaje, setTipoMensaje] = useState("")
    const [visible, setVisible] = useState(0)
    const [duracion, setDuracion] = useState(0)

    let { url, deportes } = props

    const [momento, setMomento] = useState("")
    const [eqLocal, setEqLocal] = useState("")
    const [eqVisitante, setEqVisitante] = useState("")
    const [puntajeLocal, setPuntajeLocal] = useState("")
    const [puntajeVisitante, setPuntajeVisitante] = useState("")
    const [imgPartido, setImgPartido] = useState("")
    const [equipos, setEquipos] = useState([])
    const [equiposFiltrados, setEquiposFiltrados] = useState([])
    const [deporteElegido, setDeporteElegido] = useState("");

    useEffect(() => {
        if (momento !== "" && deporteElegido !== "" && eqLocal !== "" && eqVisitante !== "" && puntajeVisitante !== "" && puntajeVisitante !== "" && imgPartido !== "") {
            document.getElementById("btn-render").disabled = false;
            document.getElementById("btn-render").style.opacity = "1";
        } else {
            document.getElementById("btn-render").disabled = true;
            document.getElementById("btn-render").style.opacity = "0.7";
        }
    }, [deporteElegido, eqLocal, eqVisitante, puntajeLocal, puntajeVisitante, imgPartido])

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

    let buscarPorDeporte = (recibido) => {
        console.log(recibido)
        setDeporteElegido(deportes.filter(d => d._id === recibido))
        setEquiposFiltrados(equipos.filter(eq => eq.deporte === recibido))
    }


    const guardarEqLocal = (recibido) => {
        console.log(recibido)
        setEqLocal(equipos.filter(equipo => equipo._id === recibido))

    }
    const guardarEqVisitante = (recibido) => {
        console.log(recibido)
        setEqVisitante(equipos.filter(equipo => equipo._id === recibido))
    }
    const guardarPuntajeLocal = (recibido) => {
        setPuntajeLocal(recibido)
    }
    const guardarPuntajeVisitante = (recibido) => {
        setPuntajeVisitante(recibido)
    }

    const subirFoto = (recibido) => {
        setMensaje("Subiendo foto")
        setDuracion(2000)
        setTipoMensaje("loading")
        setVisible(1)
        const file = recibido.target.files[0];
        const formData = new FormData;
        formData.append("file", file);
        formData.append("upload_preset", "fotosIntegrantes")

        Axios.post("https://api.cloudinary.com/v1_1/isita/image/upload", formData).then((r) => {
            setMensaje("Imagen subida con exito")
            setTipoMensaje("exito")
            setVisible(1)
            setImgPartido(r.data.url)

        })
    }

    const renderVideo = () => {
        setMensaje("Creando video. Puede tardar unos segundos...")
        setDuracion(30000)
        setTipoMensaje("loading")
        setVisible(1)
        fetch(`http://localhost:8000/?momento=${momento}&equipo1=${eqLocal[0].nombre}&equipo2=${eqVisitante[0].nombre}&escudo1=${eqLocal[0].escudo}&escudo2=${eqVisitante[0].escudo}&puntaje1=${puntajeLocal}&puntaje2=${puntajeVisitante}&deporte=${deporteElegido[0].imgCancha}&imgPartido=${imgPartido}&tipo=FinalPartido`, {
            method: "GET",
        }).then(response => response.json())
            .then(r => {
                console.log(r)
                props.funcion(r.url)
                setMensaje("Video creado con exito")
                setDuracion(2000)
                setTipoMensaje("exito")
                setVisible(1)
            })
    }


    return (
        <div>
            <Alerta tipo={tipoMensaje} mensaje={mensaje} visible={visible} funcion={setVisible} duracion={duracion} />
            <Input type={"text"} funcion={setMomento} label={"Momento del partido"} />
            <Input label={"Deporte"} defaultValue={"Elige un deporte"} type={"select"} opciones={deportes} funcion={buscarPorDeporte} />
            <Input label={"Equipo local"} type={"select"} defaultValue={"Elige un equipo"} opciones={equiposFiltrados} funcion={guardarEqLocal} />
            <Input label={"Equipo visitante"} type={"select"} defaultValue={"Elige otro equipo"} opciones={equiposFiltrados} funcion={guardarEqVisitante} />
            <Input label={"Puntaje local"} type={"text"} funcion={guardarPuntajeLocal} />
            <Input label={"Puntaje visitante"} type={"text"} funcion={guardarPuntajeVisitante} />
            {<Input label={"Foto del partido"} funcion={subirFoto} type={"file"} />}
            <button id="btn-render" className="bg-orange py-3 px-8 rounded-3xl text-white text-base" onClick={renderVideo} >Crear story</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    url: state.url,
    deportes: state.deportes
})



export default connect(mapStateToProps)(FormFinalStory)

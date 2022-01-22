import React, { useState } from 'react'
import { connect } from 'react-redux'
import Input from '../../../formComponents/Input'
import Alerta from '../../Alerta'

const Programa = (props) => {

    const [mensaje, setMensaje] = useState("")
    const [tipoMensaje, setTipoMensaje] = useState("")
    const [visible, setVisible] = useState(0)
    const [duracion, setDuracion] = useState(0)

    const [tema1, setTema1] = useState("")
    const [tema2, setTema2] = useState("")
    const [tema3, setTema3] = useState("")
    const [dia, setDia] = useState("")
    const [hora, setHora] = useState("")
    const [video, setVideo] = useState("")

    const renderVideo = () => {
        setMensaje("Creando video. Puede tardar unos segundos...")
        setDuracion(30000)
        setTipoMensaje("loading")
        setVisible(1)
        fetch(`http://localhost:8000/?temaUno=${tema1}&temaDos=${tema2}&temaTres=${tema3}&dia=${dia}&hora=${hora}&tipo=Anuncio`, {
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
            <Input label={"Tema #1"} funcion={setTema1} type={"text"} />
            <Input label={"Tema #2"} funcion={setTema2} type={"text"} />
            <Input label={"Tema #3"} funcion={setTema3} type={"text"} />
            <Input label={"Día del programa"} funcion={setDia} type={"text"} />
            <Input label={"Horario de comienzo"} funcion={setHora} type={"text"} />
            <button className="bg-orange py-3 px-8 rounded-3xl text-white text-base" onClick={renderVideo} >Crear story</button>
        </div>
    )
}

const mapStateToProps = (state) => ({

})



export default connect(mapStateToProps)(Programa)

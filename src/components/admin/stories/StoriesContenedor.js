import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import NavbarAdmin from '../NavbarAdmin'
import Programa from './form/Programa'
import ReactPlayer from 'react-player'
import Input from '../../formComponents/Input'
import IntegranteStory from './IntegranteStory'
import Switch from '../../formComponents/Switch'
import FormIntegranteStory from './form/FormIntegranteStory'
import FormFinalStory from './form/FormFinalStory'

const StoriesContenedor = (props) => {




    const [alturaForm, setAlturaForm] = useState("")
    const [tipoPosteo, setTipoPosteo] = useState("")
    const [video, setVideo] = useState("")

    useEffect(() => {
        setTipoPosteo("equipo")
    }, [])

    useEffect(() => {
        var x = window.matchMedia("(max-width: 1023px)")
        let last = document.getElementById("finalStories")
        if (x.matches && tipoPosteo !== "equipo") {
            setAlturaForm(last.offsetTop)
        } else if (x.matches && tipoPosteo === "equipo") {
            setAlturaForm(last.offsetTop - 1900)
        }
    }, [tipoPosteo])

    useEffect(() => {
        console.log(alturaForm)
    }, [alturaForm])



    return (
        <div className="bg-black-50 overflow-hidden" style={{ maxHeight: `${alturaForm}px` }}>
            <div className="bg-black-50 w-screen overflow-hidden p-4  md:p-0 md:w-10/12 mx-auto pt-32 w-10/12 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="col-span-1">
                        <div className="mb-6 col-span-1">
                            <Input type={"select"} label={"Tipo de Story"} bgColor={"grey"} funcion={setTipoPosteo} opciones={[{ "nombre": "Conocé al equipo", "_id": "equipo" }, { "nombre": "Próximo Programa", "_id": "programa" }, { "nombre": "Resultado Parcial o Final", "_id": "storyFinal" }]} />
                        </div>
                        {
                            (tipoPosteo === "programa") ?
                                <Programa funcion={setVideo} /> :
                                (tipoPosteo === "equipo") ?
                                    <FormIntegranteStory />
                                    : (tipoPosteo === "storyFinal") ?
                                        <FormFinalStory funcion={setVideo} /> : ""
                        }



                    </div>
                    <div className="col-span-1">
                        {(tipoPosteo === "programa" || tipoPosteo === "storyFinal") ?
                            <ReactPlayer playing={true} volume={0} height="500px" loop={true} url={video} className="mx-auto" /> :
                            (tipoPosteo === "equipo") ?
                                <div>
                                    <IntegranteStory setAlturaForm={setAlturaForm} />
                                </div> : ""}

                    </div>
                    <div id="finalStories"></div>

                </div>
            </div >
        </div>
    )
}

const mapStateToProps = (state) => ({
    url: state.url,
    usuarios: state.usuarios
})



export default connect(mapStateToProps)(StoriesContenedor)
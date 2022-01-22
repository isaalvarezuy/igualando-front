import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import domtoimage from 'dom-to-image';
import SociaVitalicia from './posteos/SociaVitalicia';
import Noticias from './posteos/Noticias'
import ProximoPartido from './posteos/ProximoPartido'
import FinalPartido from './posteos/FinalPartido'
import Alerta from '../Alerta'

const Imagen = (props) => {

    const [disabledState, setDisabledState] = useState(true)
    const [mensajeError, setMensajeError] = useState("")

    let { tipo, sociaVitalicia, noticias, proximoPartido, finalPartido } = props;

    let preview;



    useEffect(() => {
        domtoimage.toJpeg(document.getElementById('capture'), { quality: 0.95 }).then(
            function (dataUrl) {
                preview = dataUrl;
                /*     console.log(dataUrl) */
                document.getElementById("preview").src = preview;

            }
        )
        if (tipo === "socia") {
            console.log(sociaVitalicia)
            if (sociaVitalicia.fecha !== "" && sociaVitalicia.fotoFondo !== "" && sociaVitalicia.fotoMain !== "" && sociaVitalicia.frase !== "" && sociaVitalicia.nombre !== "" && sociaVitalicia.profesion !== "" && sociaVitalicia.spCode !== "") {
                document.getElementById("btn-download").disabled = false;
                document.getElementById("btn-download").style.opacity = "1";

            } else {
                document.getElementById("btn-download").disabled = true;
                document.getElementById("btn-download").style.opacity = "0.7";
            }
        }
        if (tipo === "noticias") {
            console.log(noticias)
            if (noticias.foto !== "" && noticias.titulo !== "") {
                document.getElementById("btn-download").disabled = false;
                document.getElementById("btn-download").style.opacity = "1";
            } else {
                document.getElementById("btn-download").disabled = true;
                document.getElementById("btn-download").style.opacity = "0.7";
            }
        }
        if (tipo === "proximoPartido") {
            console.log(proximoPartido)
            if (proximoPartido.deporte !== "" && proximoPartido.eqLocal !== "" && proximoPartido.eqVisitante !== "" && proximoPartido.fecha !== "" && proximoPartido.fotoLocal !== "" && proximoPartido.fotoVisitante !== "" && proximoPartido.hora !== "" && proximoPartido.lugar !== "") {
                document.getElementById("btn-download").disabled = false;
                document.getElementById("btn-download").style.opacity = "1";
            } else {
                document.getElementById("btn-download").disabled = true;
                document.getElementById("btn-download").style.opacity = "0.7";
            }
        }
        if (tipo === "finalPartido") {
            console.log(finalPartido)
            if (finalPartido.deporte !== [] && finalPartido.eqLocal !== "" && finalPartido.eqVisitante !== "" && finalPartido.foto !== "" && finalPartido.pLocal !== "" && finalPartido.pVisitante !== "") {
                document.getElementById("btn-download").disabled = false;
                document.getElementById("btn-download").style.opacity = "1";
            } else {
                document.getElementById("btn-download").disabled = true;
                document.getElementById("btn-download").style.opacity = "0.7";
            }
        }



    }
    )
    /*  const cropView = () => {
         let previewHeight = document.getElementById('preview').offsetHeight;
         var div = document.querySelector('#contenedorImg');
         div.style.height = `${previewHeight + 70}px`;
     } */
    const descargarImg = () => {
        domtoimage.toJpeg(document.getElementById('capture'), { quality: 0.95 })
            .then(function (dataUrl) {
                /*  console.log(dataUrl) */
                var link = document.createElement('a');
                link.download = `${tipo}.jpeg`;
                link.href = dataUrl;
                link.click();
            });
    }



    return (
        <div id="contenedorImg" style={{ overflow: "hidden" }}>
            <img className="w-full md:w-10/12 mx-auto " id="preview" src={preview} />
            <div className="w-full md:w-10/12 mx-auto pt-4">
                <button className="btn disabled:opacity-75 w-full md:w-auto  bg-orange py-2 px-4 rounded-3xl text-white text-base" id="btn-download" download="post.jpg" onClick={descargarImg}>Descargar </button>
            </div>
            <div className="lastMobile"></div>
            <div style={{ position: "fixed", top: 0, left: 0, width: "1080px", height: "1080px", position: "relative", }}>
                <div id="capture" style={{ width: "1080px", height: "1080px", position: "absolute", top: "0", zIndex: -10 }}>
                    {(tipo === "socia") ?
                        <SociaVitalicia /> :
                        (tipo === "noticias") ?
                            <Noticias /> :
                            (tipo === "proximoPartido") ?
                                <ProximoPartido /> :
                                (tipo === "finalPartido") ?
                                    <FinalPartido /> :
                                    ""
                    }
                </div>
                <div className="bg-black-50 " style={{ position: "fixed", top: 0, left: 0, width: "1080px", height: "1080px", position: "absolute" }}>

                </div>
            </div>



        </div >
    )
}


const mapStateToProps = (state) => ({
    sociaVitalicia: state.sociaVitalicia,
    noticias: state.noticias,
    proximoPartido: state.proximoPartido,
    finalPartido: state.finalPartido

})


export default connect(mapStateToProps)(Imagen)
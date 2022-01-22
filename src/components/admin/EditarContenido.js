import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Input from '../formComponents/Input'
import Alerta from '../admin/Alerta'

const EditarContenido = (props) => {
    let { url } = props
    useEffect(() => {

        fetch(`${url}/traerDatos`, {
            method: "GET",
        }).then(r => r.json())
            .then(r => {
                /*  console.log(r); */
                setProgramas(r[0].programas)
                setSocias(r[0].socias)
                setPartidos(r[0].partidos)
            })

    }, [])

    const [mensaje, setMensaje] = useState("")
    const [tipoMensaje, setTipoMensaje] = useState("")
    const [visible, setVisible] = useState("")

    const [programas, setProgramas] = useState();
    const [socias, setSocias] = useState()
    const [partidos, setPartidos] = useState()

    const guardarCambios = () => {

        let nuevosDatos = {
            programas: programas,
            socias: socias,
            partidos: partidos,
        }
        setMensaje("Modificando datos");
        setTipoMensaje("loading")
        setVisible(1)

        console.log(nuevosDatos)

        fetch(`${url}/modificarDatos`, {
            method: "PUT",
            body: JSON.stringify(nuevosDatos),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then(r => r.json())
            .then(r => {
                console.log(r);
                setMensaje("Cambios realizados con éxito");
                setTipoMensaje("exito")
                setVisible(1)
            })
    }

    return (
        <div>

            <div className="w-full p-4  md:p-0 md:w-10/12 mx-auto pt-32 md:pt-48"  >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
                    <Alerta tipo={tipoMensaje} mensaje={mensaje} visible={visible} funcion={setVisible} duracion={3000} />
                    <div className="col-span-1">
                        <Input type={"number"} label={"Programas al aire"} defaultValue={programas} funcion={setProgramas} />
                        <Input type={"number"} label={"Socias Vitalicia"} defaultValue={socias} funcion={setSocias} />
                        <Input type={"number"} label={"Partidos cubiertos"} defaultValue={partidos} funcion={setPartidos} />
                        <button className="w-full md:w-auto bg-orange py-3 px-8 rounded-3xl text-white text-base" onClick={guardarCambios}>Guardar cambios</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({
    url: state.url
})


export default connect(mapStateToProps)(EditarContenido)
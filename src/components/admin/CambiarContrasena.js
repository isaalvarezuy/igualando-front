import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Input from '../formComponents/Input'
import Alerta from './Alerta'

const CambiarContrasena = (props) => {

    let { usuarioLogueado, url } = props

    const [passViejo, setPassViejo] = useState("")
    const [passNuevo, setPassNuevo] = useState("")
    const [passNuevoRep, setPassNuevoRep] = useState("")

    const [mensaje, setMensaje] = useState("")
    const [tipoMensaje, setTipoMensaje] = useState("")
    const [visible, setVisible] = useState("")


    useEffect(() => {
        if (passNuevo !== "" && passViejo !== "" && passNuevoRep !== "") {
            document.getElementById("btn-cambiar").disabled = false;
            document.getElementById("btn-cambiar").style.opacity = "1";
        } else {
            document.getElementById("btn-cambiar").disabled = true;
            document.getElementById("btn-cambiar").style.opacity = "0.7";
        }
    }, [passViejo, passNuevo, passNuevoRep])

    const cambiarContrasena = () => {
        /* validaciones */
        if (passViejo !== usuarioLogueado.pass) {
            setMensaje("Tu contraseña actual es incorrecta");
            setTipoMensaje("error");
            setVisible(1)
        } else if (passNuevo !== passNuevoRep) {
            setMensaje("Las contraseñas ingresadas no coinciden");
            setTipoMensaje("error");
            setVisible(1)
        } else if (passViejo === passNuevo && passNuevo === passNuevoRep) {
            setMensaje("Tu nueva contraseña debe ser diferente a la contraseña actual");
            setTipoMensaje("error");
            setVisible(1)
        }
        else {
            let usuario = {
                user: usuarioLogueado._id,
                passNuevo: passNuevo
            }
            fetch(`${url}/cambiarContrasena`, {
                method: "PUT",
                body: JSON.stringify(usuario),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(r => r.json()).then(r => {
                setMensaje("Contraseña cambiada con éxito");
                setTipoMensaje("exito");
                setVisible(1)
                props.dispatch({ type: "CAMBIAR_CONTRASENA", payload: r });
                props.funcionPopup(false)
                props.funcionDropdown(false)

            }
            )
        }
    }

    return (
        <div>
            <div className=" left-0 top-0 fixed h-full w-full flex items-center jusitfy-center z-50 bg-black bg-opacity-60">
                <Alerta tipo={tipoMensaje} mensaje={mensaje} visible={visible} funcion={setVisible} duracion={3000} />
                <div className="w-10/12 mx-auto bg-black-50 text-black md:w-1/3  top-20  rounded-xl shadow-md p-12 ">
                    <h2 className="font-body font-semibold text-lg mb-8">Cambiar contraseña</h2>
                    <Input type={"password"} label={"Contraseña actual"} funcion={setPassViejo} />
                    <Input type={"password"} label={"Nueva contraseña"} funcion={setPassNuevo} />
                    <Input type={"password"} label={"Confirmar contraseña"} funcion={setPassNuevoRep} />
                    <div className="flex flex-row justify-between mt-4">
                        <button className="text-center block md:inline-block bg-white border border-orange py-3 px-4 rounded-3xl text-orange text-base hover:border-orangelight hover:text-orangelight transition-all" onClick={() => {
                            props.funcionPopup(false)
                            props.funcionDropdown(false)
                        }}>Cancelar</button>
                        <button id="btn-cambiar" className=" text-center block md:inline-block bg-orange py-3 px-8 rounded-3xl text-white text-base hover:bg-orangelight transition-all" onClick={cambiarContrasena} >Cambiar Contraseña</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

const mapStateToProps = (state) => ({
    url: state.url,
    usuarioLogueado: state.usuarioLogueado,
})



export default connect(mapStateToProps)(CambiarContrasena)

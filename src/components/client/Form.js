import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import Input from '../formComponents/Input'
import Alerta from '../admin/Alerta'
import DottedLineLottie from '../lotties/DottedLineLottie'
import { Waypoint } from 'react-waypoint'

const Form = (props) => {
    let { url } = props

    const [nombre, setNombre] = useState("")
    const [mail, setMail] = useState("")
    const [mensaje, setMensaje] = useState("")

    const [mensajeAlerta, setMensajeAlerta] = useState("")
    const [visible, setVisible] = useState(0)
    const [tipoMensaje, setTipoMensaje] = useState(0)

    let [renderLottie, setRenderLottie] = useState(false);

    useEffect(() => {
        /* validar boton */
        if (nombre !== "" && mail !== "" && mensaje !== "") {
            document.getElementById("btn-form").disabled = false;
            document.getElementById("btn-form").style.opacity = "1";
        } else {
            document.getElementById("btn-form").disabled = true;
            document.getElementById("btn-form").style.opacity = "0.7";
        }
    }, [nombre, mail, mensaje])


    const enviarForm = () => {
        let form = {
            nombre: nombre,
            mail: mail,
            mensaje: mensaje,
        }


        fetch(`${url}/enviarForm`, {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json())
            .then(r => {
                if (r === "exito") {
                    setMensajeAlerta("Mensaje enviado con éxito")
                    setTipoMensaje("exito")
                    setVisible(1)
                } else {
                    setMensajeAlerta("Algo salió mal. Intentá de nuevo.")
                    setTipoMensaje("error")
                    setVisible(1)
                }

            })
    }


    return (
        <div className="w-full p-4 md:p-0" style={{ background: "linear-gradient(180deg, rgba(252,253,254,1) 30%, rgba(23,23,23,1) 30%, rgba(23,23,23,1) 100%)" }}>
            <div className="w-full md:w-10/12 mx-auto bg-orange md:p-8 rounded-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
                    <div className="col-span-1 text-left ">
                        <div className="md:hidden col-span-1">
                            <img className="mx-auto w-full" srcSet="https://res.cloudinary.com/isita/image/upload/v1636937642/static/Group_101_1x_hjfzqp.png 1x,https://res.cloudinary.com/isita/image/upload/v1636937642/static/Group_101_2x_wgjlzg.png 2x" />
                        </div>
                        <h2 className=" -mt-2 md:mt-0 font-title text-5xl mb-2 lg:mb-0 lg:text-hero relative text-black">Sumate!
                            </h2>

                        <p className="mt-0 md:-mt-4 font-body text-base md:p-0">Si querés ser parte del equipo o querés compartir tu historia ponete en contacto con nosotros!</p>

                        <div className="mt-4" >
                            <Input contactForm={true} type={"text"} label={"Nombre"} placeholder={"Escribe tu nombre..."} funcion={setNombre} />
                            <Input contactForm={true} type={"mail"} label={"Mail"} placeholder={"Escribe tu mail..."} funcion={setMail} />
                            <Input contactForm={true} type={"textarea"} label={"Mensaje"} placeholder={"Escribe tu mensaje..."} funcion={setMensaje} />

                            <button onClick={enviarForm} id="btn-form" className="text-center block w-full md:w-auto md:inline-block bg-black py-3 px-8 rounded-3xl text-white text-base hover:bg-opacity-80 transition-all">Enviar</button>
                        </div>


                    </div>
                    <Alerta tipo={tipoMensaje} mensaje={mensajeAlerta} visible={visible} funcion={setVisible} duracion={2000} />

                    <div className="hidden lg:block col-span-1 flex items-center relative">
                        <img className=" absolute top-10" style={{ left: 'calc(50% - 178px)' }} srcSet="https://res.cloudinary.com/isita/image/upload/v1642273813/static/Group_102_1x_bggpue.png 1x,https://res.cloudinary.com/isita/image/upload/v1642273813/static/Group_102_2x_djvjud.png 2x" />
                        <div className=" absolute top-10" style={{ left: 'calc(50% - 178px)' }}> {renderLottie && <DottedLineLottie />}</div>
                        <Waypoint onEnter={() => {
                            setTimeout(() => {
                                console.log("entro")
                                setRenderLottie(true)
                            }, 3000);

                        }
                        }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    url: state.url

})


export default connect(mapStateToProps)(Form)
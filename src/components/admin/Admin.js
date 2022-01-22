import React from 'react'
import { connect } from 'react-redux'
import NavbarAdmin from './NavbarAdmin'
import PosteosContenedor from './posteos/PosteosContenedor'
import EditarContenido from './EditarContenido'
import Login from './Login'
import StoriesContenedor from './stories/StoriesContenedor'
import GestionarUsuarios from './GestionarUsuarios'
import GestionarGaleria from './GestionarGaleria'
import Sidebar from './Sidebar'

const Admin = (props) => {

    let pagina = props.location.aboutProps;

    let usuarioLogueado = props.usuarioLogueado;

    return (
        <div>
            {(usuarioLogueado === "") ?
                <Login /> :
                <div>
                    <NavbarAdmin />
                    <div className="bg-black-50">
                        <div className="hidden col-span-0 lg:block lg:col-span-2 h-screen fixed">
                            <Sidebar paginaSeleccionada={pagina} />
                        </div>

                        <div className="pl-0 lg:pl-60 w-full min-h-screen">
                            {(pagina === "nuestraGaleria") ?
                                <GestionarGaleria /> :
                                (pagina === "editarDatos") ?
                                    <EditarContenido /> :
                                    (pagina === "nuevaStory") ?
                                        <StoriesContenedor /> :
                                        (pagina === "gestionarUsuarios") ?
                                            <GestionarUsuarios /> :
                                            <PosteosContenedor />
                            }
                        </div>
                    </div>


                </div>

            }
            {/*  <IntegranteStory integrante={"61de177df900c63ba93c6693"} /> */}


        </div >
    )
}

const mapStateToProps = (state) => ({
    usuarioLogueado: state.usuarioLogueado
})

export default connect(mapStateToProps)(Admin)

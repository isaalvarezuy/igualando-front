import React, { useEffect } from 'react'
import Home from './client/Home'
import Galeria from './client/Galeria'
import Ampliacion from './client/Ampliacion'
import { Route, Switch } from 'react-router-dom'
import EditarContenido from './admin/EditarContenido'
import SubirAlbum from './admin/SubirAlbum'
import AmpliacionFoto from './client/AmpliacionFoto'
import PosteosContenedor from './admin/posteos/PosteosContenedor'
import Login from './admin/Login'
import Admin from './admin/Admin'
import Registro from './admin/Registro'
import { connect } from 'react-redux'
import Pagina404 from './Pagina404'

const Contenedor = (props) => {
    let { url } = props
    useEffect(() => {
        fetch(`${url}/listarAlbums`, {
            method: "GET",
        }).then(r => r.json())
            .then(r => {
                props.dispatch({
                    type: "LISTAR_ALBUMS", payload: r
                });
                fetch(`${url}/listarDeportes`, {
                    method: "GET",
                }).then(r => r.json())
                    .then(r => {
                        props.dispatch({
                            type: "LISTAR_DEPORTES", payload: r
                        });
                        fetch(`${url}/listarUsuarios`, {
                            method: "GET",
                        }).then(r => r.json())
                            .then(r => {
                                props.dispatch({
                                    type: "LISTAR_USUARIOS", payload: r
                                });

                            })

                    })

            })
    }, [])

    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/galeria" component={Galeria} />
                <Route path="/ampliacion" component={Ampliacion} />
                <Route path="/ampliacionFoto" component={AmpliacionFoto} />
                <Route path="/admin" component={Admin} />
                <Route path="/login" component={Login} />
                <Route path="/admin/actualizar" component={EditarContenido} />
                <Route path="/admin/subir" component={SubirAlbum} />
                <Route path="/admin/nuevoposteo" component={PosteosContenedor} />
                <Route path="/registro" component={Registro} />
                <Route component={Pagina404} />
            </Switch>



        </div>
    )
}
const mapStateToProps = (state) => ({
    url: state.url
})


export default connect(mapStateToProps)(Contenedor)
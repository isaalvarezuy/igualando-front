import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { SearchInput, Select } from 'evergreen-ui'
import Footer from './Footer'
import Input from '../formComponents/Input'

const Galeria = (props) => {


    let { albums, deportes } = props;

    const [anios, setAnios] = useState([])
    const [albumsFiltrados, setAlbumsFiltrados] = useState([])

    const [titulo, setTitulo] = useState("")
    const [deporte, setDeporte] = useState("todos")
    const [anio, setAnio] = useState("todos")


    useEffect(() => {

        let aniosAux = []

        for (let i = 0; i < albums.length; i++) {
            let anio = albums[i].fecha.substring(0, 4)

            if (aniosAux.length === 0) {
                aniosAux = [...aniosAux, { "_id": anio, "nombre": anio }]
            } else {
                console.log(anio)
                let existe = false
                for (let ii = 0; ii < aniosAux.length; ii++) {
                    if (anio === aniosAux[ii].nombre) {
                        existe = true
                    }
                }
                if (existe === false) {
                    aniosAux = [...aniosAux, { "_id": anio, "nombre": anio }]
                }
            }
        }
        aniosAux.sort(function (a, b) {
            return parseInt(a._id) - parseInt(b._id);
        });

        setAnios(aniosAux)
        setAlbumsFiltrados(albums)

    }, [albums])

    useEffect(() => {
        filtrar()
    }, [titulo, deporte, anio])

    const buscarPorDeporte = (recibido) => {
        setDeporte(recibido);
        filtrar()
    }

    const buscarPorAnio = (recibido) => {
        console.log(recibido)
        setAnio(recibido);
        filtrar()
    }
    const buscarPorTitulo = (recibido) => {
        console.log(recibido)
        setTitulo(recibido);
        filtrar()
    }

    const convertirAString = (fecha) => {

        let aux = new Date(fecha);

        let dia = aux.getDate();
        if (dia < 10) {
            dia = `0${dia}`
        }
        let mes = aux.getMonth() + 1;
        if (mes < 10) {
            mes = `0${mes}`
        }
        let anio = aux.getFullYear();

        let fechaString = `${dia}.${mes}.${anio}`
        return (fechaString)

    }

    const filtrar = () => {
        let filtro = albums.filter(album => album.titulo.toLowerCase().includes(titulo.toLowerCase()))
        if (deporte !== "todos") {
            filtro = filtro.filter(album => album.deporte === deporte)
        }

        if (anio !== "todos") {
            filtro = filtro.filter(album => album.fecha.includes(anio))
        }
        setAlbumsFiltrados(filtro);

    }

    return (
        <div>
            <Navbar navbarBg={"solid"} />
            {/* filtros */}
            <div style={{ paddingTop: '88px', minHeight: "calc(100vh - 200px)" }} >
                <div className="bg-white  py-2 items-center">
                    <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 ">

                        <div className="col-span-1">
                            <Input type={"search"} label={"Buscar Partido..."} funcion={buscarPorTitulo} />
                        </div>
                        <div className="col-span-1">
                            <Input type={"select"} opciones={deportes} funcion={buscarPorDeporte} defaultValue={"Todos los deportes"} />
                        </div>
                        <div className="col-span-1">
                            <Input type={"select"} opciones={anios} funcion={buscarPorAnio} defaultValue={"Todos los años"} />
                        </div>


                    </div>

                </div>

                <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 mx-auto pt-3 pb-8">

                    {albumsFiltrados.map(a => <div className="col-span-1 text-center font-body font-semibold" key={a._id}> <NavLink to={{ pathname: '/ampliacion', aboutProps: { album: a } }}><div className="h-40 mb-2" style={{ background: `url(${a.fotos[0].source})  center/cover` }} ></div>
                        {deportes.map(d => (d._id === a.deporte) ? <p key={d._id} className="text-xs tracking-wide opacity-75 uppercase">{d.nombre}</p> : "")}
                        <p className="text-base font-semibold">{a.titulo}</p>
                        <p className="text-sm font-normal opacity-75">{convertirAString(a.fecha)}</p>

                    </NavLink></div>)}
                </div>
            </div>
            <Footer />
        </div >


    )
}
const mapStateToProps = (state) => ({
    albums: state.albums,
    deportes: state.deportes,

})


export default connect(mapStateToProps)(Galeria)
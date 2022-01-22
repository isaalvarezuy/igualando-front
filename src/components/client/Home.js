import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import SociaVitalicia from './SociaVitalicia'
import NuestraGaleria from './NuestraGaleria'
import Navbar from './Navbar'
import Stats from './Stats'
import Footer from './Footer';
import Quienes from './Quienes';
import Form from './Form';
import Video from './Video'

const Home = (props) => {

    const [navbarBg, setNavbarBg] = useState("transparent");

    useEffect(() => {


        window.onscroll = () => {
            let quienes = document.getElementById("quienes");
            if (quienes !== undefined && quienes !== null) {
                let y = quienes.offsetTop;
                if (window.pageYOffset > y) {
                    setNavbarBg("solid")
                } else {
                    setNavbarBg("transparent")
                }
            }

        }
        if (props.location.aboutProps !== undefined) {
            console.log(props)
            let clickeadoId = props.location.aboutProps.id;
            let clickeado = document.getElementById(clickeadoId);
            let y = clickeado.offsetTop;

            if (window.matchMedia("(max-width: 640px)")) {
                y = y - 70;
            }

            window.scrollTo({ top: y, behavior: 'smooth' })
            props.location.aboutProps = undefined;

        }
    })



    return (
        <div >
            <Navbar navbarBg={navbarBg} />
            <Video onScroll={(e) => { console.log(e) }} />
            <div id="quienes" >
                <Quienes onScroll={(e) => { console.log(e) }} />
                <Stats />
            </div>
            <div id="sociasVitalicias">
                <SociaVitalicia />
            </div>
            <div id="galeria">
                <NuestraGaleria />
            </div>
            <div id="sumate">
                <Form />
            </div>
            <Footer />
        </div >
    )
}

const mapStateToProps = (state) => ({

})


export default connect(mapStateToProps)(Home)
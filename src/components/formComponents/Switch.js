import React, { useState, useEffect } from 'react'
import './Switch.css'
const Switch = (props) => {

    let toggle = false;

    return (
        <div id="switch" className="flex mb-2">

            <label className="switch mt-2 ">
                <input type="checkbox" onClick={e => {

                    if (toggle === false) {
                        toggle = true

                    } else {
                        toggle = false

                    }
                    props.funcion(toggle)
                }} />
                <span className="slider round"></span>
            </label>
            <span className="font-body ml-2 self-center">Modo oscuro</span>
        </div>

    )
}

export default Switch

import React from 'react'

const Popup = (props) => {
    console.log(props)
    return (
        <div className=" left-0 fixed h-full w-full flex items-center jusitfy-center z-50 bg-black bg-opacity-60">
            <div className="w-10/12 mx-auto bg-white text-black md:w-96  top-20  rounded-md shadow-md p-8 text-center">
                <h2 className="font-body font-semibold text-lg mb-4">Borrar album</h2>
                <p className="opacity-70 text-base">Estas por borrar  <span className="font-semibold">"{props.nombreBorrar}"</span>¿Deseas continuar?</p>
                <div className="flex flex-row justify-between mt-4">
                    <button className="mx-1 flex-1 text-center block md:inline-block bg-white border border-orange py-3 px-8 rounded-3xl text-orange text-base hover:border-orangelight hover:text-orangelight transition-all" onClick={props.cerrarPopup}>Cancelar</button>
                    <button className=" mx-1 flex-1 text-center block md:inline-block bg-orange py-3 px-8 rounded-3xl text-white text-base hover:bg-orangelight transition-all" onClick={(e) => { props.borrarAlbum(e) }} data-id={props.idBorrar}>Borrar</button>
                </div>
            </div>
        </div>
    )
}

export default Popup

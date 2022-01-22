import React, { useEffect, useState } from 'react'


const Alerta = (props) => {

    let { mensaje, tipo, visible, duracion } = props

    const [width, setWidth] = useState(400)
    useEffect(() => {

        const timer = setTimeout(() => {
            props.funcion(0)
        }, duracion);
        return () => clearTimeout(timer);

    }, [visible]);

    useEffect(() => {
        var x = window.matchMedia("(max-width: 767px)")
        if (x.matches) {
            setWidth(320)
        } else {
            setWidth(400)
        }
    }, [])

    return (
        <div className="duration-500 fixed  bottom-8 mx-auto" style={{ width: `${width}px`, left: `calc(50% - ${width / 2}px)`, opacity: `${visible}`, zIndex: 9999999 }}>
            {(tipo === "error") ?
                <div className="rounded-md shadow-sm bg-red-500 w-full p-4 w-10/12 flex flex-row items-center ">

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="ml-3 w-full">
                        <p className="text-sm font-medium text-white ">{mensaje}</p>
                    </div>
                    <button onClick={() => props.funcion(0)} className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg></button>

                </div> :
                (tipo === "loading") ?
                    <div className="rounded-md shadow-sm bg-blue-500 w-full p-4 w-10/12 flex flex-row items-center ">

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <div className="ml-3 w-full">
                            <p className="text-sm font-medium text-white ">{mensaje}</p>
                        </div>
                        <button onClick={() => props.funcion(0)} className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg></button>

                    </div> :
                    (tipo === "exito") ?
                        <div className="rounded-md shadow-sm bg-green-500 w-full p-4 w-10/12 flex flex-row items-center ">

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div className="ml-3 w-full">
                                <p className="text-sm font-medium text-white ">{mensaje}</p>
                            </div>
                            <button onClick={() => props.funcion(0)} className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg></button>

                        </div> : ""

            }


        </div>

    )
}

export default Alerta

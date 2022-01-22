import React, { useState, useEffect } from 'react'

const Input = (props) => {

    let { label, type, defaultValue, fotoSubida, opciones, placeholder, contactForm, bgColor } = props;
    const [filename, setFilename] = useState("")
    const [fileCount, setFileCount] = useState(0)



    return (

        <div className="mb-6 col-span-1 group ">
            {(type === "text" && contactForm === undefined || type === "date" || type === "password") ?
                <div className="relative border border-black border-opacity-50 group-hover:border-opacity-70 group-focus:border-opacity-100 rounded-md px-3 py-2 shadow-sm  ">
                    <label htmlFor={label} className="absolute -top-2 left-2 bg-black-50 -mt-px inline-block px-1  text-xs font-medium text-black text-opacity-60 group-hover:text-opacity-80 group-focus:text-opacity-100 ">{label}</label>
                    <input type={type} onChange={(e) => { props.funcion(e.target.value) }} required name={label} id={label} className=" bg-black-50 block w-full border-0 p-0 text-black placeholder-black placeholder-opacity-50 focus:ring-0 ring-opacity-0 focus:outline-none sm:text-sm" />
                </div> :
                (type === "textarea" && contactForm === undefined) ?
                    <div className="relative border border-black border-opacity-50 group-hover:border-opacity-70 group-focus:border-opacity-100 rounded-md px-3 py-2 shadow-sm  ">
                        <label htmlFor={label} className="absolute -top-2 left-2 bg-black-50 -mt-px inline-block px-1  text-xs font-medium text-black text-opacity-60 group-hover:text-opacity-80 group-focus:text-opacity-100 ">{label}</label>
                        <textarea onChange={(e) => { props.funcion(e.target.value) }} name={label} id={label} className="block bg-black-50  w-full border-0 p-0 text-black placeholder-black placeholder-opacity-50 focus:ring-0 ring-opacity-0 focus:outline-none sm:text-sm resize-none"></textarea>
                    </div> :
                    (type === "file") ?

                        <div className=" w-full group  px-4 py-3 border-2 border-black border-opacity-40 group-hover:border-opacity-100 border-dashed rounded-md">
                            <div className=" flex flex-row  justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-current group-hover:opacity-100 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                </svg>
                                <div className="flex flex-row ml-2 items-baseline">
                                    <div className="flex text-sm text-gray-600 text-center ">
                                        <label className="relative cursor-pointer bg-transparent rounded-md font-medium text-black text-opacity-50 group-hover:text-opacity-100 focus-within:outline-none ">
                                            <span>{label}</span>
                                            <input type="file" className="sr-only" onChange={(e) => {
                                                props.funcion(e);
                                                setFilename(e.target.files[0].name)
                                            }} />
                                        </label>
                                    </div>
                                    <p className="text-xs text-black text-opacity-50 ml-2">
                                        {filename}
                                    </p>
                                </div>
                            </div>

                        </div> :
                        (type === "number") ?
                            <div className="relative border border-black border-opacity-50 group-hover:border-opacity-70 group-focus:border-opacity-100 rounded-md px-3 py-2 shadow-sm  ">
                                <label htmlFor={label} className="absolute -top-2 left-2 bg-black-50 -mt-px inline-block px-1  text-xs font-medium text-black text-opacity-60 group-hover:text-opacity-80 group-focus:text-opacity-100 ">{label}</label>
                                <input defaultValue={defaultValue} type={type} onChange={(e) => { props.funcion(parseInt(e.target.value)) }} required name={label} id={label} className=" bg-transparent block w-full border-0 p-0 text-black placeholder-black placeholder-opacity-50 focus:ring-0 ring-opacity-0 focus:outline-none sm:text-sm" />
                            </div> :
                            (type === "select") ?
                                <div className="relative border border-black rounded-md px-3 py-2 shadow-sm border-opacity-40 hover:border-opacity-70 focus:border-opacity-100 ">
                                    <label className="absolute -top-2 left-2 bg-black-50 -mt-px inline-block px-1  text-xs font-medium text-black">{label}</label>
                                    <select onChange={e => props.funcion(e.target.value)} className=" bg-transparent block w-full border-0 p-0 text-black placeholder-black placeholder-opacity-50 focus:ring-0 ring-opacity-0 focus:outline-none sm:text-sm">
                                        {defaultValue !== undefined ?
                                            <option value="todos" >{defaultValue}</option> : ""}
                                        {opciones.map(op => <option key={op._id} value={op._id}>{op.nombre}</option>)}
                                    </select>
                                </div> :
                                (type === "multiple files") ?

                                    <div className=" w-full group  px-4 py-3 border-2 border-black border-opacity-40 group-hover:border-opacity-100 border-dashed rounded-md">
                                        <div className=" flex flex-row  justify-center items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-current group-hover:opacity-100 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                            </svg>
                                            <div className="flex flex-row ml-2 items-baseline">
                                                <div className="flex text-sm text-gray-600 text-center ">
                                                    <label className="relative cursor-pointer bg-black-50 rounded-md font-medium text-black text-opacity-50 group-hover:text-opacity-100 focus-within:outline-none ">
                                                        <span>{label}</span>
                                                        <input multiple type="file" className="sr-only" onChange={(e) => {
                                                            props.funcion([...e.target.files]);
                                                            setFileCount(e.target.files.length)
                                                        }} />
                                                    </label>
                                                </div>
                                                {(fileCount !== 0) ?
                                                    <p className="text-xs text-black text-opacity-50 ml-2">
                                                        {`${fileCount} imágenes`}
                                                    </p> : ""}
                                            </div>
                                        </div>

                                    </div> :
                                    (type === "search") ?
                                        <div className="relative border border-black border-opacity-50 group-hover:border-opacity-70 group-focus:border-opacity-100 rounded-md px-3 py-2 shadow-sm  ">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">

                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black text-opacity-50 group-hover:text-opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                </svg>
                                            </div>

                                            <input placeholder={label} type="text" onChange={(e) => { props.funcion(e.target.value) }} required name={label} id={label} className=" pl-8 block w-full border-0 p-0 text-black placeholder-black placeholder-opacity-50 focus:ring-0 ring-opacity-0 focus:outline-none sm:text-sm" />
                                        </div>
                                        : (contactForm === true && type !== "textarea") ?
                                            <div className="relative border border-black border-opacity-50 group-hover:border-opacity-70 group-focus:border-opacity-100 rounded-md px-3 py-2 shadow-sm  ">
                                                <label htmlFor={label} className=" bg-orange absolute -top-2 left-2  -mt-px inline-block px-1  text-xs font-medium text-black text-opacity-60 group-hover:text-opacity-80 group-focus:text-opacity-100 ">{label}</label>
                                                <input type={type} onChange={(e) => { props.funcion(e.target.value) }} placeholder={props.placeholder} required name={label} id={label} className=" bg-orange block w-full border-0 p-0 text-black placeholder-black placeholder-opacity-50 focus:ring-0 ring-opacity-0 focus:outline-none sm:text-sm" />
                                            </div> : (type === "textarea" && contactForm === true) ?
                                                <div className="relative border border-black border-opacity-50 group-hover:border-opacity-70 group-focus:border-opacity-100 rounded-md px-3 py-2 shadow-sm  ">
                                                    <label htmlFor={label} className=" bg-orange absolute -top-2 left-2  -mt-px inline-block px-1  text-xs font-medium text-black text-opacity-60 group-hover:text-opacity-80 group-focus:text-opacity-100 ">{label}</label>
                                                    <textarea placeholder={placeholder} onChange={(e) => { props.funcion(e.target.value) }} name={label} id={label} className="bg-orange block w-full border-0 p-0 text-black placeholder-black placeholder-opacity-50 focus:ring-0 ring-opacity-0 focus:outline-none sm:text-sm resize-none"></textarea>
                                                </div> : ""

            }

        </div>

    )
}

export default Input

import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
    let navbarBg = props.navbarBg
    const [menu, setMenu] = useState("cerrado")
    const toggleMenu = () => {
        if (menu === "cerrado") {
            setMenu("abierto");
        } else {
            setMenu("cerrado")
        }
    }
    return (
        <div className={navbarBg === "solid" ? 'bg-white w-screen fixed top-0  z-50' : 'w-screen fixed top-0  z-50'}>
            <nav className="w-full flex justify-between items-center p-4  md:py-2 md:px-14  " >
                <div className="w-full md:w-auto flex items-center justify-between" >
                    <NavLink to={{ pathname: "/" }}><svg xmlns="http://www.w3.org/2000/svg" width="57" height="56" viewBox="0 0 57 56" fill="none">
                        <path d="M7.85302 25.3496C9.62007 21.5958 13.5938 19.5882 17.4973 20.1461C18.3849 20.273 19.2689 20.5325 20.1225 20.9343C22.1424 21.8851 23.6568 23.475 24.5378 25.349C25.6663 27.7495 25.7558 30.6163 24.5378 33.2037" stroke="#F06F46" strokeWidth="5.68166" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.4811 35.0452C16.6665 36.5446 20.4644 35.1779 21.9638 31.9925L27.1044 34.4124C24.6575 39.6105 18.9744 42.2479 13.5914 41.0519L12.4848 43.4027L14.469 44.3367C15.1382 44.6517 15.4254 45.4497 15.1104 46.1189L14.2279 47.9935C13.9129 48.6628 13.1149 48.95 12.4456 48.6349L10.4615 47.7009L8.48761 51.8941C8.23557 52.4295 7.59721 52.6592 7.06179 52.4072L4.25005 51.0836C3.71463 50.8315 3.48491 50.1932 3.73695 49.6578L5.71082 45.4646L3.68812 44.5124C3.01884 44.1974 2.73169 43.3994 3.04674 42.7302L3.92917 40.8556C4.24422 40.1863 5.04218 39.8991 5.71145 40.2142L7.73415 41.1663L8.83456 38.8287C4.44259 35.4503 2.83096 29.3618 5.28784 24.1425L10.4284 26.5624C8.92894 29.7478 10.2957 33.5457 13.4811 35.0452Z" fill="#F06F46" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M27.4048 7.7278C26.4919 7.59352 25.8607 6.7446 25.9949 5.83169L26.6427 1.42783C26.777 0.514919 27.6259 -0.116277 28.5388 0.0180088C29.4518 0.152295 30.083 1.00121 29.9487 1.91412L29.3009 6.31799C29.1666 7.23089 28.3177 7.86209 27.4048 7.7278ZM19.5127 7.03654C19.7768 7.92066 20.7076 8.42329 21.5917 8.15918C22.4759 7.89508 22.9785 6.96425 22.7144 6.08013L21.4403 1.8151C21.1762 0.930975 20.2454 0.42835 19.3613 0.692456C18.4772 0.956562 17.9745 1.88739 18.2386 2.77151L19.5127 7.03654ZM30.8135 12.4547C30.6866 12.3976 30.5564 12.3576 30.4254 12.3337C25.3706 10.5821 19.8055 12.3935 16.7211 16.6351C16.2665 17.2544 15.8647 17.9264 15.5251 18.6476L15.53 18.6499C12.6941 24.6744 15.2789 31.8572 21.3034 34.6931C27.3278 37.529 34.5106 34.9442 37.3465 28.9197L37.3505 28.9216C37.4693 28.6691 37.5786 28.4146 37.6786 28.1585C37.7281 28.0883 37.7767 28.0181 37.8243 27.9479L52.3568 29.7295C52.9607 29.8035 53.5571 29.5435 53.9137 29.0506L56.4843 26.2196C56.7787 25.8127 56.8744 25.295 56.745 24.8097C56.6156 24.3244 56.2748 23.9231 55.8168 23.7169L30.8135 12.4547ZM32.2099 26.5017C33.7105 23.3139 32.3428 19.5131 29.1549 18.0125C25.9671 16.5119 22.1663 17.8797 20.6657 21.0675L20.6706 21.0698C19.1711 24.2552 20.5378 28.053 23.7232 29.5525C26.9086 31.052 30.7065 29.6853 32.206 26.4999L32.2099 26.5017ZM16.8294 12.5188C16.1957 13.1895 15.1383 13.2196 14.4675 12.5859L11.2319 9.52904C10.5611 8.89537 10.5311 7.83793 11.1648 7.1672C11.7984 6.49646 12.8559 6.46641 13.5266 7.10009L16.7623 10.1569C17.433 10.7906 17.463 11.848 16.8294 12.5188Z" fill="#031030" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.9128 23.5036C20.3127 24.1626 21.3571 25.259 21.9672 26.5567L27.109 24.1394C25.957 21.6891 23.9727 19.6058 21.3327 18.363C20.2205 17.8395 19.0639 17.4993 17.8996 17.3329C12.7959 16.6034 7.59633 19.2245 5.28304 24.1387L10.4236 26.5586C11.6444 23.9652 14.3924 22.571 17.0957 22.9574C17.7066 23.0447 18.3179 23.2236 18.9128 23.5036Z" fill="#F06F46" />
                    </svg>
                    </NavLink>
                    <div className="md:hidden" onClick={toggleMenu}>
                        {(menu === "cerrado") ?
                            <svg xmlns="http://www.w3.org/2000/svg" className="display:block h-6 w-6 stroke-current text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg> :
                            <svg xmlns="http://www.w3.org/2000/svg" className=" display:block h-6 w-6 stroke-current text-black" fill="none" viewBox="0 0 24 24" stroke="">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        }
                    </div>

                </div>
                <div className="hidden md:block">
                    <NavLink to={{ pathname: '/', aboutProps: { id: "quienes" } }} className="py-3 px-4 text-base opacity-100 hover:opacity-80 transition-all">Quiénes somos</NavLink>
                    <NavLink to={{ pathname: '/', aboutProps: { id: "sociasVitalicias" } }} className="py-3 px-4 text-base opacity-100 hover:opacity-80 transition-all">Socias Vitalicias</NavLink>
                    <NavLink to={{ pathname: '/', aboutProps: { id: "galeria" } }} className="py-3 px-4 text-base opacity-100 hover:opacity-80 transition-all">Nuestra galería</NavLink>
                    <NavLink to={{ pathname: '/', aboutProps: { id: "sumate" } }} className="text-center block md:inline-block bg-orange py-3 px-8 rounded-3xl text-white text-base hover:bg-orangelight transition-all">Sumate</NavLink>
                </div>

            </nav>
            {/* Hamburger menu */}
            {(menu === "cerrado") ?
                "" :
                <div className=" md:hidden flex flex-col w-full fixed bg-white z-50 text-center transition-all p-4" >
                    <NavLink to={{ pathname: '/', aboutProps: { id: "quienes" } }} className="py-3 px-4 text-base opacity-100 hover:opacity-80 transition-all" onClick={() => { setMenu("cerrado") }}>Quiénes somos</NavLink>
                    <NavLink to={{ pathname: '/', aboutProps: { id: "sociasVitalicias" } }} className="py-3 px-4 text-base opacity-100 hover:opacity-80 transition-all" onClick={() => { setMenu("cerrado") }}>Socias Vitalicias</NavLink>
                    <NavLink to={{ pathname: '/', aboutProps: { id: "galeria" } }} className="py-3 px-4 text-base opacity-100 hover:opacity-80 transition-all" onClick={() => { setMenu("cerrado") }}>Nuestra galería</NavLink>
                    <NavLink to={{ pathname: '/', aboutProps: { id: "sumate" } }} className="text-center block md:inline-block bg-orange py-3 px-8 rounded-3xl text-white text-base hover:bg-orangelight transition-all" onClick={() => { setMenu("cerrado") }}>Sumate</NavLink>
                </div>
            }
        </div>

    )
}

export default Navbar


export const initialState = {
    img: "",
    texto: "",
    equipos: [],
    equipo1: "",
    sociaVitalicia: { "fotoFondo": "", "fotoMain": "", "nombre": "", "profesion": "", "fecha": "", "spCode": "", "frase": "", "darkMode": false },
    noticias: { "foto": "", "titulo": "", "darkMode": false },
    proximoPartido: { "eqLocal": "", "eqVisitante": "", "fecha": "", "hora": "", "lugar": "", "fotoLocal": "", "fotoVisitante": "", "deporte": [], "darkMode": false },
    finalPartido: { "eqLocal": "", "eqVisitante": "", "pLocal": "", "pVisitante": "", "foto": "", "deporte": [], "darkMode": false },
    albums: [],
    deportes: [],
    integrantes: [
        { nombre: "Cecilia Piazza", rol: "Periodista deportivo", chiste: "No presenta ni un límite", foto: "https://res.cloudinary.com/isita/image/upload/v1636928040/static/Avatars_web_2x_pk94de.png" },
        { nombre: "Alfredo Raucher", rol: "Fotográfo", chiste: "Lengua filosa", foto: "https://res.cloudinary.com/isita/image/upload/v1636928039/static/Avatars_web_2x-1_dtfftv.png" },
        { nombre: "Vicky Burisich", rol: "Periodista deportivo", chiste: "Yendo al Chuy", foto: "https://res.cloudinary.com/isita/image/upload/v1636928039/static/Avatars_web_2x-2_nywwjl.png" },
        { nombre: "Facundo Banchero", rol: "Periodista deportivo", chiste: "El dueño del programa", foto: "https://res.cloudinary.com/isita/image/upload/v1636928040/static/Avatars_web_2x-3_dzfe9j.png" },
        { nombre: "Mariana Alvarez", rol: "Periodista deportivo", chiste: "Y los resultados son...", foto: "https://res.cloudinary.com/isita/image/upload/v1636928040/static/Avatars_web_2x-4_kskzfv.png" },
    ],
    usuarioLogueado: "",
    url: "http://localhost:3001",
    fondos: [
        { id: 1, src: "https://res.cloudinary.com/isita/image/upload/v1641861366/static/fondos/Property_1_2_cas5lb.png" },
        { id: 2, src: "https://res.cloudinary.com/isita/image/upload/v1641861366/static/fondos/Property_1_3_wu8a5t.png" },
        { id: 3, src: "https://res.cloudinary.com/isita/image/upload/v1641861366/static/fondos/Property_1_4_cs2cal.png" },
        { id: 4, src: "https://res.cloudinary.com/isita/image/upload/v1641861366/static/fondos/Property_1_1_nk4ghu.png" },
        { id: 5, src: "https://res.cloudinary.com/isita/image/upload/v1641861366/static/fondos/Property_1_Variant5_cp76k0.png" }
    ],
    usuarios: [],
    storyEquipo: { integrante: "", darkMode: false, descripcion: "" }

}

/* https://igualando.herokuapp.com/ */
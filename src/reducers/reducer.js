import { initialState } from '../store/initialState';
import { addStaticComposition } from 'remotion/dist/register-root';

export const reducer = (state = initialState, action) => {
    console.log(state, action);
    switch (action.type) {
        case "PRUEBA":
            return state
        case "DATOS_ENVIADOS":
            return { ...state, img: action.payload.img, texto: action.payload.texto }

        case "LISTAR_EQUIPOS":
            return { ...state, equipos: action.payload }

        case "LISTAR_ALBUMS":
            return { ...state, albums: action.payload }

        case "LISTAR_DEPORTES":
            return { ...state, deportes: action.payload }

        case "AGREGAR_ALBUM":
            return { ...state, albums: [...state.albums, action.payload] }

        case "AGREGAR_USUARIO":
            return { ...state, usuarios: [...state.usuarios, action.payload] }

        case "ELIMINAR_ALBUM":
            let albumsNuevos = state.albums.filter(album => album._id !== action.payload._id);
            return { ...state, albums: albumsNuevos }

        case "ELIMINAR_USUARIO":
            let usuariosNuevos = state.usuarios.filter(usuario => usuario._id !== action.payload._id);
            return { ...state, usuarios: usuariosNuevos }

        case "EQUIPOS_ELEGIDOS":
            return { ...state, equipo1: action.payload }

        case "SOCIA_VITALICIA":
            return { ...state, sociaVitalicia: { "fotoMain": action.payload.fotoMain, "fotoFondo": action.payload.fotoFondo, "nombre": action.payload.nombre, "profesion": action.payload.profesion, "fecha": action.payload.fecha, "spCode": action.payload.spCode, "frase": action.payload.frase, "darkMode": action.payload.darkMode } }
        case "NOTICIAS":
            return { ...state, noticias: { "foto": action.payload.foto, "titulo": action.payload.titulo, "darkMode": action.payload.darkMode } }


        case "PROXIMO_PARTIDO":
            return { ...state, proximoPartido: { "eqLocal": action.payload.eqLocal, "eqVisitante": action.payload.eqVisitante, "fecha": action.payload.fecha, "hora": action.payload.hora, "lugar": action.payload.lugar, "fotoLocal": action.payload.fotoLocal, "fotoVisitante": action.payload.fotoVisitante, "deporte": action.payload.deporte, "darkMode": action.payload.darkMode } }

        case "FINAL_PARTIDO":
            return { ...state, finalPartido: { "eqLocal": action.payload.eqLocal, "eqVisitante": action.payload.eqVisitante, "pLocal": action.payload.pLocal, "pVisitante": action.payload.pVisitante, "foto": action.payload.foto, "deporte": action.payload.deporte, "darkMode": action.payload.darkMode } }

        case "STORY_EQUIPO":
            return { ...state, storyEquipo: { "integrante": action.payload.integrante, "darkMode": action.payload.darkMode, "descripcion": action.payload.descripcion } }

        case "SESION_INICIADA":
            return { ...state, usuarioLogueado: action.payload }

        case "CAMBIAR_CONTRASENA":
            return { ...state, usuarioLogueado: action.payload }

        case "MOSTRAR_USUARIO":
            let index = state.usuarios.findIndex((usuario) => usuario._id === action.payload._id)
            return {
                ...state,
                usuarios: state.usuarios.map(
                    (usuario, i) => i === index ? { ...usuario, visible: true }
                        : usuario
                )
            }

        case "OCULTAR_USUARIO":
            let index2 = state.usuarios.findIndex((usuario) => usuario._id === action.payload._id)
            return {
                ...state,
                usuarios: state.usuarios.map(
                    (usuario, i) => i === index2 ? { ...usuario, visible: false }
                        : usuario
                )
            }




        case "LISTAR_USUARIOS":
            return { ...state, usuarios: action.payload }

        case "CERRAR_SESION":
            return { ...state, usuarioLogueado: "" }

        default:
            return state
    }

}

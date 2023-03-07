/*
    Se importa NavLink desde react-router-dom para poder trabajar las rutas y aprovechar la propiedad 
    isActive para mutar el documento cuando la ruta indicada este activa.
*/
import { NavLink } from "react-router-dom"

//Funcion que define el componente Menu
function Menu() {

    // Funcion que retorna un objeto: (parametro)=>({key: value})
    // Para cambiar de color si la ruta esta activa
    //Nota: isActive es una palabra reservada.
    let cambiarColor = ({isActive}) =>({
        color: isActive ? "rgb(5, 26, 44)" : "rgb(189, 224, 255)",
        textDecoration:"none",
        fontSize: "20px"
    })


    return (
        // Para asignar estilos en la propiedad style se hacen dentro de {{}}
        <nav style={{display:"flex", justifyContent:"flex-end",gap:"10px"}}>
            <span>
                <NavLink to="/" style={cambiarColor}>Home</NavLink>
            </span>

            <span>
                <NavLink to="/mi-ruta" style={cambiarColor}>Mi Ruta</NavLink>
            </span>

            {/* <span>
                <NavLink to="/usecontext" style={cambiarColor}>useContext</NavLink>
            </span> */}

            <span>
                <NavLink to="/use-state" style={cambiarColor}>useState</NavLink>
            </span>

            <span>
                <NavLink to="/use-effect" style={cambiarColor}>useEffect</NavLink>
            </span>
            
            <span>
                <NavLink to="/use-ref" style={cambiarColor}>useRef</NavLink>
            </span>
            
            <span>
                <NavLink to="/api-fetch" style={cambiarColor}>API-Fetch</NavLink>
            </span>

            <span>
                <NavLink to="/api-key-fetch" style={cambiarColor}>API-Key-Fetch</NavLink>
            </span>
        </nav>
    )
}

export default Menu;
import ComponenteParrafo from "../components/Parrafo";
import Input from "../components/Input";

const MiRuta = () => {
    return (
        <>
            <h1>Hola Mundo, esta es mi primera ruta!</h1>
            <ComponenteParrafo algo="El contenido de este parrafo viaja a traves de propiedad"/>
            <ComponenteParrafo algo="El contenido de este otro parrafo tambien viaja a traves de propiedad"/>
            <ComponenteParrafo algo="Inclusive, el contenido de este otro parrafo, tambien viaja a traves de propiedad, y es el mismo componente."/>
            <br/>
            <a href="/">Ir a Home"</a>
            <br/>
            <br/>
            <ComponenteParrafo algo="Formulario con props reutilizando el mismo input"/>
            <Input type="text" placeholder="Nombre"/>
            <br/>
            <Input type="mail" placeholder="Correo"/>
            <br/>
            <Input type="password" placeholder="Contraseña"/>
        </>
    );
}

export default MiRuta;
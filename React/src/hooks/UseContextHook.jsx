// import { useState, createContext } from "react";


// const UserContext = createContext()

// const UseContextHook = function(){
//     const [user, setUser] = useState("Diego Rodriguez");
//     return ( 
//         <UserContext.Provider value={user}>
//             <h1>{`Hello ${user}!`}</h1>
//             {/* <Component2 user={user} /> */}
//         </UserContext.Provider>
//     );
// }

// export default UseContextHook;




import { createContext, useState, useContext } from 'react';

// Crear un contexto
const Contexto = createContext();

// Crear un proveedor
function ProveedorDeContexto(props) {
    const [cuenta, setCuenta] = useState(0);

    return (
        <Contexto.Provider value={{ cuenta, setCuenta }}>
            {props.children}
        </Contexto.Provider>
    );
}

// Crear un componente consumidor
function Consumidor() {
    const { cuenta, setCuenta } = useContext(Contexto);

    return (
        <div>
            <h1>Contador: {cuenta}</h1>
            <button onClick={() => setCuenta(cuenta + 1)}>Incrementar</button>
        </div>
    );
}

// Utilizar el proveedor y el consumidor en la aplicación
function UseContextHook() {
    return (
        <ProveedorDeContexto>
            <Consumidor />
        </ProveedorDeContexto>
    );
}

export default UseContextHook;
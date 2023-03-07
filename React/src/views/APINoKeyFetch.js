import React, { useState, useEffect } from "react";

function APINoKeyFetch() {
    const [personajes, serPersonajes] = useState([]);

    useEffect(() => {
        //Funcion nativa para realizar peticiones HTTP
        fetch("https://rickandmortyapi.com/api/character")
            //Se maneja la promesa son .then para convertir los datos en JSON
            .then(response => response.json())
            //
            .then(datos => {
                serPersonajes(datos.results);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <h1>Api Fetch (No-Key)</h1>
            <ul>
                {personajes.map(protagonista => (
                    <li key={protagonista.id}>
                        Nombre: {protagonista.name}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default APINoKeyFetch;
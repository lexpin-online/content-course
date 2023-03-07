import { useEffect, useState } from "react";

const ApiWKey = () => {

    // Primeramente crearemos una constante con todas las opciones de conexión a la API,
    // por ejemplo el método ‘GET’ es para obtener datos. Y los headers contienen información 
    // como el servidor de la api y la KEY, por motivos de seguridad quite la KEY de la API.
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'xxxxx',
            'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
        }
    };
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("link", options) //Ingresamos el URL como primer parámetro y como segunda la constante de opciones
            .then((res) => res.json())
            .then((data) => setData(data));
    },);

    if (data) { console.log(data) } //El if es para ejecutar el código únicamente si la API trae datos
}

export default ApiWKey;
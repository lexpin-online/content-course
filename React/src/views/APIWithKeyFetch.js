import React, { useState, useEffect } from "react";

function APIWithKeyFetch() {
    const [pelicula, setPelicula] = useState({});

    useEffect(() => {
        const idDePelicula = "315162"
        const llaveDeApi = "1a8c3b228d63655b9dbd957026da4b84";
        const idioma = "es-MX";

        fetch(`https://api.themoviedb.org/3/movie/${idDePelicula}?api_key=${llaveDeApi}&language=${idioma}`)
            .then(response => response.json())
            .then(datos => {
                setPelicula(datos);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    const estilosParrafo={
        width:"500px",
        height:"70px",
        overflow:"scroll",
        overflowX:"hidden",
        marginBottom:"20px"
    }
    const estilosImagen = {
        borderRadius:"10px",
        width:"150px",
        marginLeft: "150px"
    }

    return (
        <div>
            <h1>{pelicula.title}</h1>
            <p style={(estilosParrafo)}>{pelicula.overview}</p>
            <img style={(estilosImagen)} src={"https://image.tmdb.org/t/p/w500/"+pelicula.poster_path} alt="Poster"/>
        </div>
    );
}

export default APIWithKeyFetch;
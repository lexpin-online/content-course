const buscarPeliculas = async ()=> {
    try{
        //Realizando peticion HTTP/GET
        const busqueda = await fetch("https://api.themoviedb.org/3/movie/591?api_key=1a8c3b228d63655b9dbd957026da4b84&language=es-MX");
        // console.log(busqueda);

        //Convirtiendo los datos en formato JSON
        const datos = await busqueda.json();
        // console.log(datos)


        // Validar status y preparar respuestas
        // Si todo salio bien (status:200)
        if(busqueda.status === 200){
            //Obteniendo informacion especifica
            console.log("Titulo: " + datos.title);
            console.log("Sinopsis: " + datos.overview);
            
            //Obteniendo Generos de un array de objetos
            const generos = datos.genres;
            let genero=[];
            for(let objeto in generos){ genero.push(generos[objeto].name); }
            console.log("Generos: " + genero);
        }//Si ocurrio un error de autenticacion (status:401)
        else if(busqueda.status === 401){
        
            console.log("ERROR 401 - No se pudo comprobar la key")
        
        }//Si la busqueda no encontro el recurso (status:404)
        else if(busqueda.status === 404){
        
            console.log("ERROR 404 - No se encontro lo que buscabas.")
        
        }
    
    }catch(error){
        console.log("Error de tipo / " + error);
    }finally{
        console.log("\n\t\t\t\t\t** Proceso finalizado **")
    }
}

buscarPeliculas();
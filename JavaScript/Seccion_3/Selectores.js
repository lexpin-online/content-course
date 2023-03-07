/*
    Los selectores permiten seleccionar elementos del DOM (elementos HTML) para manipularlos en una página web.
    los selectores comunes son:

    Seleccion individual
    .getElementById("id"): selecciona un elemento con un id específico.

    Seleccion multiple
    .getElementsByName("name"): selecciona todos los elementos que contengan un name especifico.
    .getElementsByClassName("class"): selecciona todos los elementos con una clase específica.
    .getElementsByTagName("div"): selecciona todos los elementos con un nombre de etiqueta específico.



    Sintaxis:

    document" es el objeto principal del DOM(Modelo de Objeto del Documento) que representa el 
    documento HTML actual en una página.


    Seleccion individual
    document.getElementById("id");

    Seleccion multiple
    document.getElementsByName("name");
    document.getElementsByClassName("class");
    document.getElementsByTagName("div");


    Los selectores se emplean junto a metodos para realizar diferentes acciones.
*/


// Guardando elemento de id "parrafo" en una variable llamada parrafo
// esta variable se usa en varias ocaciones mas adelante.
let parrafo = document.getElementById("parrafo");

//Medotos usados con selectores:

// elemento.getAttribute: obtiene el(los) valor(es) del atributo indicado en el elemento seleccionado.
console.log("El id del elemento es: " + parrafo.getAttribute("id"));



// elemento.setAttribute: establece un atributo con su valor en el elemento seleccionado.
/*
    parrafo.setAttribute("style","color: greenyellow");
    console.log("El atributo style es: " + parrafo.getAttribute("style"))
*/



// elemento.innerHTML: obtiene o establece el contenido HTML de un elemento seleccionado.

/*
    parrafo.innerHTML = "Este parrafo fue modificado con el selector .getElementById() y el medodo .innerHTML."

    //Obteniendo contenido:
    console.log("El contenido del elemento es:\n" + parrafo.innerHTML)
*/



// elemento.style: permite acceder y manipular las propiedades CSS del elemento seleccionado.
/*
    parrafo.style.fontFamily = "Courier New"
*/






// elemento.classList: permite agregar(add), eliminar(remove) y verificar(contains) 
// las clases CSS del elemento seleccionado.

/* 77 - 108
//Comprobar si existe clase "text-white"
console.log(
    (parrafo.classList.contains("text-white") 
        ? "El elemento tiene la clase indicada" 
        : "El elemento no tiene la clase indicada"
    )
);


//Removiendo clase "text-white"
parrafo.classList.remove("text-white");
//Comprobar si existe clase "text-white"
console.log(
    (parrafo.classList.contains("text-black") 
        ? "El elemento tiene la clase indicada" 
        : "El elemento no tiene la clase indicada"
    )
);


//Añadiendo Clase "text-white"
parrafo.classList.add("text-white");
//Comprobar si existe clase "text-white"
console.log(
    (parrafo.classList.contains("text-white") 
        ? "El elemento tiene la clase indicada" 
        : "El elemento no tiene la clase indicada"
    )
);

*/









// elemento.appendChild: agrega un nodo hijo a un elemento seleccionado.
/* 119 - 133*/
//Crear un nuevo elemento (Sin contenido aun)
let nuevoParrafo = document.createElement("p");
let nuevoParrafo2 = document.createElement("p");

//agregar contenido a elementos
nuevoParrafo.textContent="Hola soy un parrafo creado con JavaScript";
nuevoParrafo2.textContent="Hola soy otro parrafo creado con JavaScript";

//Seleccionar el contenedor(div) para agregar el parrafo anteriormente creado y rellenado.
let caja = document.getElementsByName("caja")[0]; // 0 hace referencia a la primera coincidencia con el name "caja"

//Añadir a la caja el parrafo recien creado.
caja.appendChild(nuevoParrafo);
caja.appendChild(nuevoParrafo2);





// elemento.removeChild: elimina un nodo hijo de un elemento seleccionado.
/*
    caja.removeChild(nuevoParrafo2);
*/
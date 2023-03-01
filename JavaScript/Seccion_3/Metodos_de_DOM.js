/* 
    Los métodos de document en JavaScript son funciones integradas que se pueden utilizar para interactuar con 
    el documento HTML en una página web.
*/



// createElement(element): este método permite crear un nuevo elemento HTML. 
// Ejemplo:
let nuevoDiv = document.createElement("div");




// appendChild(node): este método permite agregar un nodo como último hijo de un elemento padre. 
// Ejemplo:
let parrafo = document.createElement("p");
let caja = document.getElementById("caja");
parrafo.innerHTML = "Contenido nuevo";
caja.appendChild(parrafo);



// removeChild(node): este método permite eliminar un nodo hijo de un elemento padre. 
// Ejemplo:
let element = document.getElementById("myElement");
let child = element.firstChild;
element.removeChild(child);
// replaceChild(newNode, oldNode): este método permite reemplazar un nodo hijo existente con uno nuevo en un elemento padre. Ejemplo:


// let element = document.getElementById("myElement");
let oldChild = element.firstChild;
let newChild = document.createElement("p");
newChild.innerHTML = "Contenido nuevo";
element.replaceChild(newChild, oldChild);
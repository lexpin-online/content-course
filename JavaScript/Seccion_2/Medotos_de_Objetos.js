// Los métodos de objetos son funciones que se pueden llamar en un objeto específico. 
// En JavaScript, los métodos son propiedades de un objeto que tienen como valor una función.


let obj = {
    nombre: "Daniela",
    edad: 27,
    pais: "Venezuela"
}

//Object.keys(objeto): Devuelve un arreglo de las propiedades enumerables de un objeto.
console.log(Object.keys(obj));




// Object.values(objeto): Devuelve un arreglo de los valores de las propiedades enumerables de un objeto.
console.log(Object.values(obj));





//Object.assign(objeto-destino, objeto-a-copiar1, objeto-a-copiar2, ...etc): 
//Copia las propiedades de uno o más objetos a un objeto destino.
//Si encuantra propiedades que coincidan, estas seran sobreescritas.
let obj2 = {
    nombre: "Diana",
    sexo: "Femenino",
    ubicacion: "Chile"
}
console.log(Object.assign(obj, obj2));




//.hasOwnProperty("nombre"): Devuelve un valor booleano (true/false) 
//Si un objeto tiene una propiedad específica.
console.log(obj.hasOwnProperty("nombre"));


//.toString(): Este metodo devuelve una cadena que representa al objeto.
let objetoString = (obj.toString());
objetoString;


obj.valueOf();  // Devuelve el valor primitivo de un objeto.
obj.isPrototypeOf(obj);  // Devuelve un valor booleano que indica si un objeto es prototipo de otro objeto.
obj.propertyIsEnumerable(prop);  // Devuelve un valor booleano que indica si una propiedad es enumerable.
Array.prototype.forEach(callback);  // Ejecuta una función dada en cada elemento de un arreglo.
Array.prototype.map(callback);  // Crea un nuevo arreglo con los resultados de la función dada aplicada a cada elemento del arreglo original.
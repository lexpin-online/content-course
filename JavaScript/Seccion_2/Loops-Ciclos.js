/*
    Los bucles pueden ejecutar un bloque de código varias veces. 
    JavaScript admite diferentes tipos de bucles.
*/

let ciclos = 5;
let productos = ["Celular","TV","Microfono","Estereo","Proyector","Teclado"];



// for - recorre un bloque de código un numero determinado de veces
for(i = 0; i < ciclos; i++ ){
    console.log( i );
    console.log(`Ciclo: ${i} `);
}



// for/of - Recorre los valores de un array.
for(let producto of productos){
    console.log(`${producto}`);
    console.log(`${productos.indexOf(producto)})- ${producto}`);
}



// for/in - Recorre las propiedades de un objeto de forma ordenada, se utiliza a menudo para
// recorrer objetos que NO son arrays.
// Sin embargo es posible recorrer un array con for in, pero el resultado no 
// serian los valores sino los indices. (Linea 86)
let persona = {
    nombre: "Samuel",
    edad: 20,
    ciudad: "Santiago",
    telefono: "+56934887123",
    email:"samuel@gmail.com"
};

for (propiedad in persona) {
    console.log(`Propiedad: ${propiedad} `);
    console.log(`Valor: ${persona[propiedad]} `);
    //console.log(` ${propiedad}: ${persona[propiedad]} `);
}







// Ejemplo 2(Objetos anidados)
let personas = {
    Persona1:{
        nombre: "Samuel",
        edad: 20,
        ciudad: "Santiago",
        telefono: "+56934887123",
        email:"samuel@gmail.com"
    },
    Persona2:{
        nombre: "Christian",
        edad: 24,
        ciudad: "Caracas",
        telefono: "+584129387465",
        email:"christian@gmail.com"
    },
    Persona3:{
        nombre: "Valentina",
        edad: 30,
        ciudad: "Madrid",
        telefono: "+344129387465",
        email:"valentina@gmail.com"
    }
};

console.log( personas.Persona1.nombre );
console.log( personas.Persona2.nombre );
console.log( personas.Persona3.nombre );

for(let propiedad in personas) {
    console.log(`Propiedad: ${propiedad} `);
    //   Vuelta: 1           personas.Persona1.nombre             personas.Persona1.edad                    personas.Persona1.ciudad                   personas.Persona1.telefono                    personas.Persona1.email             
    //   Vuelta: 2           personas.Persona2.nombre             personas.Persona2.edad                    personas.Persona2.ciudad                   personas.Persona2.telefono                    personas.Persona2.email             
    //   Vuelta: 3           personas.Persona3.nombre             personas.Persona3.edad                    personas.Persona3.ciudad                   personas.Persona3.telefono                    personas.Persona3.email             
    console.log(`Me llamo: ${personas[propiedad].nombre} Tengo: ${personas[propiedad].edad} años Vivo en: ${personas[propiedad].ciudad} Mi numero es: ${personas[propiedad].telefono} Mi correo es: ${personas[propiedad].email}`);
};






// for in esta pensado para recorrer objetos, pero se puede usar para obtener indices de un array.
// Ejemplo:
let nombres = ["Gabriel","Roger","Alexnis","Maria","Nelson"];
for(let nombre in nombres){
    console.log(`indice: ${nombre}`);
}









// while - Recorre un bloque de código mientras se cumpla una la condicion indicada
// Ejemplo 1
let vueltas = 10
let rep = 1;

while( rep <= vueltas ){
    console.log(rep);
    rep++;
}

// Ejemplo 2
let repeticiones = 1;

while( repeticiones <= vueltas ){
    console.log(`4 x ${repeticiones} = ${4*repeticiones}`);
    repeticiones++;
}





// do/while - Recorre un bloque de código 1 vez, luego valida si se cumple la condición específica para repetir el ciclo o no.

// Ejemplo 1
let vuelta = 7;
let x = 0;

do{
    console.log( x );
    x++
}while(x < vuelta);



// Ejemplo 2 (Llenar con informacion un array mientras la respuesta sea si)
let numeros = [];
let respuesta = "si";
/*
do{
    agregar = prompt("Agregar valor");
    numeros.push(agregar);
    alert(numeros);
    respuesta = prompt("¿Desea continuar? si - no")
}while(respuesta === "si");
*/







//   ******  Realizar en Clase  ******
//Realizar una funcion que permita saludar a cada alumno de una lista usando while.




//Se crea la lista
let listaDeEstudiantes1 = ["Diego","Keilly","Daniela","Carlos","Ricardo","Andrea"];
let listaDeEstudiantes2 = [];






//Se crea la funcion que recibe como parametro el nombre de un estudiante
function saludar(estudiante){
    //Se imprime un mensaje que salude al estudiante recibido
    console.log(`Hola ${estudiante}!`);
}

//Se establece un loop para obtener el nombre de un estudiante mientras hayan estudiantes
while(listaDeEstudiantes1.length > 0){
    // (Opcional) Ver cuantos estudiantes quedan
    console.log(listaDeEstudiantes1.length);

    // Se extrae el primer nombre actual de la lista 1
    let nombre = listaDeEstudiantes1.shift();

    //(Opcional) Se guarda en una nueva lista
    listaDeEstudiantes2.push(nombre);

    //Llamo la funcion saludas y envio el nombre extraido
    saludar(nombre);



    // (Opcional) Imprimo el nombre extraido
    console.log(nombre);

    //(Opcional) Imprimo la lista 1 para verificar la extraccion de nombres
    console.log(listaDeEstudiantes1);
    
    //(Opcional) Imprimo la lista 2 para verificar la adicion de nombres
    console.log(listaDeEstudiantes2);
};
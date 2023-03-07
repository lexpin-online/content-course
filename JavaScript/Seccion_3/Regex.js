/* 
    ¿Qué Son Expresiones Regulares?
    Las expresiones regulares(también conocida como regexp o regex) son una secuencia de caracteres que 
    forman un patrón de búsqueda, y se utilizan para hacer comparaciones con texto.
    Son una herramienta poderosa para manipular y validar texto, y se pueden utilizar en conjunto 
    con métodos de JavaScript como .match(), .replace() etc..

    Se utilizan en muchos lenguajes de programación, incluyendo JavaScript, para verificar si una cadena de 
    texto cumple con un determinado patrón o para reemplazar texto por un patrón determinado. 
    Las expresiones regulares están escritas entre barras / y pueden incluir una combinación de caracteres 
    literales y caracteres especiales que representan un conjunto de caracteres posibles. 
    
    Por ejemplo, la expresión regular /\d{3}-\d{3}-\d{2}-\d{2}/ busca un número de celular 
    en formato 111-111-11-11.

    Se pueden usar en una gran variedad de tareas, como validación de formularios, extracción de información 
    de un párrafo etc...


    Sintaxis:
    • const regexp = /".e.t."/i;


    Coincidencias Basicas
        .       - Cualquier Caracter, excepto nueva linea
        \       - Indica que el siguiente caracter se debe tratar de manera especial o "escaparse".
        \d      - Cualquier Digitos (0-9)
        \D      - No es un Digito (0-9)
        \w      - Caracter de Palabra (a-z, A-Z, 0-9, _)
        \W      - No es un Caracter de Palabra.
        \s      - Espacios de cualquier tipo. (espacio, tab, nueva linea)
        \S      - No es un Espacio, Tab o nueva linea.

        Limites
        \b      - Limite de Palabra
        \B      - No es un Limite de Palabra
        ^       - Inicio de una cadena de texto
        $       - Final de una cadena de texto

        Cuantificadores:
        *       - Coincide con 0 o más ocurrencias del patrón anterior.
        +       - Coincide con 1 o más ocurrencias del patrón anterior.
        ?       - Coincide con 0 o 1 ocurrencia del patrón anterior.
        {3}     - Numero Exacto
        {3,4}   - Rango de Numeros (Minimo, Maximo)

        Conjuntos de Caracteres
        []      - Caracteres dentro de los brackets
        [^ ]    - Caracteres que NO ESTAN dentro de los brackets

        Grupos
        ( )     - Grupo
        |       - Uno u otro


    probar en: http://regexr.com/77g8v

*/

let parrafo = 
`Con las expresiones regulares podemos realizar busquedas de secuencias o patrones de caracteres,
un ejemplo de su uso es al detectar palabras ofensivas en un chat, o al obtener todos los numeros
telefonicos que coincidan con un patron establecido.

Ejemplo: 

Daniel Moran	
daniel_m@hotmail.com
934 123 45 67
www.dmoram.com

Migel Soto
934-234-56-78
miguel123@outlook.com
https://www.miguel.com.cl

Camila Duran
412 345 67 89
www.camila.shop
cami-duran@gmail.com`;


//Definiendo expresion regular 
// (caracter cualquiera, letra e, caracater cualquiera, letra t, caracter cualquiera)
// (g= buscar todas las coincidencias, i= sin distincion de mayusculas, m= busca en todas las lineas)
let regex = /un/g;


//realizando busqueda
// .match() buscas coincidencias entre una expresión regular y el texto que está siendo evaluado. 
// Devuelve un arreglo que contiene las coincidencias encontradas, 
// o null si no se encontraron coincidencias.
let resultado = parrafo.match(regex);

//Ver resultados obtenidos
console.log(resultado);



// Ejemplo deteccion de patron nunerico
let regex2 = /\d\d\d \d\d\d \d\d \d\d/gi;
let resultado2 = parrafo.match(regex2);
console.log(resultado2)



// Ejemplo de patron numerico especifico
let regex3 = /\d{3}\s\d{3}\s\d{2}\s\d{2}/gi;
let resultado3 = parrafo.match(regex3);
console.log(resultado3)



// Ejemplo de patron numerico especifico 2 
let regex4 = /\d{3}\-\d{3}\-\d{2}\-\d{2}/gi;
let resultado4 = parrafo.match(regex4);
console.log(resultado4)



// Ejemplo Correo:
// La expresion debe contener: 
// caracter de palabra de 1 o mas, 
// caracter @ seguido de caracter de palabra entre 1 a 7, 
// seguido de .com
// ademas, obtener todas las concidencias sin distincion de mayusculas

let regex5 = /\w+\@\w{1,7}\.com/gi;
let resultado5 = parrafo.match(regex5);
console.log(resultado5)




// Ejemplo 3
const texto = `El caballo de la casilla c4 le permitio ganar la partida de ajedrez, al moverlo a la casilla d6`;
const regexpCoordenadas = /\w\d/g;

console.log(texto.match(regexpCoordenadas));




//Verificar si la expresion se encuentra en el parrafo
let gmail = /gmail/gi
console.log(gmail.test(parrafo));









// EJERCICIOS EXTRAS


// Validación de correo electrónico
let email = "susana_xyz@yahoo.com";
let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
if (email.match(emailRegex)) {
    console.log("El correo electrónico es válido.");
} else {
    console.log("El correo electrónico no es válido.");
}

// Validación de números telefónicos
let telefono = "412-456-7890";
let telefonoRegex = /^\d{3}-\d{3}-\d{4}$/;
if (telefono.match(telefonoRegex)) {
    console.log("El número de teléfono es válido.");
} else {
    console.log("El número de teléfono no es válido.");
}

// Validación de fechas en formato MM/DD/YYYY
let fecha = "05/23/2022";
let fechaRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
if (fecha.match(fechaRegex)) {
    console.log("La fecha es válida.");
} else {
    console.log("La fecha no es válida.");
}

// Validación de URLs
let url = "https://www.mipagina123.com";
let urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
if (url.match(urlRegex)) {
    console.log("La URL es válida.");
} else {
    console.log("La URL no es válida.");
}

// Validación de nombres completos con letras y espacios
let nombre = "Diego Rodriguez";
let nameRegex = /^[a-zA-Z\s]+$/;
if (nombre.match(nameRegex)) {
    console.log("El nombre es válido.");
} else {
    console.log("El nombre no es válido.");
}
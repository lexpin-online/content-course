/******  FUNCIONES  ******/

/*
    Sintaxis
        Palabra reservada (Function (F. Declarativa) var (F. de Expresión)).
        Nombre de Funcion (Para las F. de Expresión se suelen dejar como anonimas). 
        Parentesis () donde se indican los parametros.
        Llaves {} que contienen el proceso a realizar.
        IMPORTANTE: cada sentencia dentro de una funcion debe finalizar con ;
*/


//Declarativas
function mifuncion(){
    return 5;
}
console.log( mifuncion() );


//Funciones de Expresion (Anonimas)
var mifuncion2 = function(a){
    return  a;
}
console.log( mifuncion2(30) );


/*--- Ejemplos ---*/

//Funcion para generar un mensaje predeterminado con una parte personalizada

//paso 2 (Hoisting)
saludar("Diego Rodriguez");
saludar2("Diego Rodriguez");

//paso 1
function saludar(nombre){
    console.log("Hola, me llamo",nombre,"y estoy aprendiendo JavaScript");
}

//Template String (alt gr + } 2 veces)
function saludar2(nombre){
    console.log(`Hola, me llamo ${nombre} y estoy aprendiendo JavaScript`);
}



//Funcion para realizar una suma de dos parametros y guardar el resultado en una variable.
let resuldadoSuma; //undefined

function suma(num1, num2){
    /*Guardando resuldato de operacion en variable*/
    resuldadoSuma = num1 + num2;
    console.log(`La suma de ${num1} + ${num2} es = ${resuldadoSuma}`)
    
    return (
        /*Retornando valor de la variable*/
        resuldadoSuma
    );
}

suma(65,20);
resuldadoSuma;


//Funcion para realizar una resta de dos parametros (usar con la variable resultadoSuma), 
//y guardar el resultado en una variable.
let resultadoResta; //undefined

function resta(num1, num2){
    /*Guardando resuldato de operacion en variable*/
    resultadoResta = num1 - num2;
    console.log(`La resta de ${num1} - ${num2} es = ${resultadoResta}`)
    
    return (
        /*Retornando valor de la variable*/
        resultadoResta
    );
}

resta(100,30);
resultadoResta;





/* ----------  EJERCICIO EN CLASE (Con Hoisting)------------

    Realizar una funcion que permita encontrar el tipo de dato del parámetro "dato" 
    y retornarlo desde la función "tipoDeDato".

    El parámetro "dato" debe ser distinto en cada llamada a la función "tipoDeDato".

    Primero declara las variables.
*/

//ERROR de Hoisting al llamar variable antes de declarar (Solo en variables)
//variable;


let variable;
let variable2 = null;

//Luego llama la funcion de las siguientes maneras:
    console.log( tipoDeDato(1) );
    console.log( tipoDeDato("Diego") );
    console.log( tipoDeDato(true) );
    console.log( tipoDeDato( {"nombre":"Diego"} ) );
    console.log( tipoDeDato(variable) );
    console.log( tipoDeDato(null) );

//Debes obtener los siguientes resultados:
    'number'
    'string'
    'boolean'
    'object'
    'undefined'
    'object' //(bug en ECMAScript, debería ser null);
//Informacion sobre null: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/null

function tipoDeDato(dato) {
    return typeof(dato);
}





/*     ****** Realizar en clase ******

    Realizar una función llamada editar que recibirá 2 parámetros:

    estudiantes: un array de strings con varios nombres de estudiantes.
    contador: un número entero.
    nuevo: un string con el nombre de un nuevo estudiante (que no aparecía antes en el array).

    Tu función debe retornar un array de elementos con las siguientes indicaciones:

    Si el parámetro contador es igual a 0, debes retornar el array de estudiantes 
    y agregar el elemento nuevo al final.

    Si el parámetro contador es mayor a 0, debes retornar el array de estudiantes 
    pero eliminar de atrás para adelante la cantidad de estudiantes 
    que indica el número contador y agregar el elemento nuevo al final.


    NOTA: splice() cambia el contenido de un array eliminando elementos existentes 
    y/o agregando nuevos elementos.
    recibe como parametro: el indice desde donde iniciar, la cantidad de elementos a editar/eliminar, el nuevo contenido
    ejemplo: array.splice(inicio, cantidad, item1, item2, ...);


    Resultados esperados:

    1) ["Nicolas", "Julia", "Santiago"] // no desapareció ningún elemento, se agregó Santiago al final
    2) ["Daniel", "Juan", "Marcos"] // desapareció 1 elemento (Daniela), se agregó Marcos al final
    3) ["Patricia", "Camilo"] // desaparecieron 2 elmentos (Luisa y Jean), se agregó Camilo al final
*/

function solution(estudiantes, contador, nuevo) {
    if(contador == 0){
        console.log(estudiantes);
        console.log(nuevo);
        estudiantes.push(nuevo);
        console.log(estudiantes);
        return estudiantes;
    }else if(contador > 0){
        console.log(estudiantes);
        console.log(nuevo);
        estudiantes.splice(-contador,contador,nuevo);
        return estudiantes;
    }
}


console.log(solution(["Nicolas", "Julia"], 0, "Santiago"));
console.log(solution(["Daniel", "Juan", "Daniela"], 1, "Marcos"));
console.log(solution(["Patricia", "Luisa", "Jean"], 2, "Camilo"));

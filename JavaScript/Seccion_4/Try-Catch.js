/* 
    Try - Catch: es una estructura de control de excepciones que permite probar código para 
    detectar errores y, en caso de que se produzca una excepción, ejecutar un bloque de código 
    de manejo de excepciones para manejar el error.

    El bloque "try" contiene el código que se está probando para errores, y el bloque "catch"
    contiene el código que se ejecutará en caso de que se produzca una excepción.

    ¿Qué es una Excepción?
    Una excepción es un evento anormal que ocurre durante la ejecución de un programa y que interrumpe 
    el flujo normal de la ejecución, puede ser tratado por el programador para prevenir errores graves.

    Esto permite la continuidad ininterrumpida en la ejecucion del codigo en caso de existir
    algun error en el proceso.


    Excepciones comunes:

    - ReferenceError: Se produce cuando se hace referencia a una variable no definida.
    - TypeError: Se produce cuando un operador o función es invocado en un objeto que no es válido para ese tipo de operación o función.
    - SyntaxError: Se produce cuando hay un error de sintaxis en el código.
*/



//Ejemplo try-catch (Capturar el error al llamar variable no declarada);

try {
    console.log( miVariable );
}catch (error) {
    console.log(`¡ERROR! ${error}`);
}





/*
    "Finally" es una clausula opcional, no es una propiedad ni un método como tal, sino una parte presindible
    de la sintaxis de la estructura de control Try-Catch.
*/

//Ejemplo try-catch-finally (Accediendo a una propiedad de un objeto que no existe);
function verPropiedad(){
    try {
        //Este objeto y esa propiedad no ecisten
        console.log(objeto.propiedad);
        // return "Se ejecuto try"
    }catch (error) {
        console.log(`Error: el objeto no existe. | ${error}`);
        return "Ocurrió una exepcion y se ejecuto catch."
    }finally {
        console.log("La ejecucion no se interrumpio gracias a Try-Catch");
    }
};

console.log( verPropiedad() );



// Ejercicio 1
// Realiza una funcion con try-catch que intente multiplicar 2 numeros y en caso de surgir
// una excepcion el bloque catch mostrara cual fue la excepcion obtenida.
// una vez finalizado el try-catch la funcion debe retornar un mensaje que diga:
// La multiplicacion de (numero1) x (numero2) = (multiplicar).

let numero1 = 10;
let numero2 = 2;
// let multiplicacion;

function multiplicar(){
    try{
        //scope local
        let multiplicacion= numero1 * numero2;
        // multiplicacion= numero1 * numero2;
        // La multiplicacion se realizo exitosamente
        console.log(multiplicacion);
    }catch(error){
        console.log( error );
    }finally{
        console.log("Proceso finalizado sin interrupcion.");
    }
    //Se muestra un error por que la variable multiplicacion es de scope local
    return(`La multiplicacion de ${numero1} x ${numero2} = ${multiplicacion}`);
}

console.log( multiplicar() );
console.log(multiplicacion); // multiplicacion not found
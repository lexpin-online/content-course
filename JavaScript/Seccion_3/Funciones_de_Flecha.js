/*
    Las funciones de flecha (arrow functions) son una forma abreviada de escribir funciones, 
    En lugar de utilizar la palabra clave "function" se utiliza la flecha "=>" para definir la función.

    NOTA: 
    Las funciones de flecha tienen un comportamiento diferente en cuanto al this. 
    No tienen su propio objeto this, en su lugar, heredan el this del contexto en el que fueron creadas.
*/

// Por ejemplo, una función tradicional se escribiría así:
function suma(a, b) {
    return a + b;
}
console.log(suma(10,20));



// Y la misma función escrita como una función de flecha quedaría así:
let sumar = (a,b)=> return a + b;

console.log( sumar(15,20) );



// Ejemplo 1 
// previamente vimos como rrecorrer un array y obtener elementos tipo numero
// y tipo string en variables difetrentes usando .map y operador ternario.

// Ahora veremos la misma practica con funciones de flecha
let mezcla = [1,2,"3","cuatro",5,"6",7,"8","9",10,"once"];
let enteros=[];
let strings=[];

mezcla.map((elemento) => (typeof(elemento) === "string") ? strings.push(elemento) : enteros.push(elemento));

console.log(strings);
console.log(enteros);




/*
    Iniciemos con un ejemplo:

    Hay 2 personas: 
    - una en la calle(Variable de Scope Global). 
    - otra en una casa(Variable de Scope local).
    ambas comen helado.

    la persona que esta en la casa a travez de una ventana puede saber cuantos helados 
    come la persona en la calle.

    la persona en la calle no sabe que esta siendo observada por ende, 
    no sabe cuantos helados come la otra persona, ni si quiera sabe que hay otra persona cerca.

    con este ejemplo podemos iniciar la definicion de Scope...
    Scope es el alcance que tiene una variable desde su lugar de declaracion. 
*/

let variableGlobal = "Diego"

function imprimirNombre(){
    let variableLocal = "Rodriguez";

    console.log(variableGlobal);
    console.log(variableLocal);

    console.log(`Mi nombre es ${variableGlobal} ${variableLocal}`)
}

imprimirNombre();

variableGlobal;
variableGlobal = variableLocal;
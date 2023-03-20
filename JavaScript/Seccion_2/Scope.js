/*
    Iniciemos con un ejemplo:

    Hay una fiesta de niños y una caja de juguetes.

    Si el niño de la casa donde se realiza la fiesta tiene la caja de juguetes en su habitación, 
    solo las personas que en su habitación podrán jugar con los juguetes de la caja. 
    En este caso, la caja de juguetes tiene un scope local en la fiesta.

    Pero si el niño lleva la caja de juguetes al patio, todos los niños presentes podrán jugar 
    con los juguetes de la caja. 
    En este caso, la caja de juguetes tiene un scope global en la fiesta.

    Para resumir, el scope local se refiere a algo que solo se puede acceder en un lugar específico, 
    como la habitación del niño, mientras que el scope global se refiere a algo que se puede acceder
    desde otros lugares, como el patio con otros niños.

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
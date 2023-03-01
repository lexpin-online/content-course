/*
    Recursividad: la recursividad es una función que se llama a sí misma. 
    Piensa en ello como una alternativa al bucle.
*/

function funcRecursiva() {
    console.log("Esto es una Funcion recursiva");
    funcRecursiva();
}

//funcRecursiva();


//      ****** REALIZAR EN CLASE ******

// Crear la una funcion recursiva que imprima los numeros de 5 en 5 hasta llegar a 1000 partiendo de 5.
// (Usar condicionales(If o Switch) y Evitar usar bucles(for... while))

let numero = 0;

function imprimir(){
    numero += 5; //numero = numero + 5;
    if(numero <= 1000){
        console.log(numero);
        imprimir();
    }
    else{
        console.log(`Recursividad detenida, el numero ${numero} es mayor a 1000`)
    }
}

imprimir();
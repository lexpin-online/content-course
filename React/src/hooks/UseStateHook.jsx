import { useState } from "react";

/* 
    ¿Que son Hooks?
    los Hooks son una característica que permite a los desarrolladores utilizar el estado y otras 
    características de React en componentes funcionales.
    
    ¿Que es el estado?
    El estado es un objeto que contiene la informacion que define un componente en cada momento 
    durante su ciclo de vida.
    
    En pocas palabras podriamos decir que Los Hooks son funciones especiales que se pueden usar para agregar 
    características a los componentes de React.
*/


function Contador(){
    /*
        useState(): Es un Hook que permite a los desarrolladores agregar estado local 
        a los componentes funcionales. Esto significa que se puede definir un estado inicial en un 
        componente y actualizarlo en función de ciertas acciones o eventos. 
        
        El Hook useState toma un valor inicial y devuelve una matriz o array con dos elementos,
        el primer elemento es el valor del estado y el segundo es una función para actualizar el estado.
    */
    //    variable,modificador     valor inicial
    const [numero,setNumero] = useState(0);
    /*
        Esto es similar a declarar const numero = 0; y luego incrementarlo mediante una funcion, 
        solo que mas practico.
    */

    //Funcion para incrementar estado de la variable numero
    function incremento(){ 
        setNumero(numero + 1) 
    }

    return(
        <>
            <button onClick={incremento} >Incrementar</button>
            {/*Para interpretar javascript dentro de las etiquetas HTML se deben colocar las llaves {} */}
            <p>Has pulsado {numero} veces</p>
        </>
    )
}




//Ejemplo 2, lo mismo solo que de forma ligeramente distinta
let incremento = 0;
function Incremento(){
    const [valor,setValor] = useState(0);
    
    return(
        <>
            <p>total: {valor}</p>
            <button onClick={()=>{setValor(incremento+=1)}}>Incrementar</button>
        </>
    )
}

//Exportacion multiple
export default (Contador, Incremento);


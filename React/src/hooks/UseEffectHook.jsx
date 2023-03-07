
/* 
    ¿Que son Hooks?
    Los Hooks son funciones que retornan logica, permitiendo a los desarrolladores: 
    
    - Utilizar el estado y otros aspectos del ciclo de vida de los componentes en los componentes funcionales. 
    - Agregar comportamientos a los componentes. 

    Los Hooks más utilizados son useState, useEffect, useRef

    useEffect(): permite a los desarrolladores agregar efectos secundarios a los componentes funcionales.
    Es comunmente usado para procesos en segundo plano. 
    Un ejemplo de esto podría ser cualquier cosa que cambie el estado o afecte a la interfaz como un Reloj.

    useEffect toma dos argumentos/parametros, el primero es una función(callback) que se ejecuta cuando el componente se inicia 
    y el segundo es una lista de dependencias OPCIONALES que especifican qué variables deben cambiar para 
    que la función se ejecute, debido a esto se suele utilizar junto a useState().

    Dependencias: Las dependencias son un arreglo de valores que se utilizan para determinar cuándo se debe 
    volver a ejecutar la función de efecto secundario. Si alguna de las dependencias cambia, la función de 
    efecto secundario se ejecutará nuevamente.
*/

//Ejemplo 1
import { useEffect, useState } from "react";

function UseEffectHook(){

    //Se asigna estado inicial con useState()
    let [contador, setContador] = useState(0);

    let reloj = ()=> {
        setTimeout(() => {
            let fecha= new Date();
            setContador(contador = fecha.toLocaleTimeString());
        }, 1000)
    }

    //Se inicia useEffect(funcion,[dependencia])
    useEffect( function(){
        reloj();
    })
    return(
        <p>Son las: {contador}</p>
    )
}

// export default UseEffectHook;



/* Ejemplo 2 */

function UseEffectHook2(){
    const [cuenta, setCuenta] = useState(0);

    //Se modifica el titulo del sitio con la funcion de efecto secundario useEffect()
    useEffect(() => {
        document.title = `Has pulsado ${cuenta} veces`;
    },[cuenta]); /*Dependencia:*/

    return (
        <div>
            <p>Has pulsado {cuenta} veces</p>
            <button onClick={() => setCuenta(cuenta + 1)}>
            Incremento+ Ventana
            </button>
        </div>
    );
}

export default (UseEffectHook, UseEffectHook2);


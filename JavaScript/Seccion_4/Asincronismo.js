/* 
    ¿Qué es el asincronismo?
    El asincronismo es una técnica que permite a los programas ejecutar tareas de manera no bloqueante. 
    Esto permite que el programa puede continuar con otras tareas mientras se completa una tarea asíncrona, 
    en lugar de bloquearse y esperar a que se complete.

    El asincronismo es fundamental para mejorar la experiencia del usuario y mejorar la eficiencia del 
    programa, especialmente cuando se trata de tareas que pueden tardar un tiempo en completarse, como 
    las solicitudes de red y consumo de API´s.

    Hay varias formas de lograr el asincronismo, como promesas, async-await, setTimeout, setInterval
    y la utilización de eventos, cada uno de estos enfoques ofrece diferentes ventajas y desventajas 
    y puede ser apropiado en función del uso que se le quiera dar.

    En resumen, el asincronismo es una técnica esencial para mejorar la experiencia del usuario y 
    la eficiencia del programa.

*/



// setTimeout(): Realiza una accion luego de transcurrido el tiempo indicado
setTimeout(
    function(){
        console.log("Hola, este mensaje se imprime asincronamente tras 1/2 segundo.")
    },500
);


// setInterval(): Realiza una accion cada cierto tiempo.
// let contador=0;
// setInterval(
//     function(){
//         contador++
//         console.log(`Contador actualizado tras 1 segundo, ahora vale: ${contador}`)
//     },1000
// );



/*
    Ahora que sabemos manejar funciones asincronas veremos como sacar provecho de ello.

    Por ejemplo, podemos obtener la fecha de nuestro equipo y mostrarla asincronicamente.

    para obtener la fecha local usamos la funcion constructora Date();
*/

let tiempo = new Date();
console.log(tiempo);

// Metodos de Date()
// get.day() retorna el dia actual de la semana, viernes = 5
console.log(tiempo.getDay());

// getMonth() retorna el mes actual, enero = 1
console.log(tiempo.getMonth());

// getFullYear() retorna el año actual
console.log(tiempo.getFullYear());

// getHours retorna la hora actual en formato 24h
console.log(tiempo.getHours());

// getMinutes() retorna los minutos actuales
console.log(tiempo.getMinutes());

// getSeconds() retorna los segundos actuales
console.log(tiempo.getSeconds());

// getMilliseconds retorna los milisegundos actuales
console.log(tiempo.getMilliseconds());

// toDateString() retorna el dia-semana/mes/dia-mes/año actual
console.log( tiempo.toDateString() );

// retorna la hora en el formato del equipo
console.log( tiempo.toLocaleTimeString() );



// Conociendo esto podemos crear una funcion que actualice la hora actual con cada segundo transcurrido
// usemos setInterval() para lograr esto, ya que los metodos de Date() no son asincronicos por si solos.

// Ejemplo
/*
fecha = new Date();

setInterval(
    ()=>{
        console.log( fecha.toLocaleTimeString() );
    },1000
);
// ¿Por que esto no funciona?


//SOLUCION

// Date() captura la informacion de hora y tiempo en el momento que es llamada, pero no es asincrono,
    por esto se debe llamar de nuevo cada vez que se desee actualizar esta informacion.

setInterval(
    ()=>{
        fecha = new Date();
        console.log( fecha.toLocaleTimeString() )
    },1000
);
*/

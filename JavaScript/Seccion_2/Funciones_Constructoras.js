/*
    Funcion Constructora: 
    Estas funciones permiten la creacion de nuevos objetos en base de una estructura predefinida(plantilla)

    las funciones constructoras son la forma más antigua de crear objetos en JavaScript. 
    Se definen utilizando la palabra clave "function" seguida del nombre de la función.

    Una vez definidas se inicializan con la palabra clave "new" para crear un nuevo objeto o instancia. 
    Dentro de la función, se asignan valores a las propiedades del objeto instanciado utilizando "this".
*/

//Ejemplo 1
function User(name, email) {
    this.name = name;
    this.email = email;
}

let user1 = new User("John Smith", "johnsmith@email.com");
let user2 = new User("Claudia Martinez", "claudiam2023@email.com");
let user3 = new User("Pedro Duarte", "pepitod@email.com");

console.log(user1);
console.log(user2);
console.log(user3);





//Ejemplo 2
function Persona(nombre,edad,sexo,pais){
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.pais = pais;

    function saludar(){
        console.log(`Hola, me llamo ${nombre}, tengo ${edad} años, y vivo en ${pais}`);
    }
    //saludar(); //Explicacion en la linea 56
}

let persona1 = new Persona("Diego",30,"Masculino","Venezuela");
let persona3 = new Persona("Daniela",27,"Femenino","España");
let persona2 = new Persona("Marcos",25,"Masculino","E.E.U.U.");

persona1;
console.log(persona1.nombre);
console.log(persona1.edad);
console.log(persona1.sexo);
console.log(persona1.pais);


// Las funciones constructoras no permiten la creacion de metodos, 
// pero si crear funciones anidadas como la funcion "saludar".
//persona1.saludar(); //Iniciar funcion en la linea 37

persona2;
persona3;
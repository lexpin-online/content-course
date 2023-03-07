/*
    los objetos son una de las estructuras de datos fundamentales. 
    Un objeto es un conjunto de pares clave-valor que representan una entidad o un concepto. 
    Las claves son cadenas de texto y los valores pueden ser cualquier tipo de dato.
*/


let auto = {
    marca: "Chevrolet",
    modelo: "Camaro SS",
    fecha: 1967,
    motor: "6 en Linea",
    transmision: "Manual",
    //Funcion anonima / Lambda Function: característica introducida en ECMAScript 6 (ES6).
    detalles: function(){
        //this: hace referencia al elemento padre (similar al & en SASS).
        return(
            `Tengo un auto marca ${this.marca}, 
            modelo ${this.modelo}, del año ${this.fecha}. 
            Tiene un motor ${this.motor} y transmisión ${this.transmision}.`
        );
    }
};


//Acceder a propiedades
console.log(auto);
console.log(auto.marca);
console.log(auto.modelo);
console.log(auto.fecha);
console.log(auto.motor);
console.log(auto.transmision);


//Acceder a metodos
console.log(auto.detalles());


//Agregar Propiedades
auto.encendido = true;
console.log(auto.encendido);
console.log(auto)


//Agregar Metodos
auto.estado = function(){
    return( 
        (this.encendido === true)
            ? "El auto esta encendido"
            : "El auto esta Apagado"
    );
};

console.log(auto);
console.log(auto.estado());








/* ***** Ejercicio en clase - Registro *****/

/*
    Simulacion de un Register.

    Crear una funcion llamada register que reciba como parametro nombre, edad, sexo, email y password, 
    y los guarde en una variable de tipo objeto llamado usuarios.

    cada ingreso a la variable usuarios debe llevar 
    - clave: el nombre del usuario registrado
    -valor: un objeto con los datos/propiedades definidos previamente.
    

    Debes llamar la funcion 2 veces de la siguiente manera:
    1) register("Carlos", 30, "Masculino", "carlos@email.com", "1234carlos");
    2) register("Andres", 25, "Masculino", "luis@email.com", "Luis4321");


    Tras llamar la funcion register 2 veces el objeto usuarios debe lucir asi:

    usuarios = {
        Carlos: {
            nombre: 'Carlos',
            edad: 30,
            sexo: 'Hombre',
            email: 'carlos@email.com',
            password: '1234carlos'
        }
        Andres: {
            nombre: 'Andres',
            edad: 25,
            sexo: 'Hombre',
            email: 'luis@email.com',
            password: 'Luis4321'
        }
    }


*/


//Solucion
let usuarios = {};

function register(nombre, edad, sexo, email, password){
    return (
        //El nombre que el objeto tendra como clave/nombre es el mismo nombre del usuario registrado,
        //Y como valor un objeto, con todas las propiedades definidas.
        usuarios[nombre]= {
            nombre: nombre, 
            edad:edad, 
            sexo:sexo,
            email:email, 
            password:password
        }
    );
}

register("Carlos", 30, "Hombre", "carlos@email.com", "1234carlos");
register("Andres", 25, "Hombre", "andres@email.com", "Andres4321");

//Visualizando contenido del objeto usuarios
console.log(usuarios);

//Accediendo a metodos (Nuevos Objetos)
console.log(usuarios.Carlos);
console.log(usuarios.Andres);

//Accediendo a informacion especifica (Propiedad de una propiedad)
console.log(usuarios.Andres.email);






/*
    Crea un objeto llamado productos, que contenga 5 propiedades, tecnologia,hogar,alimentos,salud,ropa.

    - tecnologia, debe ser un objeto con 2 propiedades:
        * computadoras: debe tener un objeto con 4 propiedades: tipo:[laptop,escritorio], ram:[4gb,8gb,16gb], almacenamiento:[128gb,256gb,512gb,1tb], procesador:[Intel,AMD].
        * celulares: debe tener un objeto con 3 propiedades: marca:[samsumg,lg,xiaomi,poco], ram[4gb,6gb,8gb,12gb,16gb], almacenamiento(32gb,64gb,128gb,256gb),
    
    - hogar, debe ser un objeto con 2 propiedades:
        * electrodomesticos: debe tener un objeto con 2 propiedades: tipo:[tv,parlante,licuadora,lavadora], color:[blanco,gris,negro]
        * muebles: debe tener un objeto con 3 propiedades: tipo:[silla,mesa,gabetero], material:[madera,plastico,metal], color:[blanco,beige,gris,negro]

    - alimentos, debe tener un objeto con 4 propiedadess:
        * carnes: debe tener un objeto con 1 propiedad: animal:[pollo,res,cerdo]
        * viveres: debe tener un objeto con 3 propiedades: harina:[trigo,maiz], aceite:[girasol,oliva,maiz], leche:[completa,soya,almendra,descremada]
        * fruver: debe tener un objeto con 2 propiedades: frutas:[manzana,pera,uva,fresa,piña], vegetales:[lechuga,zanahoria,cebolla,rabano,calabaza]
        * aseo: debe tener un objeto con 2 propiedades: personal:[shampoo,acondicionador,jabon,crema dental,desodorante], hogar[cloro,desinfectante,jabon,paños]


    - salud, debe tener un objeto con 2 propiedades:
        * medicamentos: debe tener un objeto con 2 propiedades:
            ° con_prescripcion: debe tener un objeto con 2 propiedades: jarabe:[Clonazepan, Tramadol, Cloperastina, Terbutalina], comprimidos:[Losartan, Enalapril, Ácido valproico, Metformina]
            ° de_venta_libre: debe tener un objeto con 2 propiedades: jarabe:[Acetaminofén, Loratadina, Nitazoxanida, Ambroxol], comprimidos:[Cetirizina, Albendazol, Trimebutina, Omeprazol]
        * primeros_auxilios: debe tener un objeto con 3 propiedades: proteccion_personal:[mascarillas,lentes protectores], curas_y_vendajes:[vendas,tijeras,curitas], suministros_para_heridas:[algodon,compresas]


    - ropa, debe tener un objeto con 3 propiedades:
        * damas: debe tener un objeto con 3 propiedades: prenda:[vestido,jean,blusa,ropa interior,calzado], temporada:[invierno,primavera,verano,otoño], importado:[true,false]
        * caballeros: debe tener un objeto con 3 propiedades: prenda:[short,jean,camisa,ropa interior,calzado], temporada:[invierno,primavera,verano,otoño], importado:[true,false]
        * niños: debe tener un objeto con 3 propiedades: prenda:[vestido,short,jean,camisa,blusa,ropa interior,calzado], temporada:[invierno,primavera,verano,otoño], importado:[true,false]

    Resultados estimados:
        console.log(productos.tecnologia.computadoras.procesador[0]); //intel
        console.log(productos.alimentos.viveres.leche[2]); //almendra
        console.log(productos.salud.medicamentos.con_prescripcion.comprimidos[0]); //Losartan
        console.log(productos.hogar.electrodomesticos.tipo[2]); //licuadora
        console.log(productos.ropa.damas.temporada[0]); //invierno
*/


let productos = {
    tecnologia:{
            computadoras:{
                tipo:["notebook","escritorio"],
                ram:["4gb","8gb","16gb"],
                almacenamiento:["128gb","256gb","512gb","1tb",],
                procesador:["intel","AMD"]
            },
            celulares:{
                marca:["samsumg","lg","xiaomi","poco"],
                ram:["4gb","6gb","8gb","12gb","16gb"],
                almacenamiento:["32gb","64gb","128gb","256gb"]
            }
    },
    hogar:{
        electrodomesticos:{
            tipo:["tv","parlante","licuadora","lavadora"],
            color:["blanco","gris","negro"]
        },
        muebles:{
            tipo:["tv","parlante","licuadora","lavadora"],
            material:["madera","plastico","metal"],
            color:["blanco","beige","gris","negro"]
        }
    },
    alimentos:{
        carnes:{
            animal:["pollo","res","cerdo"]
        },
        viveres:{
            harina:["trigo","maiz"],
            aceite:["girasol","oliva","maiz"],
            leche:["completa","soya","almendra","descremada"]
        },
        fruver:{
            frutas:["manzana","pera","uva","fresa","piña"], 
            vegetales:["lechuga","zanahoria","cebolla","rabano","calabaza"]
        },
        aseo:{
            personal:["shampoo","acondicionador","jabon","crema dental","desodorante"], 
            hogar:["cloro","desinfectante","jabon","paños"]
        }
    },
    salud:{
        medicamentos:{
            con_prescripcion:{
                jarabe:["Clonazepan", "Tramadol", "Cloperastina", "Terbutalina"], 
                comprimidos:["Losartan", "Enalapril", "Ácido valproico", "Metformina"]
            },
            de_venta_libre:{
                jarabe:["Acetaminofén", "Loratadina", "Nitazoxanida", "Ambroxol"], 
                comprimidos:["Cetirizina", "Albendazol", "Trimebutina", "Omeprazol"]
            }
        },
        primeros_auxilios:{
            proteccion_personal:["mascarillas","lentes protectores"], 
            curas_y_vendajes:["vendas","tijeras","curitas"], 
            suministros_para_heridas:["algodon","compresas"]
        }
    },
    ropa:{
        damas:{
            prenda:["vestido","jean","blusa","ropa interior","calzado"], 
            temporada:["invierno","primavera","verano","otoño"], 
            importado:[true,false]
        },
        caballeros:{
            prenda:["short","jean","camisa","ropa interior","calzado"], 
            temporada:["invierno","primavera","verano","otoño"], 
            importado:[true,false]
        },
        niños:{
            prenda:["vestido","short","jean","camisa","blusa","ropa interior","calzado"], 
            temporada:["invierno","primavera","verano","otoño"], 
            importado:[true,false]
        }
        
    }
}

console.log(productos);
console.log(productos.tecnologia.computadoras.procesador[0]);
console.log(productos.alimentos.viveres.leche[2]);
console.log(productos.salud.medicamentos.con_prescripcion.comprimidos[0]);
console.log(productos.hogar.electrodomesticos.tipo[2]);
console.log(productos.ropa.damas.temporada[0]);
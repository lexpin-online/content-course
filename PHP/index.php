<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Aprendiendo PHP</title>
    </head>
    <body style="background-color: gray;">
        <h1>Aprendiendo PHP</h1>

        <!-- Variables -->
        <?php 
            $variable1 = 10;
            $variable2 = 5;
        ?>

        <!-- If -->
        <p>
            <?php 
                if($variable1 > $variable2){
                    echo("La variable 1 es mayor que la variable 2");
                }
                else{
                    echo("La variable 1 es menor que la variable 2");
                }
            ?>
        </p>


        <!-- Switch -->
        <p>
            <?php 
                $color = "verde";
                switch ($color) {
                    case "rojo":
                        echo ("El color es rojo");
                        break;
                    case "verde":
                        echo ("El color es verde");
                        break;
                    default:
                        echo ("El color no es ni rojo ni verde");
                }
            ?>
        </p>


        <!-- While -->
        <p>
            <?php 
                $i = 0;
                while ($i < 10) {
                    echo $i."&nbsp";
                    $i++;
                }
            ?>
        </p>
        
        <!-- For -->
        <p>
            <?php 
                for ($i = 1; $i <= 10; $i++) {
                    echo "Numero ".$i."<br/>";
                }
            ?>
        </p>

        <!-- Funciones -->
        <?php
            function tablaMultiplicar() {
                $num = 5;
                    echo "<h2>Tabla de multiplicar del $num:</h2>";
                    for ($i = 1; $i <= 10; $i++) {
                        $producto = $num * $i;
                        echo "<p>$num x $i = $producto</p>";
                    }
            }

            tablaMultiplicar();
        ?>

        <!-- Regex -->
        <?php
            $cadena = "El gato de mi vecino es blanco y esta en sobre el sofa blanco";
            $patron = "/blanco/";
            
            // Utilizando preg_match()
            if (preg_match($patron, $cadena, $coincidencias)) {
                echo "<p>Coincidencia encontrada: ".$coincidencias[0]."</p>";
            } else {
                echo "<p>No se encontraron coincidencias.</p>";
            }

            // Utilizando preg_match_all()
            if (preg_match_all($patron, $cadena, $coincidencia)) {
                echo "<p>Se encontraron ".count($coincidencia[0])." coincidencias.</p>";
            } else {
                echo "<p>No se encontraron coincidencias.</p>";
            }

            // Utilizando preg_replace()
            $nueva_cadena = preg_replace($patron, "verde", $cadena);
            echo "<p>La antigua cadena era: " . $cadena . "</p>";
            echo "<p>La nueva cadena es: " . $nueva_cadena . "</p>";

            // Utilizando preg_split()
            $partes = preg_split($patron, $cadena);
            echo "Las partes del texto son: <br>";
            foreach($partes as $parte){
                echo $parte."<br>";
            }
        ?>

    </body>
</html>
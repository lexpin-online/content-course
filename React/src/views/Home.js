//Se puede excribir scf para generar la estructura basica de un componente/vista

//Componentes
// import Contador from "../hooks/Contador";
import MiPrimerComponente from "../components/MiPrimerComponente";


function Home() {
  /*return: solo puede retornar un elemento, por esto se suele agrupar todo dentro de un div, esto mostrara
    los elementos dentro de un div, pero en caso de no querer agregar un div,
    podemos retornar el HTML dentro de etiquetas vacias <> ... </> (antes se usaba fragment) que no se mostraran en el HTML final
  */
  return (
    <>
      <h1>Diego Rodriguez</h1>
      <h3>Desarrollador Web</h3>
      <MiPrimerComponente/>
      <a href="/Mi-Ruta">Cambiar de Ruta</a>
    </>
  );
}

export default Home;


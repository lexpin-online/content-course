import { useRef } from "react";

function Input() {
    const inputRef = useRef(null);

    function mostrarValor() {
        document.getElementById("parrafo").innerText = "Valor nuevo: " + inputRef.current.value;
        console.log(inputRef.current.value);
    }

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={mostrarValor}>Mostrar valor en consola</button>
            <p id="parrafo">Valor actual</p>
        </div>
    );
}

export default Input
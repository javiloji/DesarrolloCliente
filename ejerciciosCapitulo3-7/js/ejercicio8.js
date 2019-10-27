
/*

Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve
como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el
resultado devuelto por la función.

@author Javier Lopera Jimenez

*/

{

    let inicio = function () {

        let numero = prompt("Introduce un numero para comprobar su paridad.")
        function verParidad(numero) {
            if (numero % 2 == 0) {
                return "El numero es par";
            }
            else {
                return "El numero es impar";
            }
        }

        console.log(verParidad(numero));
    }

    document.addEventListener("DOMContentLoaded", inicio);

}
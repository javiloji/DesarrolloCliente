/*

Definir una función que muestre información sobre una cadena de texto que se le pasa como
argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada
sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

@author Javier Lopera Jimenez

*/

{
    let cadena;
    let comprobarCadenas = function (cadena) {
        if (cadena.toUpperCase() == cadena) {
            return "La cadena está formada solo por mayúsculas.";
        }
        else if (cadena.toLowerCase() == cadena) {
            return "La cadena está formada solo por minúsculas";
        }
        else {
            return "La cadena está formada por mayúsculas y minúsculas.";
        }
    }

    let inicio = function () {

        cadena = prompt("Introduce una cadena");

        cadena.toString();

        console.log(comprobarCadenas(cadena));
    }

    document.addEventListener("DOMContentLoaded", inicio);

}
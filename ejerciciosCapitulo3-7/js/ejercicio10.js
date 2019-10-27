/*

Definir una función que determine si la cadena de texto que se le pasa como parámetro es un
palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de
palíndromo complejo: "La ruta nos aporto otro paso natural".

@author Javier Lopera Jimenez

*/

{

    let cadena = prompt("Introduce la cadena:");


    let encontrarPalindromo = function (cadena) {

        let cadenaSinEspacios = cadena.replace(/ /g, "");

        let cadenaEnArray = cadenaSinEspacios.split("");

        let cadenaAlReves = "";


        for (let i = cadenaSinEspacios.length - 1; i >= 0; i--) {
            cadenaAlReves = cadenaAlReves + cadenaEnArray[i];
        }
        let cadenaSinEspaciosFinal = cadenaSinEspacios.toLowerCase();
        let cadenaAlRevesFinal = cadenaAlReves.toLowerCase();

        if (cadenaSinEspaciosFinal === cadenaAlRevesFinal) {
            return "La cadena es un palíndromo";
        }
        return "La cadena no es un palíndromo";

    }

    let inicio = function () {

        console.log(encontrarPalindromo(cadena));

    }

    document.addEventListener("DOMContentLoaded", inicio);

}


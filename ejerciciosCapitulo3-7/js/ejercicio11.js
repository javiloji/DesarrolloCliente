/*

A partir de la página web proporcionada y utilizando las funciones DOM,
 mostrar por pantalla la siguiente información:

1. Número de enlaces de la página
2. Dirección a la que enlaza el penúltimo enlace
3. Numero de enlaces que enlazan a http://prueba
4. Número de enlaces del tercer párrafo

@author Javier Lopera Jimenez

*/

{

    let inicio = function () {

        // Numero de enlaces de la pagina

        let enlaces = document.getElementsByTagName("a");
        console.log("La pagina tiene " + enlaces.length + " enlaces.");

        // Direccion del penultimo enlace

        let penultimoEnlace = enlaces[enlaces.length - 2].href;
        console.log("El penultumo enlace es : " + penultimoEnlace);

        // Numero de enlaces que apuntan a http://prueba

        let contador = 0;

        for (let i = 0; i < enlaces.length; i++) {
            if (enlaces[i].href == "http://prueba/") {
                contador++;
            }
        }
        console.log(contador + " enlaces apuntan a http://prueba/");

        // Numero de enlaces del tercer p�rrafo

        let parrafos = document.getElementsByTagName("p")[2];
        let enlacesParrafo2 = parrafos.getElementsByTagName("a");
        console.log("El tercer parrafo tiene " + enlacesParrafo2.length + " enlaces.");


    }

    document.addEventListener("DOMContentLoaded", inicio);

}



/**
 * 
Mejorar el ejemplo anterior indicando en todo momento al usuario el número de caracteres que aún
puede escribir. Además, se debe permitir pulsar las teclas Backspace, Supr. y las flechas
horizontales cuando se haya llegado al máximo número de caracteres.
 * 

 @author Javier Lopera Jimenez

 */

{
    const MAXIMO_CARACTERES  = 100;
    let elemento;
    let info;


    let limitaYActualiza = function (evento) {

        if (elemento.value.length > MAXIMO_CARACTERES) {
            elemento.value = elemento.value.slice(0, (-elemento.value.length+MAXIMO_CARACTERES));
        }

        info.innerHTML = "Puedes escribir hasta " + (MAXIMO_CARACTERES - elemento.value.length) + " caracteres adicionales";
    }
    
    let inicio = function () {

        info = document.getElementById("caracteresRestantes");

        elemento = document.getElementById("texto");

        elemento.addEventListener("input",limitaYActualiza);

    }

    document.addEventListener("DOMContentLoaded", inicio);

}


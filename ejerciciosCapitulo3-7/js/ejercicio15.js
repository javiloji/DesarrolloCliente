
/**
 * 
 * Completar el código JavaScript proporcionado para que:

Al mover el ratón en cualquier punto de la ventana del navegador, 
se muestre la posición del puntero respecto del navegador y 
respecto de la página:
Información que se muestra para los eventos del ratón
Figura 6.1 Información que se muestra para los eventos del ratón

Para mostrar los mensajes, utilizar la función muestraInformacion() 
deduciendo su funcionamiento a partir de su código fuente.
Al pulsar cualquier tecla, el mensaje mostrado debe cambiar para 
indicar el nuevo evento y su información asociada:
Información que se muestra para los eventos del teclado
Figura 6.2 Información que se muestra para los eventos del teclado

Añadir la siguiente característica al script: cuando se pulsa un botón 
del ratón, el color de fondo del cuadro de mensaje debe ser amarillo 
(#FFFFCC) y cuando se pulsa una tecla, el color de fondo debe ser azul 
(#CCE6FF). Al volver a mover el ratón, el color de fondo vuelve a ser blanco.
 * 
@author Javier Lopera Jimenez

 */

{

    let muestraInformacion = function (mensaje) {
        document.getElementById("info").innerHTML = '<h1>' + mensaje[0] + '</h1>';
        for (let i = 1; i < mensaje.length; i++) {
            document.getElementById("info").innerHTML += '<p>' + mensaje[i] + '</p>';
        }
    }

    let informacion = function (evento) {
        switch (evento.type) {
            case 'mousemove':
                document.getElementById('info').style.backgroundColor = '#FFFFFF';

                let coordenadaXrelativa, coordenadaYrelativa, coordenadaXabsoluta, coordenadaYabsoluta;

                coordenadaXabsoluta = evento.pageX;
                coordenadaYabsoluta = evento.pageY;
                coordenadaXrelativa = evento.clientX;
                coordenadaYrelativa = evento.clientY;
                muestraInformacion(['Ratón', 'Navegador [x,y] <br>[' + coordenadaXrelativa + ', ' + coordenadaYrelativa + ']', 'Pagina [x,y] <br> [' + coordenadaXabsoluta + ', ' + coordenadaYabsoluta + ']']);
                break;
            case 'keydown':
                document.getElementById('info').style.backgroundColor = '#CCE6FF';
                let caracter = evento.charCode || evento.keyCode;
                let letra = String.fromCharCode(caracter);
                let codigo = letra.charCodeAt(0);
                muestraInformacion(['Teclado', 'Carácter [' + letra + ']', 'Código [' + codigo + ']']);
                break;
            case 'click':
                document.getElementById('info').style.backgroundColor = '#FFFFCC';
                break;
        }
    }

    let inicio = function () {

        document.addEventListener("mousemove", informacion);
        document.addEventListener("keydown", informacion);
        document.addEventListener("click", informacion);

    }

    document.addEventListener("DOMContentLoaded", inicio);

}
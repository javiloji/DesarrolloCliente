
/**
 * 
Crear un script que informe al usuario en que zona de la pantalla ha 
pulsado el ratón. Las zonas definidas son las siguientes: izquierda 
arriba, izquierda abajo, derecha arriba y derecha abajo. Para determinar
el tamaño de la ventana del navegador, utilizar la función tamanoVentanaNavegador() 
proporcionada.
 * 

 @author Javier Lopera Jimenez
 */

{

    let informacion = function (evento) {

        if (evento.type == "click" && (evento.clientX < (tamanoVentanaNavegador()[0] / 2))) {// Si la posicion de x es menor que la mitad de la pantala
            if (evento.type == "click" && evento.clientY < (tamanoVentanaNavegador()[1] / 2)) {
                muestraInformacion(["Arriba Izquierda", "Posicion x relativa: " + evento.clientX, "Posicion y relativa: " + evento.clientY,
                    "Posicion x absoluta: " + evento.pageX, "Posicion y absoluta: " + evento.pageY]);
            }
            else {
                muestraInformacion(["Abajo Izquierda", "Posicion x relativa: " + evento.clientX, "Posicion y relativa: " + evento.clientY,
                    "Posicion x absoluta: " + evento.pageX, "Posicion y absoluta: " + evento.pageY]);
            }

        }
        else {
            if (evento.type == "click" && evento.clientY < (tamanoVentanaNavegador()[1] / 2)) { // Si la posicion de y es menor que la mitad de la pantala
                muestraInformacion(["Arriba Derecha", "Posicion x relativa: " + evento.clientX, "Posicion y relativa: " + evento.clientY,
                    "Posicion x absoluta: " + evento.pageX, "Posicion y absoluta: " + evento.pageY]);
            }
            else {
                muestraInformacion(["Abajo Derecha", "Posicion x relativa: " + evento.clientX, "Posicion y relativa: " + evento.clientY,
                    "Posicion x absoluta: " + evento.pageX, "Posicion y absoluta: " + evento.pageY]);
            }
        }

    }

    let muestraInformacion = function (mensaje) {
        document.getElementById("info").innerHTML = '<h1>' + mensaje[0] + '</h1>';
        for (let i = 1; i < mensaje.length; i++) {
            document.getElementById("info").innerHTML += '<p>' + mensaje[i] + '</p>';
        }
    }

    let tamanoVentanaNavegador = function () {

        return [document.body.clientWidth, document.body.clientHeight];
    }

    let inicio = function () {

        document.addEventListener("click", informacion);

    }

    document.addEventListener("DOMContentLoaded", inicio);

}


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

function informacion(elEvento) {
    var evento = elEvento || window.event;

    if(evento.type == "click" && (evento.clientX<(tamanoVentanaNavegador()[0]/2))){// Si la posicion de x es menor que la mitad de la pantala
        if(evento.type == "click" && evento.clientY<(tamanoVentanaNavegador()[1]/2)){
            muestraInformacion(["Arriba Izquierda","Posicion x: "+evento.clientX,"Posicion y: "+evento.clientY]);
        }
        else{
            muestraInformacion(["Abajo Izquierda","Posicion x: "+evento.clientX,"Posicion y: "+evento.clientY]);
        }
        
    }
    else{
        if(evento.type == "click" && evento.clientY<(tamanoVentanaNavegador()[1]/2)){ // Si la posicion de y es menor que la mitad de la pantala
            muestraInformacion(["Arriba Derecha","Posicion x: "+evento.clientX,"Posicion y: "+evento.clientY]);
        }
        else{
            muestraInformacion(["Abajo Derecha","Posicion x: "+evento.clientX,"Posicion y: "+evento.clientY]);
        }
    }
    
}

function muestraInformacion(mensaje) {
    document.getElementById("info").innerHTML = '<h1>'+mensaje[0]+'</h1>';
    for(var i=1; i<mensaje.length; i++) {
        document.getElementById("info").innerHTML += '<p>'+mensaje[i]+'</p>';
    }
}

function tamanoVentanaNavegador(){
    // Adaptada de http://www.howtocreate.co.uk/tutorials/javascript/browserwindow
    var dimensiones = [];
    
    if(typeof(window.innerWidth) == 'number') {
        // No es IE
        dimensiones = [window.innerWidth, window.innerHeight];
    } else if(document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        //IE 6 en modo estandar (no quirks)
        dimensiones = [document.documentElement.clientWidth, document.documentElement.clientHeight];
    } else if(document.body && (document.body.clientWidth || document.body.clientHeight)) {
        //IE en modo quirks
        dimensiones = [document.body.clientWidth, document.body.clientHeight];
    }
    
    return dimensiones;
}

document.onclick = informacion;
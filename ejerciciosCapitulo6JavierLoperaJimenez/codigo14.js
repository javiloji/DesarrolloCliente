/**
 * 
 * A partir de la página web proporcionada, completar el código JavaScript para que:
 * 1. Cuando se pinche sobre el primer enlace, se oculte su sección relacionada
 * 2. Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de
 * contenidos
 * 3. Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del
 * primer enlace
 * 4. Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado (pista:
 * propiedad innerHTML)
 * 
 * @author Javier Lopera Jimenez
 * 
 */

// function mostrar(){
//     document.getElementById("contenidos_1").style.visibility="visible";
// }

// function ocultar(){
//     document.getElementById("contenidos_1").style.visibility="hidden";
// }

function muestraOculta1() {

    let enlace1 = document.getElementById("enlace_1");
    let contenido1 = document.getElementById("contenidos_1");





    // if(contenido1.style.visibility == "visible"){
    //     contenido1.style.visibility = "hidden";

    // }
    if (contenido1.style.visibility == "hidden") {
        contenido1.style.visibility = "visible";
        enlace1.textContent = "Ocultar contenidos";
    }
    else {
        contenido1.style.visibility = "hidden";
        enlace1.textContent = "Mostrar contenidos";
    }




}
function muestraOculta2() {

    let enlace2 = document.getElementById("enlace_2");
    let contenido2 = document.getElementById("contenidos_2");


    if (contenido2.style.visibility == "hidden") {
        contenido2.style.visibility = "visible";
        enlace2.textContent = "Ocultar contenidos";
    }
    else {
        contenido2.style.visibility = "hidden";
        enlace2.textContent = "Mostrar contenidos";

    }
}


function muestraOculta3() {

    let enlace3 = document.getElementById("enlace_3");
    let contenido3 = document.getElementById("contenidos_3");


    if (contenido3.style.visibility == "hidden") {
        contenido3.style.visibility = "visible";
        enlace3.textContent = "Ocultar contenidos";
    }
    else {
        contenido3.style.visibility = "hidden";
        enlace3.textContent = "Mostrar contenidos";

    }
}

window.onload = function () {

    document.getElementById("enlace_1").onclick = muestraOculta1;
    document.getElementById("enlace_2").onclick = muestraOculta2;
    document.getElementById("enlace_3").onclick = muestraOculta3;


}
/*

Completar el código JavaScript proporcionado para que se añadan nuevos 
elementos a la lista cada vez que se pulsa sobre el botón. Utilizar las 
funciones DOM para crear nuevos nodos y añadirlos a la lista existente. 
Al igual que sucede en el ejercicio anterior, la acción de pinchar sobre 
un botón forma parte de los "Eventos" de JavaScript que se ven en el siguiente 
capítulo. En este ejercicio, sólo se debe saber que al pinchar sobre el botón, 
se ejecuta la función llamada anade().

@author Javier Lopera Jimenez

*/

{

    let contador=0;
    let annadirLinea;
    
    let anade = function() {
        
        annadirLinea = document.createElement("li");
        
        contador++;
        
        let textoLista = document.createTextNode("Elemento de prueba " + contador);
        
        annadirLinea.appendChild(textoLista);
        
        document.getElementById("lista").appendChild(annadirLinea);
        
        
    }
    
    let inicio = function () {
        
        document.getElementById("anadir").addEventListener("click",anade);
    }
    
    document.addEventListener("DOMContentLoaded", inicio);
    
}
    
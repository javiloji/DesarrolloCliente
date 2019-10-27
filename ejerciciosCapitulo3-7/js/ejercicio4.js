
/*

A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola",
"adios", 2];
1. Determinar cual de los dos elementos de texto es mayor
2. Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores
necesarios para obtener un resultado true y otro resultado false
3. Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos
elementos numéricos

@author Javier Lopera Jimenez

*/
{

    let inicio = function () {

        let valores = [true, 5, false, "hola", "adios", 2];

        console.log("valores[3]>valores[4] = " + (valores[3] > valores[4]) + "\nPor tanto, hola es mayor que adios.");
        console.log("valores[0] == valores[2] = " + (valores[0] == valores[2]));
        console.log("valores[0] != valores[2] = " + (valores[0] != valores[2]));
        console.log("\n5+2 = " + (valores[1] + valores[5]) +
            "\n5-2 = " + (valores[1] - valores[5]) +
            "\n5*2 = " + valores[1] * valores[5] +
            "\n5/2 = " + valores[1] / valores[5] +
            "\n5%2 = " + valores[1] % valores[5]);
    }

    document.addEventListener("DOMContentLoaded", inicio);

}



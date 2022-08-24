const campoEncriptacion = document.getElementById("campo-encriptacion")
const resultadoEncriptado = document.getElementById("resultado-encriptado");
const vocalesEncriptadas = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];




// FUNCIONES PARA ENCRIPTAR Y SUS BOTONES + EXPLICACIONES


/*

//***Funcion Live Code Encriptador, ONE+Alura***


    function encriptarDatos(val){
        val = val.toLowerCase();
        
        for(let i = 0; i < vocalesEncriptadas.length; i++){
            if(val.includes(vocalesEncriptadas[i][0])){
                val = val.replaceAll(vocalesEncriptadas[i][0], vocalesEncriptadas[i][1]);
            }
        }
        return val;
    }


/* 
    16) Esta funcion comienza tomando el elemento(val) y transformando la cadena de letras mayusculas a letras minusculas. 
    18) Luego abre un loop 'for' iniciando su variable "i" en 0 {servira para iterar n veces}, la condicion que el loop se detiene cuando "i" ya no es menor al tamaño del arreglo "vocalesEncriptadas(5)", sumando 1 por cada iteracion que haga. 
    19) Se despliega una condicion 'if' que pregunta: si (val) contiene elementos del arreglo "vocalesEncriptadas", el prototipo '.includes' tiene la siguiente nomenclatura: {.includes('cadena buscada'[posicion de la cadena])}
    Al trabajar con varios arreglos dentro de un arreglo, la variable "i" sirve para visitar los subarreglos anidados en el arreglo principal y el numero 0 mantiene constante la primera cadena de ese subarreglo, numero 20) coloco otra forma de ver o explicar (item[n],[n]), si contiene elementos del arreglo "vocalesEncriptadas" el valor regresado es true.
    20) Si la condicion regresa true, (val) sera remplazada con ayuda del prototipo '.replaceAll' el cual tiene la siguiente nomenclatura: {.replaceAll('modelo','remplazo')}, en esta ocasion tenemos arreglos dentro de un arreglo por eso usamos 2 corchetes, el primero corchete "i" es la posicion dentro del arreglo principal, el segundo corchete es la posicion dentro del subarreglo. Ejemplo [i=2],[0] devuelve "a", y [i=3],[1] devuelve "ober".
    15)Esta funcion trabaja en conjunto con botonEncriptar().
*/

//
//***Alternativa usando while***

    function encriptarDatos(val){
        let iteracion = 0;
        val = val.toLowerCase();
        
        while(iteracion < vocalesEncriptadas.length){
            if(val.includes(vocalesEncriptadas[iteracion][0])){
                val = val.replaceAll(vocalesEncriptadas[iteracion][0], vocalesEncriptadas[iteracion][1]);
                iteracion++;
            }else if(val.includes(vocalesEncriptadas[iteracion][0]) == false){
                iteracion++;
            }
        }
        return val;
    }


//***Boton usado para el Live Code Encriptador y alternativa while**

    function botonEncriptar(){
        let valorEncriptado = encriptarDatos(campoEncriptacion.value);
        resultadoEncriptado.value = valorEncriptado;
        campoEncriptacion.value = "";
    }

//*/

/*
//Funcion usando banderas 

function botonEncriptarDatos(){
    let campoEncriptado = campoEncriptacion.value.replace(/e/gi, "enter")
                                                 .replace(/i/gi, "imes")
                                                 .replace(/a/gi, "ai")
                                                 .replace(/o/gi, "ober")
                                                 .replace(/u/gi, "ufat")
                                                 .toLowerCase(); // Bandera "g" para capturar toda la linea del input(texto), Bandera "i" para que ignore la igualdad estricta entre las vocales que seran reemplazadas, y el prototipo '.toLowerCase' para terminar de covertir toda la cadena en minusculas, ya que solo usando replace con banderas "gi" covierte solo las vocales de la cadena original en minusculas  
    resultadoEncriptado.value = campoEncriptado;
    campoEncriptacion.value = "";
}

*/

    function desencriptarDatos(val){
        val = val.toLowerCase();
        
        for(let i = 0; i < vocalesEncriptadas.length; i++){
            if(val.includes(vocalesEncriptadas[i][1])){
                val = val.replaceAll(vocalesEncriptadas[i][1], vocalesEncriptadas[i][0]);
            }
        }
        return val
    }



    function botonDesencriptar(){
        let valorEncriptado = desencriptarDatos(campoEncriptacion.value);
        resultadoEncriptado.value = valorEncriptado;
        campoEncriptacion.value = "";
    }

    function copiarDatos(){
        resultadoEncriptado.select();
        navigator.clipboard.writeText(resultadoEncriptado.value);
        resultadoEncriptado.value = "";
        alert("Texto copiado");
    }

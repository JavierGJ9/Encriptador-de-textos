const campoEncriptacion = document.getElementById("campo-encriptacion")
const resultadoEncriptado = document.getElementById("resultado-encriptado");
const vocalesEncriptadas = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];




// FUNCIONES PARA ENCRIPTAR Y SU BOTON + EXPLICACIONES


/*Funcion Live Code Encriptador, ONE+Alura (for)(if)




    function encriptarDatos(val){
        val = val.toLowerCase();
        
        for(let i = 0; i < vocalesEncriptadas.length; i++){
            if(val.includes(vocalesEncriptadas[i][0])){
                val = val.replaceAll(vocalesEncriptadas[i][0], vocalesEncriptadas[i][1]);
            }
        }
        return val;
    }
*/

/* Exp
    16) Esta función comienza tomando el elemento(val) y transformando la cadena de letras mayúsculas a letras minúsculas. 
    18) Luego abre un loop 'for' iniciando su variable "i" en 0 {servirá para iterar n veces}, la condición que el loop se detiene cuando "i" ya no es menor al tamaño del arreglo "vocalesEncriptadas(5)", sumando 1 por cada iteración que haga. 
    19) Se despliega una condición 'if' que pregunta: si (val) contiene elementos del arreglo "vocalesEncriptadas", el prototipo '.includes' tiene la siguiente nomenclatura: {.includes('cadena buscada'[posición de la cadena])}
    Al trabajar con varios arreglos dentro de un arreglo, la variable "i" sirve para visitar los subarreglos anidados en el arreglo principal y el numero 0 mantiene constante la primera cadena de ese subarreglo, numero 20) coloco otra forma de ver o explicar (item[n],[n]), si contiene elementos del arreglo "vocalesEncriptadas" el valor regresado es true.
    20) Si la condición regresa true, (val) será remplazada con ayuda del prototipo '.replaceAll' el cual tiene la siguiente nomenclatura: {.replaceAll('modelo', 'reemplazo')}, en esta ocasión tenemos arreglos dentro de un arreglo por eso usamos 2 corchetes, el primero corchete "i" es la posición dentro del arreglo principal, el segundo corchete es la posición dentro del subarreglo. Ejemplo [i=2],[0] devuelve "a", y [i=3],[1] devuelve "ober".
    15)Esta función trabaja en conjunto con botonEncriptar().
*/

/*Alternativa usando (while) (if)


    function encriptarDatos(val){
        let iteracion = 0;
        val = val.toLowerCase();
        
        while(iteracion < vocalesEncriptadas.length){
            if(val.includes(vocalesEncriptadas[iteracion][0])){
                val = val.replaceAll(vocalesEncriptadas[iteracion][0], vocalesEncriptadas[iteracion][1]);
                iteracion++;
            }else{
                iteracion++;
            }
        }
        return val;
    }
*/

/*Exp
    44) Al igual que la función for, en while usamos una condición para determinar el bucle como vimos en clases, lo único que faltaría es el contador de iteraciones y dentro del bucle una instucción de suma.
    48) En la línea 47 y 49 se coloca la instrucción de suma, se coloca "else" por si "if" se detiene en una vocal sin considerar las demás, por ejemplo si no existiera "else", para la palabra (gema), if toma dentro del arreglo la letra e, siendo la primera en sustituir, sustituye la letra e, y la instucción suma 1, buscando en la palabra sustituir letra i, al no encontrarla "if" retorna con un valor false, volviendo un loop infinito calculando un valor false hasta que se detenga la ejecución, con "else", se evita que se detenga en un numero que "if" tomara como false, iterando hasta encontrar un valor true o cumpliendo la condición del while.
*/

/*Alternativa usando (for) (switch) 


    function encriptarDatos(val){
        val = val.toLowerCase();
        
        for(let i = 0; i < vocalesEncriptadas.length; i++){
            switch(i){
                case 0:
                    val = val.replaceAll(vocalesEncriptadas[i][0], vocalesEncriptadas[i][1]);
                    break;
                case 1:
                    val = val.replaceAll(vocalesEncriptadas[i][0], vocalesEncriptadas[i][1]);
                    break;
                case 2:
                    val = val.replaceAll(vocalesEncriptadas[i][0], vocalesEncriptadas[i][1]);
                    break;
                case 3:
                    val = val.replaceAll(vocalesEncriptadas[i][0], vocalesEncriptadas[i][1]);
                    break;
                case 4:
                    val = val.replaceAll(vocalesEncriptadas[i][0], vocalesEncriptadas[i][1]);
                    break;
            }
        }
        return val;
    }
*/

/* Exp
    68) Switch es similar a if, evaluando una expresion con una instancia o condicion 'case', dentro de esta se evalua index "i", por lo que cada instancia case tendra la misma instruccion pero evaluando distintos casos de ellos, case 0 devolvera valores con el arreglo de la letra "e", case 2 con la letra "a", siempre respetando el orden del arreglo vocalesEncriptadas.
*/

/*Boton usado para el Live Code Encriptador(for) y alternativa while


    function botonEncriptar(){
        let valorEncriptado = encriptarDatos(campoEncriptacion.value);
        resultadoEncriptado.value = valorEncriptado;
        campoEncriptacion.value = "";
    }

*/


//Funciones usando banderas 

function botonEncriptarDatos(){
    let campoEncriptado = campoEncriptacion.value.replace(/e/gi, "enter")
                                                 .replace(/i/gi, "imes")
                                                 .replace(/a/gi, "ai")
                                                 .replace(/o/gi, "ober")
                                                 .replace(/u/gi, "ufat")
                                                 .toLowerCase(); // Bandera "g" para capturar toda la linea del input(texto), Bandera "i" para que ignore la igualdad estricta entre las vocales que seran reemplazadas, y el prototipo '.toLowerCase' para terminar de covertir toda la cadena en minusculas, ya que solo usando replace con banderas "gi" covierte solo las vocales de la cadena original en minusculas  
    resultadoEncriptado.value = campoEncriptado;
    if( campoEncriptacion.value == ""){
        alert("No hay mensaje por encriptar");
    }else{
        campoEncriptacion.value = "";
    }
}

// FUNCIONES PARA DESENCRIPTAR Y SU BOTON 

function botonDesencriptarDatos(){
    let campoEncriptado = campoEncriptacion.value.replace(/enter/gi, "e")
                                                 .replace(/imes/gi, "i")
                                                 .replace(/ai/gi, "a")
                                                 .replace(/ober/gi, "o")
                                                 .replace(/ufat/gi, "u")
                                                 .toLowerCase();  
    resultadoEncriptado.value = campoEncriptado;
    if( campoEncriptacion.value == ""){
        alert("No hay mensaje por desencriptar");
    }else{
        campoEncriptacion.value = "";
    }
}

/* Funcion Live Code Encriptador, ONE+Alura (for)(if)

    function desencriptarDatos(val){
        val = val.toLowerCase();
        
        for(let i = 0; i < vocalesEncriptadas.length; i++){
            if(val.includes(vocalesEncriptadas[i][1])){
                val = val.replaceAll(vocalesEncriptadas[i][1], vocalesEncriptadas[i][0]);
            }
        }
        return val
    }
*/

/*Alternativa usando (while) (if)

    function desencriptarDatos(val){
        let iteracion = 0;
        val = val.toLowerCase();
        
        while(iteracion < vocalesEncriptadas.length){
            if(val.includes(vocalesEncriptadas[iteracion][1])){
                val = val.replaceAll(vocalesEncriptadas[iteracion][1], vocalesEncriptadas[iteracion][0]);
                iteracion++;
            }else{
                iteracion++;
            }
        }
        return val;
    }
*/

/*Alternativa usando (for) (switch)

    function desencriptarDatos(val){
        val = val.toLowerCase();
        
        for(let i = 0; i < vocalesEncriptadas.length; i++){
            switch(i){
                case 0:
                    val = val.replaceAll(vocalesEncriptadas[i][1], vocalesEncriptadas[i][0]);
                    break;
                case 1:
                    val = val.replaceAll(vocalesEncriptadas[i][1], vocalesEncriptadas[i][0]);
                    break;
                case 2:
                    val = val.replaceAll(vocalesEncriptadas[i][1], vocalesEncriptadas[i][0]);
                    break;
                case 3:
                    val = val.replaceAll(vocalesEncriptadas[i][1], vocalesEncriptadas[i][0]);
                    break;
                case 4:
                    val = val.replaceAll(vocalesEncriptadas[i][1], vocalesEncriptadas[i][0]);
                    break;
            }
        }
        return val;
    }
*/

/*Boton usado para el Live Code Encriptador(for) y alternativa while
    function botonDesencriptar(){
        let valorEncriptado = desencriptarDatos(campoEncriptacion.value);
        resultadoEncriptado.value = valorEncriptado;
        campoEncriptacion.value = "";
    }
*/

    function copiarDatos(){
        if(resultadoEncriptado.value != ""){
            resultadoEncriptado.select();
            navigator.clipboard.writeText(resultadoEncriptado.value);
            resultadoEncriptado.value = "";
            alert("Texto copiado");  
        }else{
            alert("No hay texto por copiar")
        }
    }

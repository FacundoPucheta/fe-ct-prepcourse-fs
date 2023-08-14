/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

// FORMA MAS OPTIMIZADA 
   // var arrayDeArrays = Object.entries(objeto);
   // return arrayDeArrays;
   
 // forma mia, original ! 
   arregloMayor = [];
   for (var key in objeto) {
      arregloMayor.push([key,objeto[key]]);
   }
   return arregloMayor;

   // for (var clave in objeto) {
   //    arregloMayor.push([clave,objeto[clave]]);
   // }

   
   // var claves = Object.keys(objeto);
   // for (var clave of claves) {
   //    arregloMayor.push([clave, objeto[clave]])
   // }

   // return arregloMayor;

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   // var objetoFinal = {};
   // var letrasOrdenadas = string.split('').sort();
   // for (var i = 0; i < letrasOrdenadas.length; i++) {
   //    if(objetoFinal.hasOwnProperty(letrasOrdenadas[i])) {
   //       objetoFinal[letrasOrdenadas[i]] += 1;
   //    } else {
   //       objetoFinal[letrasOrdenadas[i]] = 1;
   //    }
   // }
   // return objetoFinal;

   // var objetoFinal = {};
   // var stringLetras = string.split('');
   // var letrasOrdenadas = stringLetras.sort();
   // letrasOrdenadas.forEach(letra => {
   //    if (!objetoFinal[letra]) {
   //       objetoFinal[letra] = 1 ;
   //    } else {
   //       objetoFinal[letra] += 1;
   //    }
   // });
   // return objetoFinal;

   // var objetoNuevo = {}
   // var cadena = string.split('')
   // var cadenaOrdenada = cadena.sort()
   // cadenaOrdenada.forEach(letra => {
   //       if (objetoNuevo.hasOwnProperty(letra)) {
   //          objetoNuevo[letra] += 1
   //       } else {
   //          objetoNuevo[letra] = 1;
   //       }
   // });
   // return objetoNuevo

                                          // OTRA FORMA !!!
   var stringToArray = string.split(''); // creo un array con todas las letras del string
   var letrasOrdenadas = stringToArray.sort(); // ahora las ordeno! tengo un array de letras ordenadas
   var nuevoObjeto = {}; // creo el objeto a devolver vacio
   letrasOrdenadas.forEach((letra) => {   // for of ( por cada letra en... )
      if (!nuevoObjeto[letra]) { // !algo quiere decir que 'si no se cumple ---> ejecute lo siguiente'
         nuevoObjeto[letra] = 1; // que cree la propiedad en el objeto en caso de no tenerla
      } else {
         nuevoObjeto[letra] += 1 ;  // si ya existe la propiedad, que aumente en 1 su valor
      }
   })
   return nuevoObjeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   // MI MANERA:
   // var arrayMayuscula = string.match(/[A-Z]/g); // aca pase el parametro con una EXPRESION REGULAR (used to find parameters on strings ---> / asneouhseio/), y le agregue la letra 'g' de global al final. Sino crea un string solamente con la primer coincidencia que encuentra.
   // var arrayMinuscula = string.match(/[a-z]/g); --> me devuelve un array 
   // var cadenaUnida = arrayMayuscula.join('') + arrayMinuscula.join('') ;
   // return cadenaUnida;

// OTRA MANERA:  (tambien puede ser en vez de crear strings, crear arrays (upper y lower).. y realizar un push. )
   var upper = '';
   var lower = '';
   for (var i =0; i < string.length; i++) {
      if (string[i] === string[i].toUpperCase()) {
         upper += string[i];
      } else {
         lower += string[i];
      }
   }
   return upper+lower;

}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:


// NUEVA FORMA  ((( TENE EN CUENTA QUE DENTRO DE UN FOR, PARA CONCATENAR SPLIT-REVERSE-JOIN TENES QUE CREAR UNA NUEVA VARIABLE )))
   var fraseSeparada = frase.split(' ');
   var mirror = [];
   for (var i = 0; i < fraseSeparada.length; i++) {
      var nuevaPalabra = fraseSeparada[i].split('').reverse().join('');
      mirror.push(nuevaPalabra);
   }
   var mirrorFinal = mirror.join(' ');
   return mirrorFinal;

//                                       FORMA MIA
   // var fraseSeparada = frase.split(' ');
   
   // var stringFinal = '';
   // for (var i = 0; i < fraseSeparada.length; i++) {
   //    var palabra = fraseSeparada[i];
   //    var palabraPartida = palabra.split('');
   //    var espejoSeparado = palabraPartida.reverse();
   //    var espejo = espejoSeparado.join('');
   //    stringFinal += espejo + ' ';
      
   // }
   // return stringFinal.trim();

   //                               FORMA CON FOR ANIDADO
   // var fraseSeparada = frase.split(' ');  // ['the', 'henry', 'Challenge',..]
   // var mirror = '';  // para guardar nuestro string final

   // for(var i = 0; i < fraseSeparada.length; i++) {
   //    var palabra = fraseSeparada[i];           // para poder anidarlo, creo otra variable para hacer el push posible mas abajo y dar vuelta la palabra
   //    var palabraEspejo = '';
   //    for(var j = palabra.length-1; j >= 0; j--){
   //       palabraEspejo += palabra[j];
   //    }
   //    mirror += (palabraEspejo + ' ');
   // }
   // var retornar = mirror.trim();  // trim, remueve el espacio de entrada y salida de un string. 
   // return retornar;
   // //tambien funciona con / return mirror.trim(); /
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

   var num1 = numero.toString();
   var num2 = num1.split('').reverse().join('');   
   if (num1 === num2) {
      return 'Es capicua';
   } else {
      return 'No es capicua';
   }


   //                                         ESTO ES SI EMPIEZA COMO TERMINA
   // var numeroString = numero.toString();
   // if( numeroString.charAt(0) === numeroString.charAt(numeroString.length-1)) {
   //    return 'Es capicua';
   // } else { return 'No es capicua'; }

}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   //                               MI OTRA MANERA !! 
   // var stringToArray = string.split('');
   // var stringDevolucion = [];
   // for(var i = 0; i < stringToArray.length; i++) {
   //    if (stringToArray[i] != 'a' && stringToArray[i] != 'b' && stringToArray[i] != 'c') {
   //       stringDevolucion.push(stringToArray[i]);
   //    }
   // }
   // var stringDevUnido = stringDevolucion.join('');
   // return stringDevUnido;

// //                                    MI MANERA:
   // var sinLetras = string.replace('a','').replace('b','').replace('c','');
   var sinLetras = string.replace(/a|b|c/g,'');       // de esta manera reemplazamos varias letras en un solo comando !
   return sinLetras;

}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   

   // var aux = '';
   // for (var i = 0; i < arrayOfStrings.length-1; i++) {
   //    for (var j = i+1; j < arrayOfStrings.length; j++){
   //       if(arrayOfStrings[i].length > arrayOfStrings[j].length) {
   //          aux = arrayOfStrings[j];
   //          arrayOfStrings[j] = arrayOfStrings[i];
   //          arrayOfStrings[i] = aux;
   //       }
   //    }
   // }
   // return arrayOfStrings;
   
   // ES IMPORTANTE ENCONTRAR OTRA FORMA DE HACERLO, ASI COMO REPASAR LA FORMA CON AYUDA
   // CON AYUDA
   var aux; // variable auxiliar para guardar el valor y SIEMPRE necesario para realizar intercambio de valores
   for (var i = 0; i < arrayOfStrings.length-1; i++) {
      for (var j = i+1; j < arrayOfStrings.length; j++) {
         if (arrayOfStrings[i].length > arrayOfStrings[j].length) {
            aux = arrayOfStrings[i];
            arrayOfStrings[i] = arrayOfStrings[j];
            arrayOfStrings[j] = aux;
         }
      }
   }
   return arrayOfStrings;


   

}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var nuevoArreglo = [];
   var contador= 0;
   array1.forEach((num) => {
      if(array2.includes(num)) {
         nuevoArreglo.push(num);
         contador++;
      }
   })
   if (contador != 0){
      return nuevoArreglo;
   } else {
      return nuevoArreglo = [];
   }


   // var nuevoArreglo = [];
   // var contador = 0;
   // array1.forEach((num) => {
   //    if(array2.includes(num)){
   //       nuevoArreglo.push(num);
   //       contador++;
   //    } else if (contador === 0) {
   //       return nuevoArreglo[null];
   //    } 
   // })
   
   // return nuevoArreglo;
   
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

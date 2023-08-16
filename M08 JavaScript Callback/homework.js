/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
  // Esta función recibe un nombre (string).
  // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
  // [Ejemplo]: "mario" ----> "Mario".
  // Tu código:

  const devolverNombre = (name) => {
    const mayuscName = `${name.slice(0, 1).toUpperCase()}${name.slice(1)}`;
    return mayuscName;
  };

  return devolverNombre(nombre);

  // var primeraLetra = nombre[0].toUpperCase();
  // for (var i=1; i < nombre.length; i++ ) {
  //    primeraLetra += nombre[i];
  // }
  // return primeraLetra;

  // o tambien podes hacer:
  //var segundaPalabra = '';
  //for (var i = 1; i < nombre.length; i++) {
  // segundaPalabra = segundaPalabra + nombre[i];

  // Tambien puede ser:
  // var primeraLetra = nombre[0].toUpperCase();
  // var segundaPalabra = nombre.substr(1);  // reemplazamos el ejercicio anterior donde utilicé '.slice'.  Trae en un nuevo string, desde la posicion que le indiqué (index) que pasa a ser la posicion 0.
  // var palabraCompleta = primeraLetra+segundaPalabra;
  // return palabraCompleta;
}

function invocarCallback(cb) {
  // Invoca/ejecuta el callback `cb`.
  // [NOTA]: no debes reotrnar nada.
  // Tu código:
  cb();
}

function operacionMatematica(num1, num2, cb) {
  // En este ejercicio recibirás dos números y un callback.
  // El callback realiza una operación matemática, por lo que necesita de los dos números.
  // Retorna el resultado del callback pasándole como parámetros los números.
  // Tu código:
  return cb(num1, num2);
}

function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // [NOTA]: no debes reotrnar nada.
  // Tu código:

  const sum = arrayOfNumbers.reduce((acc, element) => {
    acc += element;
    return acc;
  }, 0);

  cb(sum);

  //   var sumaTotalArray = 0;
  //   for (i = 0; i < arrayOfNumbers.length; i++) {
  //     sumaTotalArray += arrayOfNumbers[i];
  //   }
  //   cb(sumaTotalArray);
}

function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
  // Debes pasarle el elemento como argumento al callback.
  // Tu código:
  array.forEach((element) => {
    cb(element);
  });
}

function map(array, cb) {
  // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:

  let newArray = [];

  for (const ele of array) {
    const aux = cb(ele);
    newArray.push(aux);
  }

  return newArray;

  //   var nuevoArreglo = [];
  //   array.forEach((element) => {
  //     cb(element);
  //     nuevoArreglo.push(cb(element));
  //   });
  //   return nuevoArreglo;
}

function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:

  const result = arrayOfStrings.reduce((acc, string) => {
    if (string[0].toLowerCase() === "a") acc.push(string);
    return acc;
  }, []);

  return result;

  //   var otroNuevoArray = [];
  //   arrayOfStrings.forEach((element) => {
  //     if (element[0] == "a") {
  //       otroNuevoArray.push(element);
  //     }
  //   });
  //   return otroNuevoArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter,
};

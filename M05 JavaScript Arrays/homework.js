/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
  // Retornar el primer elemento del arreglo recibido por parámetro.
  // Tu código:
  const result = array[0];
  return result;
}

function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido por parámetro.
  // Tu código:
  const result = array[array.length - 1];
  return result;
}

function obtenerLargoDelArray(array) {
  // Retornar la longitud del arreglo recibido por parámetro.
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // El arreglo recibido por parámetro contiene números.
  // Retornar un arreglo con los elementos incrementados en +1.
  // Tu código:
  const result = array.map((ele) => ele + 1);
  return result;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retornar un string donde todas las palabras estén concatenadas
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  const result = palabras.join(" ");
  return result;
}

function arrayContiene(array, elemento) {
  // Verifica si el elemento existe dentro del arreglo recibido.
  // Retornar true si está, o false si no está.
  // Tu código:
  const result = array.includes(elemento);
  return result;
}

function agregarNumeros(arrayOfNums) {
  // El parámetro "arrayOfNums" debe ser un arreglo de números.
  // Suma todos los elementos y retorna el resultado.
  // Tu código:
  let result = 0;
  for (const num of arrayOfNums) {
    result += num;
  }
  return result;
}

function promedioResultadosTest(resultadosTest) {
  // El parámetro "resultadosTest" es un arreglo de números.
  // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
  // Tu código:

  let counter = 0;
  let total = 0;

  for (const num of resultadosTest) {
    total += num;
    counter++;
  }

  const promedio = total / counter;

  return promedio;
}

function numeroMasGrande(arrayOfNums) {
  // El parámetro "arrayOfNums" es un arreglo de números.
  // Retornar el número más grande.
  // Tu código:

  let bigNum = 0;
  for (const num of arrayOfNums) {
    if (num > bigNum) bigNum = num;
  }

  return bigNum;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  if (!arguments.length > 0) return 0;

  let result = 1;
  for (let i = 0; i < arguments.length; i++) {
    result *= arguments[i];
  }

  return result;
}

function cuentoElementos(array) {
  // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
  // Tu código:
  //   const onlyHigher = array.reduce((acc, element) => {
  //     if (element > 18) acc++;
  //     return acc;
  //   }, 0);
  //   return onlyHigher;

  const onlyHigher = array.filter((element) => element > 18);
  return onlyHigher.length;
}

function diaDeLaSemana(numeroDeDia) {
  // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
  // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
  // Tu código:

  if (numeroDeDia === 1 || numeroDeDia === 7) return "Es fin de semana";

  return "Es dia laboral";
}

function empiezaConNueve(num) {
  // Esta función recibe por parámetro un número.
  // Debe retornar true si el entero inicia con 9 y false en otro caso.
  // Tu código:
  num = num.toString().slice(0, 1);
  if (num == 9) return true;
  return false;
}

function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario retornar false.
  //   // Tu código:
  // const aux = array[0];
  // const equals = array.reduce((acc, element) => {
  //     if(element !== aux) acc = false;
  //     return acc;
  // }, true);

  // return equals;

  const aux = array[0];
  const result = array.filter((element) => element !== aux);
  if (result.length) return false;
  return true;
}

function mesesDelAño(array) {
  // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  const newArray = array.filter(
    (month) => month === "Enero" || month === "Marzo" || month === "Noviembre"
  );

  if (newArray.length !== 3) return "No se encontraron los meses pedidos";

  return newArray;
}

function tablaDelSeis() {
  // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Tu código:
  let arrayOfSix = [];
  let counter = 0;

  while (counter <= 10) {
    arrayOfSix.push(counter * 6);
    counter++;
  }

  return arrayOfSix;
}

function mayorACien(array) {
  // La función recibe un arreglo con enteros entre 0 y 200.
  // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
  // Tu código:

  const newArray = array.filter((num) => num > 100);
  return newArray;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retornarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // [PISTA]: utiliza el statement 'break'.
  // Tu código:

  let newArray = [];
  let counter = 1;

  while (counter <= 10) {
    num += 2;
    if (num === counter) return "Se interrumpió la ejecución";

    newArray.push(num);
    counter++;
  }

  return newArray;
}

function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continua con la siguiente iteración.
  // [PISTA]: utiliza el statement 'continue'.
  // Tu código:

  let newArray = [];
  let counter = 1;

  while (counter <= 10) {

    if (counter === 5) {
      counter++;
      continue;
    }

    num += 2;
    newArray.push(num);
    counter++;
  }

  return newArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  tablaDelSeis,
  mayorACien,
  breakStatement,
  continueStatement,
};

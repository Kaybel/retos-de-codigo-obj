/*
Escribir una función llamada "getAllKeys" que devuelve un array de todas las claves del objeto de entrada.

Ejemplo de entrada:

{
  name: 'Sam',
  age: 25,
  hasPets: true
}
Valor de retorno de la función (salida):

['name', 'age', 'hasPets']
Tenga en cuenta que su función debe ser capaz de manejar cualquier objeto pasado en ella.

P.ej. también debe manejar una entrada como:

{
  a: 'a',
  number: 11,
  hungry: true,
  grammyWins: 1
}
Valor de retorno de la función (salida):

['a', 'number', 'hungry', 'grammyWins']

*/
let newObj = {};

function getAllKeys(obj) {
  newObj = Object.keys(obj);
}
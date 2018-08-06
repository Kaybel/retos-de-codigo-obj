/*
Escribe una función llamada "removeStringValuesLongerThan".

Dado un número y un objeto,"removeStringValuesLongerThan" elimina cualquier propiedad en el objeto dado cuyos valores son cadenas de texto más largas que el número dado.

Ejemplo de entrada:

var obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};
removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }
*/

function removeStringValuesLongerThan(num, obj) {
  for (var prop in obj){
    if (obj[prop].length < num){
      delete obj[prop];
    }
  }
  return obj;
}
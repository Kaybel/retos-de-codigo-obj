/*
Escribir una función llamada "addObjectProperty".

Dado dos objetos y una clave, "addObjectProperty" establece una nueva propiedad en el primer objeto en la clave dada. El valor de esta nueva propiedad es el segundo objeto completo.

var person1 = {
  name: 'Joe Blow',
  role: 'schlub'
};
var person2 = {
  name: 'Mr. Burns',
  role: 'supervisor'
};
addObjectProperty(person1, 'manager', person2);
console.log(person1.manager); // --> { name: 'Mr. Burns', role: 'supervisor' }
*/

function addObjectProperty(){
  let obj1 = {
    name: 'Joe Blow',
    role: 'schlub'
  };
  let obj2 = {
    name: 'Mr. Burns',
    role: 'supervisor'
  };
  
  obj1.manager = obj2;
}
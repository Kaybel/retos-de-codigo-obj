/*
Dado un objeto como parámetro, contar la cantidad de propiedades que este contiene y retornarlo.

Ejemplo:

const output = objectPropertiesCounter({ 'name': 'John', 'lastname': 'Doe' });

console.log(ouput); // -> 2
*/

const output = {  
  'name': 'John', 
  'lastname': 'Doe'
};

Object.key(output).length;

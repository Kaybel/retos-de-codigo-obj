/*
Escribe una función llamada greetCustomer.

Dando un nombre, greetCustomer devuelve un saludo basado en cuántas veces ese cliente ha visitado el restaurante. Consulte el objeto customerData.

El saludo debe ser diferente, dependiendo del nombre de la reservación.

Caso 1 - Cliente desconocido (el nombre no está presente en los datos de cliente):

var output = greetCustomer('Terrance');
console.log(output); // --> 'Welcome! Is this your first time?'
Caso 2 - Cliente que ha visitado sólo una vez (el valor de las visitas es 1)

var output = greetCustomer('Joe');
console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
Caso 3 - Repetir cliente: (valor de' visitas' es mayor que 1)

var output = greetCustomer('Carol');
console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'
Notas:

Tu función no debe alterar el objeto customerData para actualizar el número de visitas.
No codificar los datos exactos de la muestra. Esto es una mala idea:
if (firstName === 'Joe') {
  // do something
}
*/

let name = prompt('Cuál es tu nombre?');

function greetCustomer() {
  for (name in obj) {
    if (Object.values(customerData.name) === name) {
      console.log('Welcome back, ' + name + ' Were glad you liked us the first time!');
    } else if (Object.values(customerData.name) === name) {
      console.log('Welcome back, ' + name + ' So glad to see you again!');
    } else {
      console.log('Welcome! Is this your first time?');
    }
  }
}
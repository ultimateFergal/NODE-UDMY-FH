//Run with nodemon 01app.js

// Run with node app
/* 
// requires
const fs = require('fs');

let data = '';
for (let i = 1; i <= 10; i++) {
    data += `${ base } * ${ i } = ${ base * i }\n`;
}

console.log(results);

let dataBuffer = new Uint8Array(Buffer.from(results));
fs.writeFile(`tablas/tabla-${ base }.txt`, dataBuffer, (err) => {
  if (err) throw err;
  console.log(`The file tabla-${ base }.txt has been saved!`);
}); 
*/

// const multiplicar = require('./multiplicar/multiplicar');
const { crearArchivo } = require('./multiplicar/multiplicar');

// console.log(multiplicar);
console.log(crearArchivo);
let base = 'as';

// VARIABLES GLOBALES O DE ENTORNO
// console.log(module, 'GLOBAL module'); // module: objeto global, incluye id, exportaciones para ubicar objetos y sean trabajados de forma global
// console.log(process, 'GLOBAL process'); // Info del sistema operativo, usuario que lo ejecuta, para configuraciones clobales de la aplicación
// console.log(process.argv, 'process.argv');// Muestra ubicación de node y ubiación de la aplicación, los argumentos que por defecto hay en el comando 'node
                                            // node 01app --base=5, arguemento que agrego a los por defecto y process.argv los mostrará listado
                                            // node 01app --base=5 a b c d e
/* multiplicar.crearArchivo(base)
    .then (archivo => console.log(`Àrchivo creado: ${ archivo }`));
 */

let argv = process.argv;
let parametro = argv[2];
base = parametro.split('=')[1];

console.log(parametro, 'parametro');
console.log(base, 'base');

crearArchivo(base)
    .then (archivo => console.log(`Àrchivo creado: ${ archivo }`))
    .catch( (err) => console.log(err));

    // Comandos 
    // node  --help
    // node --v
    // node 01app --base=
    // node 01app --base=5 
    // node 01app --hasta=20 --base=5
    // node 01app 
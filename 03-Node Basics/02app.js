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
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

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

 // const argv = require('yargs').argv;
/*  const argv = require('yargs')
                .command('listar', 'imprime en consola la tabla de multiplicar', {
                  base: {
                    demand: true,
                    alias: 'b'
                  },
                  limite: {
                    alias: 'l',
                    default: 10
                  }
                })
                .command('crear', 'Genera un archivo con la tabla de multiplicar', {
                  base: {
                    demand: true,
                    alias: 'b'
                  },
                  limite: {
                    alias: 'l',
                    default: 10
                  }
                })
                .help() // parar help de yargs: node 02app --help 
                .argv; */

const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

// comandos       
// node 02app listar --base 5 
// node 02app listar -b 5
// node 02app listar -b 


console.log(argv, 'argv de yargs');

let comando = argv._[0];

switch( comando ) {
  case 'listar':
    listarTabla( argv.base, argv.limite );
    console.log('listar');
    break;
  case 'crear':
    console.log('crear');
    crearArchivo(argv.base, argv.limite)
      // .then (archivo => console.log(`Àrchivo creado: ${ archivo }`))
      .then (archivo => console.log(`Àrchivo creado: `, colors.green(archivo)))
      .catch( (err) => console.log(err));
    break;

  default: 
    console.log('Comando no reconocido');
    break;
}
 
/* let argv2 = process.argv;
let parametro = argv2[2];
base = parametro.split('=')[1];

console.log(parametro, 'parametro');
console.log(base, 'base');

 */
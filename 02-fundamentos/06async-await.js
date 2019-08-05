/**
 *  Asyn await
*/

let getNombre = () => {
    return 'Fernando';
};

 console.log(getNombre()); // Retorna sólo Fernando

// SE agrega asyn que lo vuelve en una función asíncrona y devuelve una promesa
 let getNombre1 = async () => {

    // throw new Error('No existe el nombre en la base de datos;)
    return 'Fernando';
};// Igual a la promesa getNomnbreP

let getNombreP = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('Fernando');
        }, 3000)
        // resolve('Fernando');
    });
}

 console.log(getNombre1()); // Retorna  Promise Fernando
 // consola: node 06async-await.js

 getNombre1()
    .then(nombre => console.log(nombre, '->nombre desde then de la promesa con el async'))
    .catch( e => {
        console.log('Error de async', e);
    });


 getNombreP().then(namep => console.log(namep, 'de la promesa con 3 s'));


 let saludo = async () => {
     let nombre = await getNombre1(); // hasta que no llegue el resultado no continua a la siguiente línea de codigo de ese scope

     return `Hola ${nombre}`;
 }

 saludo()
 .then(mensaje => console.log(mensaje, '->mensaje con variable usando el await desde la promesa con el async'))
 .catch( e => {
     console.log('Error de async', e);
 });
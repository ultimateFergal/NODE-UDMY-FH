
// requires
const fs = require('fs');

let crearArchivo =  ( base ) => {
    return new Promise( (resolve, reject) => {

        if ( !Number(base) ) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';
        for (let i = 1; i <= 10; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        console.log(data);

        let dataBuffer = new Uint8Array(Buffer.from(data));
        fs.writeFile(`tablas/tabla-${ base }.txt`, dataBuffer, (err) => {
        if (err) 
            reject(err);
        else
            resolve(`tabla-${ base }.txt`);
        });

    });
};

module.exports = {
    crearArchivo
};



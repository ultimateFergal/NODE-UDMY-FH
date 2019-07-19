/**
 *  Asyn await
*/

let getNombre = () => {
    return 'Fernando';
};

 console.log(getNombre());

// SE agrega asyn que lo vuelve en una función asíncrona
 let getNombre1 = async () => {
    return 'Fernando';
};

 console.log(getNombre1());
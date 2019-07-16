let deadpool = {
    nombre: 'wade',
    apellido: 'Wilson',
    poder: 'Regeneración',
    getNombre: function() {
        return `${ this.nombre } ${ this.apellido } - poder ${this.poder}`;
    }
};

console.log(deadpool.getNombre());

/* let nombre = deadpool.nombre;
let apellido = deadpool.apellido;
let poder = deadpool.poder; */

// reasignación de valores del objeto a otras variables separadas de forma destructurada
let { nombre, apellido, poder } = deadpool;

console.log(nombre, apellido, poder);

// Reasignando destruturación con declaración de variables
let { nombre: primerNombre, apellido: primerApellido, poder: elPoder } = deadpool;

console.log(primerNombre, primerApellido, elPoder);



// FUNCIONES FLECHA

/* function sumar ( a, b) {
    return a + b;
} */
// o en ES6
let sumar = (a, b) =>  a + b;

console.log(sumar(10, 20));

/** */
/* function saludar() {
    return 'Hola mundo';
} */

let saludar = () => 'Hola Mundo';
console.log(saludar());

// en las funciones flecha el valor del this dentro de la funcion flecha apunta al valor del objeto this fuera de la función, entonces se debe usar la forma con la palabra función
let deadpool1 = {
    nombre: 'wade',
    apellido: 'Wilson',
    poder: 'Regeneración',
    getNombre: () => {
        return `${ this.nombre } ${ this.apellido } - poder ${this.poder}`;
    }
};


// CALLBACKS

setTimeout( () => {
    console.log('Hola Mundo Callback');
}, 0);

let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: 'Fernando',
        id // ES6 , obtenido del parámetro
    };

    if ( id === 20) {
        callback(`El usuario con id ${id} no existe ne la BD`);
    } else  if ( id === 21) {
        callback(`El usuario con id ${id} no existe ne la BD`);
    } 
    else {
        callback(null, usuario);
    }    
};

getUsuarioById(20, (err, usuario) => {

    if (err) {
        return console.log(err);
    }

    console.log('Usuario de base de datos', usuario);
});

getUsuarioById(21, (err, usuario) => {

    if (err) {
        return console.log(err);
    }

    console.log('Usuario de base de datos', usuario);
});

getUsuarioById(1, (err, usuario) => {

    if (err) {
        return console.log(err);
    }

    console.log('Usuario de base de datos', usuario);
});




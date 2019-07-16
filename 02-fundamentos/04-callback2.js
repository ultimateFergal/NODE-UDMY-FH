let empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Luis'
    },
    {
        id: 3,
        nombre: 'Juan'
    },
];

let salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find ( empleados => empleados.id === id);

    if( !empleadoDB ) {
        callback(`No existe un empleado con el ID ${ id }`);// Un sól parámetro es error implícito
    } else {
        callback(null, empleadoDB); // null indica que no hay error
    }
};

getEmpleado(1, (err, empleado) => {
    
    if (err) {
        return console.log(empleado);
    }
    console.log(empleado);
});


let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find( salario => salario.id === empleado.id);
    
    if( !salarioDB ) {
        callback(`No se encontró un salario para el usuario ${ empleado.nombre }`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }
};

getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.lof(err);
    }

    getSalario( empleado, (err, resp) => {

        if (err) {
            return console.log(err);
        }

        console.log(`el salario de ${ resp.nombre} es de ${ resp.salario }`);
    });
});

getEmpleado(2, (err, empleado) => {
    if (err) {
        return console.lof(err);
    }

    getSalario( empleado, (err, resp) => {

        if (err) {
            return console.log(err);
        }

        console.log(`el salario de ${ resp.nombre} es de ${ resp.salario }`);
    });
});

getEmpleado(3, (err, empleado) => {
    if (err) {
        return console.lof(err);
    }

    getSalario( empleado, (err, resp) => {

        if (err) {
            return console.log(err);
        }

        console.log(`el salario de ${ resp.nombre} es de ${ resp.salario }`);
    });
});

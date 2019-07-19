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

let getEmpleado = (id) => {

    return new Promise ((resolve, reject) => {
        let empleadoDB = empleados.find ( empleados => empleados.id === id);

        if( !empleadoDB ) {
            reject(`No existe un empleado con el ID ${ id }`);// Un sól parámetro es error implícito
        } else {
            resolve(empleadoDB); // null indica que no hay error
        }
    });
};

getEmpleado(1).then(empleado => {
    console.log('Empleado de BD', empleado);
});


getEmpleado(2).then(empleado => {
    console.log('Empleado de BD', empleado);
});


getEmpleado(10).then(empleado => {
    console.log('Empleado de BD', empleado);
}, (err) => {
    console.log(err);
});

let getSalario = (empleado) => {
    return new Promise ((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if( !salarioDB ) {
            reject(`No se encontró un salario para el usuario ${ empleado.nombre }`);
            console.log('El reject y el resolve no son returns, se sigue ejecutando el código');
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });
};

getEmpleado(3).then(empleado => {

    getSalario(empleado).then(resp => {
        console.log(`El salario de ${ resp.nombre } es de ${ resp.salarcio}`);
    }, (err) => {
        console.log(err);
    });

}, (err) => {
    console.log(err);
});

// el resolve y el reject no es un return


// Promesas en cadena

getEmpleado(3).then(empleado => {
        return getSalario(empleado)
    })
    .then(reso => {
        console.log(`El salario de ${ resp.nombre } es de ${ resp.salario } en cadena`);
    })
    .catch(err => {
        console.log(err);
    });



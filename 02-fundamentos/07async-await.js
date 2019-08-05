// Promesas con async await - less lines of code

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

let getEmpleado = async (id) => {


    let empleadoDB = empleados.find ( empleados => empleados.id === id);

    if( !empleadoDB ) {
        throw new Error(`No existe un empleado con el ID ${ id }`);// Un sól parámetro es error implícito
    } else {
        return empleadoDB; // null indica que no hay error
    }
};

let getSalario = async (empleado) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if( !salarioDB ) {
            console.log('El reject y el resolve no son returns, se sigue ejecutando el código');
            throw new Error(`No se encontró un salario para el usuario ${ empleado.nombre }`);
        } else {
            return{
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            };
        }
};

let getInformacion =  async(id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    console.log(empleado, 'empleado asyncawait2');
    console.log(resp, 'resp asyncawait2');

    return `${ resp.nombre } tiene un salario de ${ resp.salario }`;

}

getInformacion(1); // correr en consola con nodemon 07async-await.js 
getInformacion(1).then(mensaje => console.log(mensaje, 'mensaje resolviendo promesa'));
getInformacion(2)
    .then(mensaje => console.log(mensaje, 'mensaje resolviendo promesa'))
    .catch( err => console.log(err, 'agregando catch para capturar el error del reject de la promesa'));
getInformacion(3)
    .then(mensaje => console.log(mensaje, 'mensaje resolviendo promesa'))
    .catch( err => console.log(err, 'agregando catch para capturar el error del reject de la promesa'));
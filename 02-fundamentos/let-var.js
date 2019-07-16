var nombre = 'Wolverine';

if (true) {
    var nombre = 'Magneto';
}

// 'var' Allows to declare again same variable
var nombre = 'Heyyyyy';

// 'var also will let you reasign the value of a variable no matter its scope
console.log(nombre);


let nombre1 = 'Wolverine';
let nombre2 = 'Screwball';

if (true) {
    // 'let' will allow you to reassign value to the variables inside the same scope
    let nombre1 = 'Magneto';
    nombre2 = 'Lonely';
}

// 'let' wont let you declare again same variable inside an scope
// let nombre1 = 'Wolverine';

console.log(nombre);
console.log(nombre1);
console.log(nombre2);




for (var j = 0; j <= 5; j++) { // con 'var' Console.log exterior imprimrá 6, con 'let' imprimirá undefined
    console.log(`i: ${ j }`);
}

console.log(j);


let i = 'Hola mundo';

for (let i = 0; i <= 5; i++) { // Scope para esta i
    console.log(`i: ${ i }`);
}

console.log(i); // Imprime de nuevo hola mundo, diferente scope
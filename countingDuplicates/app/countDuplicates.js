// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

const counter = (string) => {
    let data = {};
    let result = 0;
    let lowerString = string.toLowerCase();

    for(let i=0; i<string.length; i++) {
        if(false == (Object.keys(data).includes(i))) {
            let letter = string.charAt(i)
            data = {
                letter : 1
            };
        }
    }
    let test = Object.keys(data).length;
    return test;
}

console.log(counter(""));





// const tools = {
//     contadorLetras(string) {
//     let cont = 0;
//     for(let i=0; i<string.length; i++) {
//         cont++;
//         }
//     return cont;
//     },
//     saludador(nombre) {
//         return `Hola ${nombre}`;
//     },
//     nombre : "Bruno"
// }
// const futurama = {
//     bender: "robot",
//     fry: "humano",
//     lila: "humana",
//     edobot: "robot",
//     mordelon: "mascota"
// }

// let personajes = Object.entries(futurama);
// console.log(personajes);
// console.log(personajes[0][1]);
// console.log(personajes[1][0]);

// // Pruebas del Contador de Letras

// console.log(tools.contadorLetras("ambar"));
// console.log(tools.contadorLetras("yes"));
// console.log(tools.contadorLetras("asteroide"));
// console.log(tools.contadorLetras("zoiberg"));

// // Pruebas del Saludador

// console.log(tools.saludador("Bruno"));
// console.log(tools.saludador("Lila"));
// console.log(tools.saludador("Bender"));
// console.log(tools.saludador("Fry"));